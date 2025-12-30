import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { DirectivaId } from '../valueObject/DirectivaId'
import { DirectivaName } from '../valueObject/DirectivaName'
import { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { DirectivaCargoAddedDomainEvent } from '../event/DirectivaCargoAddedDomainEvent'
import { DirectivaCargoRemovedDomainEvent } from '../event/DirectivaCargoRemovedDomainEvent'
import { DirectivaCreatedDomainEvent } from '../event/DirectivaCreatedDomainEvent'
import { DirectivaRemovedDomainEvent } from '../event/DirectivaRemovedDomainEvent'
import { DirectivaRenamedDomainEvent } from '../event/DirectivaRenamedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DirectivaParams, type DirectivaPrimitives, type DirectivaDto } from './Directiva.dto'
import { DirectivaUpdatedDomainEvent } from '../event/DirectivaUpdatedDomainEvent'

/**
 * @description Represents the Directiva domain entity, the highest level in the organizational chart.
 */
export class Directiva extends AggregateRoot {
	constructor(
		private readonly id: DirectivaId,
		private name: DirectivaName,
		private cargos = new Set<CargoId>()
	) {
		super()
	}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `Directiva` instance.
	 * It generates a random UUID for the Directiva's ID.
	 * @param {DirectivaParams} params The parameters required to create a Directiva (name and cargo IDs).
	 * @returns {Directiva} A new `Directiva` instance.
	 */
	static create(params: DirectivaParams): Directiva {
		const id = DirectivaId.random()
		const name = new DirectivaName(params.name)
		const cargos = new Set(params.cargos.map(cargoId => new CargoId(cargoId)))
		const directiva = new Directiva(id, name, cargos)
		directiva.record(
			new DirectivaCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)
		return directiva
	}
	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Directiva` instance from its primitive representation (DTO).
	 * @param {DirectivaDto} primitives The primitive data of the Directiva.
	 * @returns {Directiva} A `Directiva` instance.
	 */
	static fromPrimitives(primitives: DirectivaDto): Directiva {
		const uniqueCargos = new Set(primitives.cargos.map(cargo => new CargoId(cargo.id)))
		return new Directiva(new DirectivaId(primitives.id), new DirectivaName(primitives.name), uniqueCargos)
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `Directiva` instance into its primitive, serializable representation.
	 * @returns {DirectivaPrimitives} The primitive representation of the Directiva.
	 */
	toPrimitives(): DirectivaPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			cargos: this.cargosValue
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new DirectivaUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * @method updateName
	 * @description Updates the name of the Directiva.
	 * @param {DirectivaName['value']} newName The new name for the Directiva.
	 */
	updateName(newName: Primitives<DirectivaName>): void {
		this.name = new DirectivaName(newName)
		this.record(
			new DirectivaRenamedDomainEvent({
				aggregateId: this.id.value,
				name: this.name.value
			})
		)
	}

	/**
	 * @description Associates a new cargo with the Directiva.
	 * @param {CargoId} cargoId The cargo to add.
	 */
	addCargo(cargoId: CargoId): void {
		if (this.hasCargo(cargoId)) {
			return // Evita duplicados y eventos innecesarios
		}
		this.cargos.add(cargoId)
		this.record(
			new DirectivaCargoAddedDomainEvent({
				aggregateId: this.id.value,
				cargoId: cargoId.value
			})
		)
	}

	/**
	 * @description Removes a cargo association from the Directiva.
	 * @param {CargoId} cargoId The cargo to remove.
	 */
	removeCargo(cargoId: CargoId): void {
		const cargoToRemove = [...this.cargos].find(c => c.equals(cargoId))
		if (cargoToRemove) {
			this.cargos.delete(cargoToRemove)
			this.record(
				new DirectivaCargoRemovedDomainEvent({
					aggregateId: this.id.value,
					cargoId: cargoId.value
				})
			)
		}
	}

	/**
	 * @description Marks the Directiva as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new DirectivaRemovedDomainEvent({
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
	 * @description Returns the primitive value of the Directiva's ID.
	 * @returns {DirectivaId['value']}
	 */
	get idValue(): Primitives<DirectivaId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the Directiva's name.
	 * @returns {DirectivaName['value']}
	 */
	get nameValue(): Primitives<DirectivaName> {
		return this.name.value
	}

	/**
	 * @getter cargosValue
	 * @description Returns the primitive values of the Directiva's associated cargo IDs.
	 * @returns {CargoId['value'][]}
	 */
	get cargosValue(): Primitives<CargoId>[] {
		return Array.from(this.cargos).map(c => c.value)
	}
}
