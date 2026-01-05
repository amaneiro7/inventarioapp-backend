import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { VicepresidenciaId } from '../valueObject/VicepresidenciaId'
import { VicepresidenciaName } from '../valueObject/VicepresidenciaName'
import { VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { VicepresidenciaCargoAddedDomainEvent } from '../event/VicepresidenciaCargoAddedDomainEvent'
import { VicepresidenciaCargoRemovedDomainEvent } from '../event/VicepresidenciaCargoRemovedDomainEvent'
import { VicepresidenciaCreatedDomainEvent } from '../event/VicepresidenciaCreatedDomainEvent'
import { VicepresidenciaRemovedDomainEvent } from '../event/VicepresidenciaRemovedDomainEvent'
import { VicepresidenciaRenamedDomainEvent } from '../event/VicepresidenciaRenamedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../event/VicepresidenciaUpdatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import {
	type VicepresidenciaDto,
	type VicepresidenciaParams,
	type VicepresidenciaPrimitives
} from './Vicepresidencia.dto'

/**
 * @description Represents the Vicepresidencia domain entity, the second level in the organizational chart.
 */
export class Vicepresidencia extends AggregateRoot {
	constructor(
		private readonly id: VicepresidenciaId,
		private name: VicepresidenciaName,
		private cargos = new Set<CargoId>(),
		private vicepresidenciaEjecutivaId: VicepresidenciaEjecutivaId
	) {
		super()
	}
	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `Vicepresidencia` instance.
	 * It generates a random UUID for the Vicepresidencia's ID.
	 * @param {VicepresidenciaParams} params The parameters required to create a Vicepresidencia (name, vicepresidenciaEjecutivaId and cargo IDs).
	 * @returns {Vicepresidencia} A new `Vicepresidencia` instance.
	 */
	static create(params: VicepresidenciaParams): Vicepresidencia {
		const id = VicepresidenciaId.random()
		const name = new VicepresidenciaName(params.name)
		const cargos = new Set(params.cargos.map(cargoId => new CargoId(cargoId)))
		const vicepresidenciaEjecutivaId = new VicepresidenciaEjecutivaId(params.vicepresidenciaEjecutivaId)
		const vicepresidencia = new Vicepresidencia(id, name, cargos, vicepresidenciaEjecutivaId)

		vicepresidencia.record(
			new VicepresidenciaCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)
		return vicepresidencia
	}
	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Vicepresidencia` instance from its primitive representation (DTO).
	 * @param {VicepresidenciaDto} primitives The primitive data of the Vicepresidencia.
	 * @returns {Vicepresidencia} A `Vicepresidencia` instance.
	 */
	static fromPrimitives(primitives: VicepresidenciaDto): Vicepresidencia {
		const uniqueCargos = new Set(primitives.cargos.map(cargo => new CargoId(cargo.id)))
		return new Vicepresidencia(
			new VicepresidenciaId(primitives.id),
			new VicepresidenciaName(primitives.name),
			uniqueCargos,
			new VicepresidenciaEjecutivaId(primitives.vicepresidenciaEjecutivaId)
		)
	}

	/**
	 * @method toPrimitives
	 * @description Converts the `Vicepresidencia` instance into its primitive, serializable representation.
	 * @returns {VicepresidenciaPrimitives} The primitive representation of the Vicepresidencia.
	 */
	toPrimitives(): VicepresidenciaPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			cargos: this.cargosValue,
			vicepresidenciaEjecutivaId: this.vicepresidenciaEjecutivaValue
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new VicepresidenciaUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * @method updateName
	 * @description Updates the name of the Vicepresidencia.
	 * @param {VicepresidenciaName['value']} newName The new name for the Vicepresidencia.
	 */
	updateName(newName: Primitives<VicepresidenciaName>): void {
		this.name = new VicepresidenciaName(newName)
		this.record(
			new VicepresidenciaRenamedDomainEvent({
				aggregateId: this.idValue,
				name: this.name.value
			})
		)
	}
	/**
	 * @method updateVicepresidenciaEjecutiva
	 * @description Updates the directiva of the Vicepresidencia.
	 * @param {Primitives<VicepresidenciaEjecutivaId>} newVicepresidenciaEjecutivaId The new directiva ID for the Vicepresidencia.
	 */
	updateVicepresidenciaEjecutiva(newVicepresidenciaEjecutivaId: Primitives<VicepresidenciaEjecutivaId>): void {
		this.vicepresidenciaEjecutivaId = new VicepresidenciaEjecutivaId(newVicepresidenciaEjecutivaId)
	}

	/**
	 * @description Associates a new cargo with the Vicepresidencia.
	 * @param {CargoId} cargoId The cargo to add.
	 */
	addCargo(cargoId: CargoId): void {
		if (this.hasCargo(cargoId)) {
			return // Evita duplicados y eventos innecesarios
		}
		this.cargos.add(cargoId)
		this.record(
			new VicepresidenciaCargoAddedDomainEvent({
				aggregateId: this.idValue,
				cargoId: cargoId.value
			})
		)
	}

	/**
	 * @description Removes a cargo association from the Vicepresidencia.
	 * @param {CargoId} cargoId The cargo to remove.
	 */
	removeCargo(cargoId: CargoId): void {
		const cargoToRemove = [...this.cargos].find(c => c.equals(cargoId))
		if (cargoToRemove) {
			this.cargos.delete(cargoToRemove)
			this.record(
				new VicepresidenciaCargoRemovedDomainEvent({
					aggregateId: this.idValue,
					cargoId: cargoId.value
				})
			)
		}
	}

	/**
	 * @description Marks the Vicepresidencia as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new VicepresidenciaRemovedDomainEvent({
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
	 * @description Returns the primitive value of the Vicepresidencia's ID.
	 * @returns {VicepresidenciaId['value']}
	 */
	get idValue(): Primitives<VicepresidenciaId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the Vicepresidencia's name.
	 * @returns {VicepresidenciaName['value']}
	 */
	get nameValue(): Primitives<VicepresidenciaName> {
		return this.name.value
	}

	/**
	 * @getter cargosValue
	 * @description Returns the primitive values of the Vicepresidencia's associated cargo IDs.
	 * @returns {CargoId['value'][]}
	 */
	get cargosValue(): Primitives<CargoId>[] {
		return Array.from(this.cargos).map(c => c.value)
	}
	/**
	 * @getter directivaValue
	 * @description Returns the primitive value of the Vicepresidencia's associated directiva ID.
	 * @returns {VicepresidenciaEjecutivaId['value']}
	 */
	get vicepresidenciaEjecutivaValue(): Primitives<VicepresidenciaEjecutivaId> {
		return this.vicepresidenciaEjecutivaId.value
	}
}
