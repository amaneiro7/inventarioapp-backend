import { Unidad } from '../domain/entity/Unidad'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { UnidadCentroDeCostoUniquenessChecker } from '../domain/service/UnidadCentroDeCostoUniquenessChecker'
import { UnidadCodigoInternoUniquenessChecker } from '../domain/service/UnidadCodigoInternoUniquenessChecker'
import { UnidadHierarchyValidator } from '../domain/service/UnidadHierarchyValidator'
import { UnidadNameUniquenessChecker } from '../domain/service/UnidadNameUniquenessChecker'
import type { EventBus } from '../../../Shared/domain/event/EventBus'
import type { CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import type { UnidadParams } from '../domain/entity/Unidad.dto'
import type { UnidadRepository } from '../domain/repository/UnidadRepository'

/**
 * @description Use case for creating a new Employee entity.
 */
export class UnidadCreator {
	private readonly unidadRepository: UnidadRepository
	private readonly unidadNameUniquenessChecker: UnidadNameUniquenessChecker
	private readonly unidadCentroDeCostoUniquenessChecker: UnidadCentroDeCostoUniquenessChecker
	private readonly unidadCodigoInternoUniquenessChecker: UnidadCodigoInternoUniquenessChecker
	private readonly unidadHierarchyValidator: UnidadHierarchyValidator
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		unidadRepository,
		cargoRepository,
		eventBus
	}: {
		unidadRepository: UnidadRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.unidadRepository = unidadRepository
		this.unidadNameUniquenessChecker = new UnidadNameUniquenessChecker(unidadRepository)
		this.unidadCentroDeCostoUniquenessChecker = new UnidadCentroDeCostoUniquenessChecker(unidadRepository)
		this.unidadCodigoInternoUniquenessChecker = new UnidadCodigoInternoUniquenessChecker(unidadRepository)
		this.unidadHierarchyValidator = new UnidadHierarchyValidator(unidadRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the employee creation process.
	 * @param {{ params: UnidadParams }} data The parameters for creating the employee.
	 * @returns {Promise<void>} A promise that resolves when the employee is successfully created.
	 */
	async run({ params }: { params: UnidadParams }): Promise<void> {
		const { cargos } = params
		const uniqueCargos = Array.from(new Set(cargos))
		await Promise.all([
			this.unidadNameUniquenessChecker.ensureUnique(params.name),
			this.unidadCentroDeCostoUniquenessChecker.ensureUnique(params.centroDeCosto),
			this.unidadCodigoInternoUniquenessChecker.ensureUnique(params.codigoInterno),
			this.unidadHierarchyValidator.validate(params.level, params.parentId),
			this.cargoExistenceChecker.ensureExist(uniqueCargos)
		])

		const unidad = Unidad.create({ ...params, cargos: uniqueCargos })

		await this.unidadRepository.save(unidad.toPrimitives())
		await this.eventBus.publish(unidad.pullDomainEvents())
	}
}
