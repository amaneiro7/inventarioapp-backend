import { VicepresidenciaEjecutiva } from '../domain/entity/VicepresidenciaEjecutiva'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { VicepresidenciaEjecutivaNameUniquenessChecker } from '../domain/service/VicepresidenciaEjecutivaNameuniquenessChecker'
import { DirectivaExistenceChecker } from '../../Directiva/domain/service/DirectivaExistanceChecker'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type VicepresidenciaEjecutivaParams } from '../domain/entity/VicepresidenciaEjecutiva.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type VicepresidenciaEjecutivaRepository } from '../domain/repository/VicepresidenciaEjecutivaRepository'
import { type DirectivaRepository } from '../../Directiva/domain/repository/DirectivaRepository'

export class VicepresidenciaEjecutivaCreator {
	private readonly vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
	private readonly vicepresidenciaEjecutivaNameUniquenessChecker: VicepresidenciaEjecutivaNameUniquenessChecker
	private readonly directivaExistenceChecker: DirectivaExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		directivaRepository,
		vicepresidenciaEjecutivaRepository,
		eventBus
	}: {
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
		directivaRepository: DirectivaRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.vicepresidenciaEjecutivaRepository = vicepresidenciaEjecutivaRepository
		this.vicepresidenciaEjecutivaNameUniquenessChecker = new VicepresidenciaEjecutivaNameUniquenessChecker(
			vicepresidenciaEjecutivaRepository
		)
		this.directivaExistenceChecker = new DirectivaExistenceChecker(directivaRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the VicepresidenciaEjecutiva creation process.
	 * @param {{ params: VicepresidenciaEjecutivaParams }} data The parameters for creating the VicepresidenciaEjecutiva.
	 * @returns {Promise<void>} A promise that resolves when the VicepresidenciaEjecutiva is successfully created.
	 */
	async run({ params }: { params: VicepresidenciaEjecutivaParams }): Promise<void> {
		const { name, directivaId, cargos } = params
		const uniqueCargos = Array.from(new Set(cargos))

		await Promise.all([
			this.vicepresidenciaEjecutivaNameUniquenessChecker.ensureUnique(name),
			this.directivaExistenceChecker.ensureExist(directivaId),
			this.cargoExistenceChecker.ensureExist(uniqueCargos)
		])

		const vicepresidenciaEjecutiva = VicepresidenciaEjecutiva.create({
			name,
			directivaId,
			cargos: uniqueCargos
		})

		await this.vicepresidenciaEjecutivaRepository.save(vicepresidenciaEjecutiva.toPrimitives())
		await this.eventBus.publish(vicepresidenciaEjecutiva.pullDomainEvents())
	}
}
