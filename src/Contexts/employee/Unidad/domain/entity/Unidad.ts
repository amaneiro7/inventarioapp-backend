import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { UnidadId } from '../valueObject/UnidadId'
import { UnidadName } from '../valueObject/UnidadName'
import { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { RangeLevel } from '../valueObject/RangeLevel'
import { CentroDeCosto } from '../valueObject/CentroDeCosto'
import { CodigoInterno } from '../valueObject/CodigoInterno'
import { IsUnitActive } from '../valueObject/IsUnitActive'
import { UnidadCargoAddedDomainEvent } from '../event/UnidadCargoAddedDomainEvent'
import { UnidadCargoRemovedDomainEvent } from '../event/UnidadCargoRemovedDomainEvent'
import { UnidadCreatedDomainEvent } from '../event/UnidadCreatedDomainEvent'
import { UnidadRemovedDomainEvent } from '../event/UnidadRemovedDomainEvent'
import { UnidadRenamedDomainEvent } from '../event/UnidadRenamedDomainEvent'
import { UnidadUpdatedDomainEvent } from '../event/UnidadUpdatedDomainEvent'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { UnidadParams, UnidadPrimitives, UnidadDto } from './Unidad.dto'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'

/**
 * @description Represents the Unidad domain entity, the highest level in the organizational chart.
 */
export class Unidad extends AggregateRoot {
	constructor(
		private readonly id: UnidadId,
		private name: UnidadName,
		private level: RangeLevel,
		private centroDeCosto: CentroDeCosto,
		private codigoInterno: CodigoInterno,
		private isUnitActive: IsUnitActive,
		private parentId: UnidadId | null,
		private cargos = new Set<CargoId>()
	) {
		super()
	}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `Unidad` instance.
	 * It generates a random UUID for the Unidad's ID.
	 * @param {UnidadParams} params The parameters required to create a Unidad (name and cargo IDs).
	 * @returns {Unidad} A new `Unidad` instance.
	 */
	static create(params: UnidadParams): Unidad {
		const id = UnidadId.random()
		const name = new UnidadName(params.name)
		const level = new RangeLevel(params.level)
		const centroDeCosto = new CentroDeCosto(params.centroDeCosto)
		const codigoInterno = new CodigoInterno(params.codigoInterno)
		const isUnitActive = new IsUnitActive(params.isUnitActive)
		const parentId = params.parentId ? new UnidadId(params.parentId) : null
		const cargos = new Set(params.cargos.map(cargoId => new CargoId(cargoId)))
		const unidad = new Unidad(id, name, level, centroDeCosto, codigoInterno, isUnitActive, parentId, cargos)
		unidad.record(
			new UnidadCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)
		return unidad
	}
	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Unidad` instance from its primitive representation (DTO).
	 * @param {UnidadDto} primitives The primitive data of the Unidad.
	 * @returns {Unidad} A `Unidad` instance.
	 */
	static fromPrimitives(primitives: UnidadDto): Unidad {
		const uniqueCargos = new Set(primitives.cargos.map(cargo => new CargoId(cargo.id)))
		return new Unidad(
			new UnidadId(primitives.id),
			new UnidadName(primitives.name),
			new RangeLevel(primitives.level),
			new CentroDeCosto(primitives.centroDeCosto),
			new CodigoInterno(primitives.codigoInterno),
			new IsUnitActive(primitives.isUnitActive),
			primitives.parentId ? new UnidadId(primitives.parentId) : null,
			uniqueCargos
		)
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `Unidad` instance into its primitive, serializable representation.
	 * @returns {UnidadPrimitives} The primitive representation of the Unidad.
	 */
	toPrimitives(): UnidadPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			level: this.levelValue,
			centroDeCosto: this.centroDeCostoValue,
			codigoInterno: this.codigoInternoValue,
			isUnitActive: this.isUnitActiveValue,
			parentId: this.parentIdValue,
			cargos: this.cargosValue
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new UnidadUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * @method updateName
	 * @description Updates the name of the Unidad.
	 * Records a `UnidadRenamedDomainEvent`.
	 * @param {UnidadName['value']} newName The new name for the Unidad.
	 */
	updateName(newName: Primitives<UnidadName>): void {
		this.name = new UnidadName(newName)
		this.record(
			new UnidadRenamedDomainEvent({
				aggregateId: this.id.value,
				name: this.name.value
			})
		)
	}

	/**
	 * @method updateRangeLevel
	 * @description Updates the hierarchical range level of the Unidad.
	 * @param {Primitives<RangeLevel>} newRangeLevel The new range level for the Unidad.
	 */
	updateRangeLevel(newRangeLevel: Primitives<RangeLevel>): void {
		this.level = new RangeLevel(newRangeLevel)
	}

	/**
	 * @method updateCentroDeCosto
	 * @description Updates the cost center of the Unidad.
	 * @param {Primitives<CentroDeCosto>} newCentroDeCosto The new cost center for the Unidad.
	 */
	updateCentroDeCosto(newCentroDeCosto: Primitives<CentroDeCosto>): void {
		this.centroDeCosto = new CentroDeCosto(newCentroDeCosto)
	}

	/**
	 * @method updateCodigoInterno
	 * @description Actualiza el código interno de la unidad.
	 * Protege la integridad impidiendo cambios accidentales si ya existe un valor.
	 * @param {Primitives<CodigoInterno>} newCodigoInterno El nuevo código.
	 * @param {boolean} force Si es true, permite sobreescribir un código ya existente.
	 */
	updateCodigoInterno(newCodigoInterno: Primitives<CodigoInterno>, force = false): void {
		if (this.codigoInternoValue && this.codigoInternoValue !== newCodigoInterno && !force) {
			throw new InvalidArgumentError(
				'El código interno ya está asignado y no puede ser modificado para preservar la integridad de los reportes.'
			)
		}
		this.codigoInterno = new CodigoInterno(newCodigoInterno)
	}

	/**
	 * @method updateIsUnitActive
	 * @description Updates the active status of the Unidad.
	 * @param {Primitives<IsUnitActive>} newIsUnitActive The new active status for the Unidad.
	 */
	updateIsUnitActive(newIsUnitActive: Primitives<IsUnitActive>): void {
		this.isUnitActive = new IsUnitActive(newIsUnitActive)
	}

	/**
	 * @method updateParentId
	 * @description Updates the parent ID of the Unidad, establishing its hierarchical relationship.
	 * @param {Primitives<UnidadId> | null} newParentId The ID of the parent Unidad, or null if it's a top-level unit.
	 */
	updateParentId(newParentId: Primitives<UnidadId> | null): void {
		if (newParentId === this.idValue) {
			// Prevent a unit from being its own parent
			// This is a basic check, more complex hierarchy validation (e.g., circular dependencies)
			// should be handled by a domain service or application service.
			throw new Error('Una unidad no puede ser su propia unidad padre.')
		}
		this.parentId = newParentId ? new UnidadId(newParentId) : null
	}

	/**
	 * @description Associates a new cargo with the Unidad.
	 * @param {CargoId} cargoId The cargo to add.
	 */
	addCargo(cargoId: CargoId): void {
		if (this.hasCargo(cargoId)) {
			return // Evita duplicados y eventos innecesarios
		}
		this.cargos.add(cargoId)
		this.record(
			new UnidadCargoAddedDomainEvent({
				aggregateId: this.id.value,
				cargoId: cargoId.value
			})
		)
	}

	/**
	 * @description Removes a cargo association from the Unidad.
	 * @param {CargoId} cargoId The cargo to remove.
	 */
	removeCargo(cargoId: CargoId): void {
		const cargoToRemove = [...this.cargos].find(c => c.equals(cargoId))
		if (cargoToRemove) {
			this.cargos.delete(cargoToRemove)
			this.record(
				new UnidadCargoRemovedDomainEvent({
					aggregateId: this.id.value,
					cargoId: cargoId.value
				})
			)
		}
	}

	/**
	 * @description Marks the Unidad as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new UnidadRemovedDomainEvent({
				aggregateId: this.id.value,
				name: this.name.value
			})
		)
	}

	private hasCargo(cargoId: CargoId): boolean {
		return [...this.cargos].some(c => c.equals(cargoId))
	}

	/**
	 * @getter idValue
	 * @description Returns the primitive value of the Unidad's ID.
	 * @returns {UnidadId['value']}
	 */
	get idValue(): Primitives<UnidadId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the Unidad's name.
	 * @returns {Primitives<UnidadName>}
	 */
	get nameValue(): Primitives<UnidadName> {
		return this.name.value
	}

	/**
	 * @getter levelValue
	 * @description Returns the primitive value of the Unidad's hierarchical range level.
	 * @returns {Primitives<RangeLevel>}
	 */
	get levelValue(): Primitives<RangeLevel> {
		return this.level.value
	}

	/**
	 * @getter centroDeCostoValue
	 * @description Returns the primitive value of the Unidad's cost center.
	 * @returns {Primitives<CentroDeCosto>}
	 */
	get centroDeCostoValue(): Primitives<CentroDeCosto> {
		return this.centroDeCosto.value
	}

	/**
	 * @getter codigoInternoValue
	 * @description Returns the primitive value of the Unidad's internal code.
	 * @returns {Primitives<CodigoInterno>}
	 */
	get codigoInternoValue(): Primitives<CodigoInterno> {
		return this.codigoInterno.value
	}

	/**
	 * @getter isUnitActiveValue
	 * @description Returns the primitive value indicating if the Unidad is active.
	 * @returns {Primitives<IsUnitActive>}
	 */
	get isUnitActiveValue(): Primitives<IsUnitActive> {
		return this.isUnitActive.value
	}

	/**
	 * @getter parentIdValue
	 * @description Returns the primitive value of the Unidad's parent ID, or null if it has no parent.
	 * @returns {Primitives<UnidadId> | null}
	 */
	get parentIdValue(): Primitives<UnidadId> | null {
		return this.parentId?.value ?? null
	}

	/**
	 * @getter cargosValue
	 * @description Returns the primitive values of the Unidad's associated cargo IDs.
	 * @returns {CargoId['value'][]}
	 */
	get cargosValue(): Primitives<CargoId>[] {
		return Array.from(this.cargos).map(c => c.value)
	}
}
