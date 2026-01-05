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
import { CargoId } from '../domain/valueObject/CargoId'
import { CargoDoesNotExistError } from '../domain/errors/CargoDoesNotExistError'
import { DirectivaId } from '../../Directiva/domain/valueObject/DirectivaId'
import { VicepresidenciaEjecutivaId } from '../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { VicepresidenciaId } from '../../Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { DepartamentoId } from '../../Departamento/domain/valueObject/DepartamentoId'

/**
 * @description Use case for updating an existing Cargo entity.
 */
export class CargoUpdater {
	private readonly cargoRepository: CargoRepository
	private readonly cargoNameUniquenessChecker: CargoNameUniquenessChecker
	private readonly directivaExistenceChecker: DirectivaExistenceChecker
	private readonly departamentoExistenceChecker: DepartamentoExistenceChecker
	private readonly vicepresidenciaEjecutivaExistenceChecker: VicepresidenciaEjecutivaExistenceChecker
	private readonly vicepresidenciaExistenceChecker: VicepresidenciaExistenceChecker
	private readonly eventBus: EventBus

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
	 * @description Executes the cargo update process.
	 * @param {{ id: string; params: Partial<CargoParams> }} data The parameters for updating the cargo.
	 * @returns {Promise<void>} A promise that resolves when the cargo is successfully updated.
	 * @throws {CargoDoesNotExistError} If the cargo with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<CargoParams> }): Promise<void> {
		const cargoId = new CargoId(id)

		const cargo = await this.cargoRepository.findById(cargoId.value)
		if (!cargo) {
			throw new CargoDoesNotExistError()
		}

		const cargoEntity = Cargo.fromPrimitives(cargo)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.name && cargoEntity.nameValue !== params.name.trim()) {
			await this.cargoNameUniquenessChecker.ensureUnique(params.name, cargoEntity.idValue)
			changes.push({
				field: 'name',
				oldValue: cargoEntity.nameValue,
				newValue: params.name
			})
			cargoEntity.updateName(params.name)
		}
		// Directivas
		if (params.directivas) {
			await this.directivaExistenceChecker.ensureExist(params.directivas)
			changes.push({
				field: 'directivas',
				oldValue: cargoEntity.directivasValue,
				newValue: params.directivas
			})
			const uniqueDirectivas = Array.from(new Set(params.directivas))
			const newIdSet = new Set(uniqueDirectivas)
			const currentIdSet = new Set(cargoEntity.directivasValue)

			// Añadir directivas nuevas
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					cargoEntity.addDirectiva(new DirectivaId(id))
				}
			}

			// Eliminar directivas que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					cargoEntity.removeDirectiva(new DirectivaId(id))
				}
			}
		}
		// VicepresidenciaEjecutivas
		if (params.vicepresidenciasEjecutivas) {
			await this.vicepresidenciaEjecutivaExistenceChecker.ensureExist(params.vicepresidenciasEjecutivas)
			changes.push({
				field: 'vicepresidenciasEjecutivas',
				oldValue: cargoEntity.vicepresidenciasEjecutivasValue,
				newValue: params.vicepresidenciasEjecutivas
			})
			const uniqueVicepresidenciaEjecutivas = Array.from(new Set(params.vicepresidenciasEjecutivas))
			const newIdSet = new Set(uniqueVicepresidenciaEjecutivas)
			const currentIdSet = new Set(cargoEntity.vicepresidenciasEjecutivasValue)

			// Añadir vicepresidencias ejecutivas nuevas
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					cargoEntity.addVicepresidenciaEjecutiva(new VicepresidenciaEjecutivaId(id))
				}
			}

			// Eliminar vicepresidencias ejecutivas que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					cargoEntity.removeVicepresidenciaEjecutiva(new VicepresidenciaEjecutivaId(id))
				}
			}
		}
		// Vicepresidencia
		if (params.vicepresidencias) {
			await this.vicepresidenciaExistenceChecker.ensureExist(params.vicepresidencias)
			changes.push({
				field: 'vicepresidencias',
				oldValue: cargoEntity.vicepresidenciasValue,
				newValue: params.vicepresidencias
			})
			const uniqueVicepresidencia = Array.from(new Set(params.vicepresidencias))
			const newIdSet = new Set(uniqueVicepresidencia)
			const currentIdSet = new Set(cargoEntity.vicepresidenciasValue)

			// Añadir vicepresidencias nuevas
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					cargoEntity.addVicepresidencia(new VicepresidenciaId(id))
				}
			}

			// Eliminar vicepresidencias que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					cargoEntity.removeVicepresidencia(new VicepresidenciaId(id))
				}
			}
		}
		// Departamento
		if (params.departamentos) {
			await this.departamentoExistenceChecker.ensureExist(params.departamentos)
			changes.push({
				field: 'departamentos',
				oldValue: cargoEntity.departamentosValue,
				newValue: params.departamentos
			})
			const uniqueDepartamento = Array.from(new Set(params.departamentos))
			const newIdSet = new Set(uniqueDepartamento)
			const currentIdSet = new Set(cargoEntity.departamentosValue)

			// Añadir departamentos nuevos
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					cargoEntity.addDepartamento(new DepartamentoId(id))
				}
			}

			// Eliminar departamentos que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					cargoEntity.removeDepartamento(new DepartamentoId(id))
				}
			}
		}

		// Solo guardar en la base de datos si realmente hubo un cambio
		if (changes.length > 0) {
			cargoEntity.registerUpdateEvent(changes)
			await this.cargoRepository.save(cargoEntity.toPrimitives())
			await this.eventBus.publish(cargoEntity.pullDomainEvents())
		}
	}
}
