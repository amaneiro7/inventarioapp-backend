import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { UnidadId } from '../valueObject/UnidadId'
import { UnidadName } from '../valueObject/UnidadName'
import { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { UnidadCargoAddedDomainEvent } from '../event/UnidadCargoAddedDomainEvent'
import { UnidadCargoRemovedDomainEvent } from '../event/UnidadCargoRemovedDomainEvent'
import { UnidadCreatedDomainEvent } from '../event/UnidadCreatedDomainEvent'
import { UnidadRemovedDomainEvent } from '../event/UnidadRemovedDomainEvent'
import { UnidadRenamedDomainEvent } from '../event/UnidadRenamedDomainEvent'
import { UnidadUpdatedDomainEvent } from '../event/UnidadUpdatedDomainEvent'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { UnidadParams, UnidadPrimitives, UnidadDto } from './Unidad.dto'

/**
 * @description Represents the Unidad domain entity, the highest level in the organizational chart.
 */
export class Unidad extends AggregateRoot {
	constructor(
		private readonly id: UnidadId,
		private name: UnidadName,
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
		const cargos = new Set(params.cargos.map(cargoId => new CargoId(cargoId)))
		const directiva = new Unidad(id, name, cargos)
		directiva.record(
			new UnidadCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)
		return directiva
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
		return new Unidad(new UnidadId(primitives.id), new UnidadName(primitives.name), uniqueCargos)
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
	 * @returns {UnidadName['value']}
	 */
	get nameValue(): Primitives<UnidadName> {
		return this.name.value
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
