import { Unidad } from '../domain/entity/Unidad'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { UnidadCentroDeCostoUniquenessChecker } from '../domain/service/UnidadCentroDeCostoUniquenessChecker'
import { UnidadCodigoInternoUniquenessChecker } from '../domain/service/UnidadCodigoInternoUniquenessChecker'
import { UnidadHierarchyValidator } from '../domain/service/UnidadHierarchyValidator'
import { UnidadNameUniquenessChecker } from '../domain/service/UnidadNameUniquenessChecker'
import { UnidadId } from '../domain/valueObject/UnidadId'
import { CargoId } from '../../Cargo/domain/valueObject/CargoId'
import { UnidadDoesNotExistError } from '../domain/errors/UnidadDoesNotExistError'
import type { EventBus } from '../../../Shared/domain/event/EventBus'
import type { CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import type { UnidadParams, UnidadPrimitives } from '../domain/entity/Unidad.dto'
import type { UnidadRepository } from '../domain/repository/UnidadRepository'
import type { Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Use case for updating an existing Unidad entity.
 */
export class UnidadUpdater {
	private readonly unidadRepository: UnidadRepository
	private readonly nameUniquenessChecker: UnidadNameUniquenessChecker
	private readonly centroDeCostoUniquenessChecker: UnidadCentroDeCostoUniquenessChecker
	private readonly codigoInternoUniquenessChecker: UnidadCodigoInternoUniquenessChecker
	private readonly hierarchyValidator: UnidadHierarchyValidator
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
		this.nameUniquenessChecker = new UnidadNameUniquenessChecker(unidadRepository)
		this.centroDeCostoUniquenessChecker = new UnidadCentroDeCostoUniquenessChecker(unidadRepository)
		this.codigoInternoUniquenessChecker = new UnidadCodigoInternoUniquenessChecker(unidadRepository)
		this.hierarchyValidator = new UnidadHierarchyValidator(unidadRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the unidad update process.
	 * @param {{ id: Primitives<UnidadId>; params: Partial<UnidadParams> }} data The parameters for updating the unidad.
	 * @returns {Promise<void>} A promise that resolves when the unidad is successfully updated.
	 * @throws {UnidadDoesNotExistError} If the unidad with the provided ID does not exist.
	 */
	async run({ id, params }: { id: Primitives<UnidadId>; params: Partial<UnidadParams> }): Promise<void> {
		const unidadId = new UnidadId(id)
		// Guardamos el estado previo para la lógica de negocio posterior
		const unidad = await this.unidadRepository.findById(unidadId.value)

		if (!unidad) {
			throw new UnidadDoesNotExistError(id)
		}

		const unidadEntity = Unidad.fromPrimitives(unidad)
		const changes: Array<{ field: keyof UnidadPrimitives; oldValue: unknown; newValue: unknown }> = []
		const validations: Promise<unknown>[] = []

		// Validaciones de unicidad pasando el ID actual para excluirlo de la búsqueda
		if (params.name && unidadEntity.nameValue !== params.name.trim()) {
			validations.push(this.nameUniquenessChecker.ensureUnique(params.name, unidadEntity.idValue))
			changes.push({
				field: 'name',
				oldValue: unidadEntity.nameValue,
				newValue: params.name
			})
			unidadEntity.updateName(params.name)
		}

		if (params.centroDeCosto && unidadEntity.centroDeCostoValue !== params.centroDeCosto) {
			validations.push(
				this.centroDeCostoUniquenessChecker.ensureUnique(params.centroDeCosto, unidadEntity.idValue)
			)
			changes.push({
				field: 'centroDeCosto',
				oldValue: unidadEntity.centroDeCostoValue,
				newValue: params.centroDeCosto
			})
			unidadEntity.updateCentroDeCosto(params.centroDeCosto)
		}

		if (params.codigoInterno && unidadEntity.codigoInternoValue !== params.codigoInterno.trim()) {
			validations.push(
				this.codigoInternoUniquenessChecker.ensureUnique(params.codigoInterno, unidadEntity.idValue)
			)
			changes.push({
				field: 'codigoInterno',
				oldValue: unidadEntity.codigoInternoValue,
				newValue: params.codigoInterno
			})
			unidadEntity.updateCodigoInterno(params.codigoInterno)
		}

		if (params.rangeLevel && unidadEntity.rangeLevelValue !== params.rangeLevel) {
			changes.push({
				field: 'rangeLevel',
				oldValue: unidadEntity.rangeLevelValue,
				newValue: params.rangeLevel
			})
			unidadEntity.updateRangeLevel(params.rangeLevel)
		}

		// Validar jerarquía si cambia el padre O el nivel de la unidad actual
		const parentIdChanged = params.parentId !== undefined && params.parentId !== unidadEntity.parentIdValue
		const rangeLevelChanged = params.rangeLevel !== undefined && params.rangeLevel !== unidadEntity.rangeLevelValue

		if (parentIdChanged || rangeLevelChanged) {
			const newParentId = params.parentId !== undefined ? params.parentId : unidadEntity.parentIdValue
			validations.push(this.hierarchyValidator.validate(unidadEntity.rangeLevelValue, newParentId))
			changes.push({
				field: 'parentId',
				oldValue: unidadEntity.parentIdValue,
				newValue: params.parentId
			})
			unidadEntity.updateParentId(newParentId)
		}

		if (params.isUnitActive && unidadEntity.isUnitActiveValue !== params.isUnitActive) {
			changes.push({
				field: 'isUnitActive',
				oldValue: unidadEntity.isUnitActiveValue,
				newValue: params.isUnitActive
			})
			unidadEntity.updateIsUnitActive(params.isUnitActive)
		}

		if (params.cargos) {
			await this.cargoExistenceChecker.ensureExist(params.cargos)
			changes.push({
				field: 'cargos',
				oldValue: unidadEntity.cargosValue,
				newValue: params.cargos
			})
			const uniqueCargos = Array.from(new Set(params.cargos))
			const newIdSet = new Set(uniqueCargos)
			const currentIdSet = new Set(unidadEntity.cargosValue)

			// Añadir categorías nuevas
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					unidadEntity.addCargo(new CargoId(id))
				}
			}

			// Eliminar categorías que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					unidadEntity.removeCargo(new CargoId(id))
				}
			}
		}
		await Promise.all(validations)
		if (changes.length > 0) {
			unidadEntity.registerUpdateEvent(changes)
			await this.unidadRepository.save(unidadEntity.toPrimitives())
			await this.eventBus.publish(unidadEntity.pullDomainEvents())
		}
	}
}
