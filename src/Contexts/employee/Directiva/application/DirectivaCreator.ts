import { Directiva } from '../domain/entity/Directiva'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { DirectivaNameUniquenessChecker } from '../domain/service/DirectivaNameuniquenessChecker'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type DirectivaParams } from '../domain/entity/Directiva.dto'
import { type DirectivaRepository } from '../domain/repository/DirectivaRepository'

/**
 * @description Use case for creating a new Directiva entity.
 */
export class DirectivaCreator {
	private readonly directivaRepository: DirectivaRepository
	private readonly directivaNameUniquenessChecker: DirectivaNameUniquenessChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		directivaRepository,
		eventBus
	}: {
		directivaRepository: DirectivaRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.directivaRepository = directivaRepository
		this.directivaNameUniquenessChecker = new DirectivaNameUniquenessChecker(directivaRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the Directiva creation process.
	 * @param {{ params: DirectivaParams }} data The parameters for creating the Directiva.
	 * @returns {Promise<void>} A promise that resolves when the Directiva is successfully created.
	 */
	async run({ params }: { params: DirectivaParams }): Promise<void> {
		const { name, cargos } = params
		const uniqueCargos = Array.from(new Set(cargos))

		await Promise.all([
			this.directivaNameUniquenessChecker.ensureUnique(name),
			this.cargoExistenceChecker.ensureExist(uniqueCargos)
		])

		const directiva = Directiva.create({ name, cargos: uniqueCargos })
		await this.directivaRepository.save(directiva.toPrimitives())
		await this.eventBus.publish(directiva.pullDomainEvents())
	}
}
