import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { VicepresidenciaEjecutivaId } from '../valueObject/VicepresidenciaEjecutivaId'
import { VicepresidenciaEjecutivaName } from '../valueObject/VicepresidenciaEjecutivaName'
import { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { DirectivaId } from '../../../Directiva/domain/valueObject/DirectivaId'
import { VicepresidenciaEjecutivaCargoAddedDomainEvent } from '../event/VicepresidenciaEjecutivaCargoAddedDomainEvent'
import { VicepresidenciaEjecutivaCargoRemovedDomainEvent } from '../event/VicepresidenciaEjecutivaCargoRemovedDomainEvent'
import { VicepresidenciaEjecutivaCreatedDomainEvent } from '../event/VicepresidenciaEjecutivaCreatedDomainEvent'
import { VicepresidenciaEjecutivaRemovedDomainEvent } from '../event/VicepresidenciaEjecutivaRemovedDomainEvent'
import { VicepresidenciaEjecutivaRenamedDomainEvent } from '../event/VicepresidenciaEjecutivaRenamedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaParams,
	type VicepresidenciaEjecutivaPrimitives
} from './VicepresidenciaEjecutiva.dto'

/**
 * @description Represents the VicepresidenciaEjecutiva domain entity, the second level in the organizational chart.
 */
export class VicepresidenciaEjecutiva extends AggregateRoot {
	constructor(
		private readonly id: VicepresidenciaEjecutivaId,
		private name: VicepresidenciaEjecutivaName,
		private cargos = new Set<CargoId>(),
		private directivaId: DirectivaId
	) {
		super()
	}
	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `VicepresidenciaEjecutiva` instance.
	 * It generates a random UUID for the VicepresidenciaEjecutiva's ID.
	 * @param {VicepresidenciaEjecutivaParams} params The parameters required to create a VicepresidenciaEjecutiva (name, directivaId and cargo IDs).
	 * @returns {VicepresidenciaEjecutiva} A new `VicepresidenciaEjecutiva` instance.
	 */
	static create(params: VicepresidenciaEjecutivaParams): VicepresidenciaEjecutiva {
		const id = VicepresidenciaEjecutivaId.random()
		const name = new VicepresidenciaEjecutivaName(params.name)
		const cargos = new Set(params.cargos.map(cargoId => new CargoId(cargoId)))
		const directivaId = new DirectivaId(params.directivaId)
		const vicepresidenciaEjecutiva = new VicepresidenciaEjecutiva(id, name, cargos, directivaId)

		vicepresidenciaEjecutiva.record(
			new VicepresidenciaEjecutivaCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)
		return vicepresidenciaEjecutiva
	}
	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `VicepresidenciaEjecutiva` instance from its primitive representation (DTO).
	 * @param {VicepresidenciaEjecutivaDto} primitives The primitive data of the VicepresidenciaEjecutiva.
	 * @returns {VicepresidenciaEjecutiva} A `VicepresidenciaEjecutiva` instance.
	 */
	static fromPrimitives(primitives: VicepresidenciaEjecutivaDto): VicepresidenciaEjecutiva {
		const uniqueCargos = new Set(primitives.cargos.map(cargo => new CargoId(cargo.id)))
		return new VicepresidenciaEjecutiva(
			new VicepresidenciaEjecutivaId(primitives.id),
			new VicepresidenciaEjecutivaName(primitives.name),
			uniqueCargos,
			new DirectivaId(primitives.directivaId)
		)
	}

	/**
	 * @method toPrimitives
	 * @description Converts the `VicepresidenciaEjecutiva` instance into its primitive, serializable representation.
	 * @returns {VicepresidenciaEjecutivaPrimitives} The primitive representation of the VicepresidenciaEjecutiva.
	 */
	toPrimitives(): VicepresidenciaEjecutivaPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			cargos: this.cargosValue,
			directivaId: this.directivaValue
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new VicepresidenciaEjecutivaUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * @method updateName
	 * @description Updates the name of the VicepresidenciaEjecutiva.
	 * @param {VicepresidenciaEjecutivaName['value']} newName The new name for the VicepresidenciaEjecutiva.
	 */
	updateName(newName: Primitives<VicepresidenciaEjecutivaName>): void {
		this.name = new VicepresidenciaEjecutivaName(newName)
		this.record(
			new VicepresidenciaEjecutivaRenamedDomainEvent({
				aggregateId: this.idValue,
				name: this.name.value
			})
		)
	}
	/**
	 * @method updateDirectiva
	 * @description Updates the directiva of the VicepresidenciaEjecutiva.
	 * @param {Primitives<DirectivaId>} newDirectivaId The new directiva ID for the VicepresidenciaEjecutiva.
	 */
	updateDirectiva(newDirectivaId: Primitives<DirectivaId>): void {
		this.directivaId = new DirectivaId(newDirectivaId)
	}

	/**
	 * @description Associates a new cargo with the VicepresidenciaEjecutiva.
	 * @param {CargoId} cargoId The cargo to add.
	 */
	addCargo(cargoId: CargoId): void {
		if (this.hasCargo(cargoId)) {
			return // Evita duplicados y eventos innecesarios
		}
		this.cargos.add(cargoId)
		this.record(
			new VicepresidenciaEjecutivaCargoAddedDomainEvent({
				aggregateId: this.idValue,
				cargoId: cargoId.value
			})
		)
	}

	/**
	 * @description Removes a cargo association from the VicepresidenciaEjecutiva.
	 * @param {CargoId} cargoId The cargo to remove.
	 */
	removeCargo(cargoId: CargoId): void {
		const cargoToRemove = [...this.cargos].find(c => c.equals(cargoId))
		if (cargoToRemove) {
			this.cargos.delete(cargoToRemove)
			this.record(
				new VicepresidenciaEjecutivaCargoRemovedDomainEvent({
					aggregateId: this.idValue,
					cargoId: cargoId.value
				})
			)
		}
	}

	/**
	 * @description Marks the VicepresidenciaEjecutiva as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new VicepresidenciaEjecutivaRemovedDomainEvent({
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
	 * @description Returns the primitive value of the VicepresidenciaEjecutiva's ID.
	 * @returns {VicepresidenciaEjecutivaId['value']}
	 */
	get idValue(): Primitives<VicepresidenciaEjecutivaId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the VicepresidenciaEjecutiva's name.
	 * @returns {VicepresidenciaEjecutivaName['value']}
	 */
	get nameValue(): Primitives<VicepresidenciaEjecutivaName> {
		return this.name.value
	}

	/**
	 * @getter cargosValue
	 * @description Returns the primitive values of the VicepresidenciaEjecutiva's associated cargo IDs.
	 * @returns {CargoId['value'][]}
	 */
	get cargosValue(): Primitives<CargoId>[] {
		return Array.from(this.cargos).map(c => c.value)
	}
	/**
	 * @getter directivaValue
	 * @description Returns the primitive value of the VicepresidenciaEjecutiva's associated directiva ID.
	 * @returns {DirectivaId['value']}
	 */
	get directivaValue(): Primitives<DirectivaId> {
		return this.directivaId.value
	}
}
