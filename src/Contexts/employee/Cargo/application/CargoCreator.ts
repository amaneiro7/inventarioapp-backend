import { Cargo } from '../domain/entity/Cargo'
import { CargoNameUniquenessChecker } from '../domain/service/CargoNameuniquenessChecker'
import { UnidadExistenceChecker } from '../../Unidad/domain/service/UnidadExistanceChecker'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type CargoRepository } from '../domain/repository/CargoRepository'
import { type CargoParams } from '../domain/entity/Cargo.dto'
import { type UnidadRepository } from '../../Unidad/domain/repository/UnidadRepository'

/**
 * @description Use case for creating a new Cargo entity.
 */
export class CargoCreator {
	private readonly cargoRepository: CargoRepository
	private readonly cargoNameUniquenessChecker: CargoNameUniquenessChecker
	private readonly unidadExistenceChecker: UnidadExistenceChecker
	private readonly eventBus: EventBus

	/**
	 * @param {Object} params - The dependencies for the CargoCreator.
	 * @param {CargoRepository} params.cargoRepository - The repository for Cargo entities.
	 * @param {UnidadRepository} params.unidadRepository - The repository for Unidad entities.
	 * @param {EventBus} params.eventBus - The event bus for publishing domain events.
	 */
	constructor({
		cargoRepository,
		unidadRepository,
		eventBus
	}: {
		cargoRepository: CargoRepository
		unidadRepository: UnidadRepository
		eventBus: EventBus
	}) {
		this.cargoRepository = cargoRepository
		this.cargoNameUniquenessChecker = new CargoNameUniquenessChecker(cargoRepository)
		this.unidadExistenceChecker = new UnidadExistenceChecker(unidadRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the cargo creation process.
	 * @param {{ params: CargoParams }} data The parameters for creating the cargo.
	 * @returns {Promise<void>} A promise that resolves when the cargo is successfully created.
	 * @throws {CargoAlreadyExistsError} If a cargo with the same name already exists.
	 * @throws {UnidadDoesNotExistError} If any of the provided Unidads do not exist.
	 */
	async run({ params: { name, unidades } }: { params: CargoParams }): Promise<void> {
		const uniqueUnidades = Array.from(new Set(unidades))

		await Promise.all([
			this.cargoNameUniquenessChecker.ensureUnique(name),
			this.unidadExistenceChecker.ensureExist(uniqueUnidades)
		])

		const cargo = Cargo.create({
			name,
			unidades: uniqueUnidades
		})

		await this.cargoRepository.save(cargo.toPrimitives())
		await this.eventBus.publish(cargo.pullDomainEvents())
	}
}
