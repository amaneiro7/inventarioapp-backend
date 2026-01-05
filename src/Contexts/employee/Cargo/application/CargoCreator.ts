import { Cargo } from '../domain/entity/Cargo'
import { CargoNameUniquenessChecker } from '../domain/service/CargoNameuniquenessChecker'
import { DirectivaExistenceChecker } from '../../Directiva/domain/service/DirectivaExistanceChecker'
import { VicepresidenciaExistenceChecker } from '../../Vicepresidencia/domain/service/VicepresidenciaExistanceChecker'
import { VicepresidenciaEjecutivaExistenceChecker } from '../../VicepresidenciaEjecutiva/domain/service/VicepresidenciaEjecutivaExistanceChecker'
import { DepartamentoExistenceChecker } from '../../Departamento/domain/service/DepartamentoExistanceChecker'
import { type DirectivaRepository } from '../../Directiva/domain/repository/DirectivaRepository'
import { type VicepresidenciaEjecutivaRepository } from '../../VicepresidenciaEjecutiva/domain/repository/VicepresidenciaEjecutivaRepository'
import { type VicepresidenciaRepository } from '../../Vicepresidencia/domain/repository/VicepresidenciaRepository'
import { type DepartamentoRepository } from '../../Departamento/domain/repository/DepartamentoRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type CargoRepository } from '../domain/repository/CargoRepository'
import { type CargoParams } from '../domain/entity/Cargo.dto'

/**
 * @description Use case for creating a new Cargo entity.
 */
export class CargoCreator {
	private readonly cargoRepository: CargoRepository
	private readonly cargoNameUniquenessChecker: CargoNameUniquenessChecker
	private readonly directivaExistenceChecker: DirectivaExistenceChecker
	private readonly departamentoExistenceChecker: DepartamentoExistenceChecker
	private readonly vicepresidenciaEjecutivaExistenceChecker: VicepresidenciaEjecutivaExistenceChecker
	private readonly vicepresidenciaExistenceChecker: VicepresidenciaExistenceChecker
	private readonly eventBus: EventBus

	/**
	 * @param {Object} params - The dependencies for the CargoCreator.
	 * @param {CargoRepository} params.cargoRepository - The repository for Cargo entities.
	 * @param {DepartamentoRepository} params.departamentoRepository - The repository for Departamento entities.
	 * @param {DirectivaRepository} params.directivaRepository - The repository for Directiva entities.
	 * @param {VicepresidenciaEjecutivaRepository} params.vicepresidenciaEjecutivaRepository - The repository for VicepresidenciaEjecutiva entities.
	 * @param {VicepresidenciaRepository} params.vicepresidenciaRepository - The repository for Vicepresidencia entities.
	 * @param {EventBus} params.eventBus - The event bus for publishing domain events.
	 */
	constructor({
		cargoRepository,
		departamentoRepository,
		directivaRepository,
		vicepresidenciaEjecutivaRepository,
		vicepresidenciaRepository,
		eventBus
	}: {
		cargoRepository: CargoRepository
		departamentoRepository: DepartamentoRepository
		directivaRepository: DirectivaRepository
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
		vicepresidenciaRepository: VicepresidenciaRepository
		eventBus: EventBus
	}) {
		this.cargoRepository = cargoRepository
		this.cargoNameUniquenessChecker = new CargoNameUniquenessChecker(cargoRepository)
		this.directivaExistenceChecker = new DirectivaExistenceChecker(directivaRepository)
		this.vicepresidenciaEjecutivaExistenceChecker = new VicepresidenciaEjecutivaExistenceChecker(
			vicepresidenciaEjecutivaRepository
		)
		this.vicepresidenciaExistenceChecker = new VicepresidenciaExistenceChecker(vicepresidenciaRepository)
		this.departamentoExistenceChecker = new DepartamentoExistenceChecker(departamentoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the cargo creation process.
	 * @param {{ params: CargoParams }} data The parameters for creating the cargo.
	 * @returns {Promise<void>} A promise that resolves when the cargo is successfully created.
	 * @throws {CargoAlreadyExistsError} If a cargo with the same name already exists.
	 * @throws {DirectivaDoesNotExistError} If any of the provided directivas do not exist.
	 * @throws {VicepresidenciaEjecutivaDoesNotExistError} If any of the provided executive vice presidencies do not exist.
	 * @throws {VicepresidenciaDoesNotExistError} If any of the provided vice presidencies do not exist.
	 * @throws {DepartamentoDoesNotExistError} If any of the provided departments do not exist.
	 */
	async run({
		params: { name, departamentos, directivas, vicepresidencias, vicepresidenciasEjecutivas }
	}: {
		params: CargoParams
	}): Promise<void> {
		const uniqueDepartamentos = Array.from(new Set(departamentos))
		const uniqueDirectivas = Array.from(new Set(directivas))
		const uniqueVicepresidencias = Array.from(new Set(vicepresidencias))
		const uniqueVicepresidenciasEjecutivas = Array.from(new Set(vicepresidenciasEjecutivas))

		await Promise.all([
			this.cargoNameUniquenessChecker.ensureUnique(name),
			this.directivaExistenceChecker.ensureExist(uniqueDirectivas),
			this.vicepresidenciaEjecutivaExistenceChecker.ensureExist(uniqueVicepresidenciasEjecutivas),
			this.vicepresidenciaExistenceChecker.ensureExist(uniqueVicepresidencias),
			this.departamentoExistenceChecker.ensureExist(uniqueDepartamentos)
		])

		const cargo = Cargo.create({
			name,
			departamentos: uniqueDepartamentos,
			directivas: uniqueDirectivas,
			vicepresidencias: uniqueVicepresidencias,
			vicepresidenciasEjecutivas: uniqueVicepresidenciasEjecutivas
		})

		await this.cargoRepository.save(cargo.toPrimitives())
		await this.eventBus.publish(cargo.pullDomainEvents())
	}
}
