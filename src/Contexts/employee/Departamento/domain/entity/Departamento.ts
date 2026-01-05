import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { DepartamentoId } from '../valueObject/DepartamentoId'
import { DepartamentoName } from '../valueObject/DepartamentoName'
import { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { DepartamentoCargoAddedDomainEvent } from '../event/DepartamentoCargoAddedDomainEvent'
import { DepartamentoCargoRemovedDomainEvent } from '../event/DepartamentoCargoRemovedDomainEvent'
import { DepartamentoCreatedDomainEvent } from '../event/DepartamentoCreatedDomainEvent'
import { DepartamentoRemovedDomainEvent } from '../event/DepartamentoRemovedDomainEvent'
import { DepartamentoRenamedDomainEvent } from '../event/DepartamentoRenamedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../event/DepartamentoUpdatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartamentoDto, type DepartamentoParams, type DepartamentoPrimitives } from './Departamento.dto'
import { VicepresidenciaId } from '../../../Vicepresidencia/domain/valueObject/VicepresidenciaId'

/**
 * @description Represents the Departamento domain entity, the second level in the organizational chart.
 */
export class Departamento extends AggregateRoot {
	constructor(
		private readonly id: DepartamentoId,
		private name: DepartamentoName,
		private cargos = new Set<CargoId>(),
		private vicepresidenciaId: VicepresidenciaId
	) {
		super()
	}
	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `Departamento` instance.
	 * It generates a random UUID for the Departamento's ID.
	 * @param {DepartamentoParams} params The parameters required to create a Departamento (name, vicepresidenciaId and cargo IDs).
	 * @returns {Departamento} A new `Departamento` instance.
	 */
	static create(params: DepartamentoParams): Departamento {
		const id = DepartamentoId.random()
		const name = new DepartamentoName(params.name)
		const cargos = new Set(params.cargos.map(cargoId => new CargoId(cargoId)))
		const vicepresidenciaId = new VicepresidenciaId(params.vicepresidenciaId)
		const departamento = new Departamento(id, name, cargos, vicepresidenciaId)

		departamento.record(
			new DepartamentoCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)
		return departamento
	}
	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Departamento` instance from its primitive representation (DTO).
	 * @param {DepartamentoDto} primitives The primitive data of the Departamento.
	 * @returns {Departamento} A `Departamento` instance.
	 */
	static fromPrimitives(primitives: DepartamentoDto): Departamento {
		const uniqueCargos = new Set(primitives.cargos.map(cargo => new CargoId(cargo.id)))
		return new Departamento(
			new DepartamentoId(primitives.id),
			new DepartamentoName(primitives.name),
			uniqueCargos,
			new VicepresidenciaId(primitives.vicepresidenciaId)
		)
	}

	/**
	 * @method toPrimitives
	 * @description Converts the `Departamento` instance into its primitive, serializable representation.
	 * @returns {DepartamentoPrimitives} The primitive representation of the Departamento.
	 */
	toPrimitives(): DepartamentoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			cargos: this.cargosValue,
			vicepresidenciaId: this.vicepresidenciaValue
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new DepartamentoUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * @method updateName
	 * @description Updates the name of the Departamento.
	 * @param {DepartamentoName['value']} newName The new name for the Departamento.
	 */
	updateName(newName: Primitives<DepartamentoName>): void {
		this.name = new DepartamentoName(newName)
		this.record(
			new DepartamentoRenamedDomainEvent({
				aggregateId: this.idValue,
				name: this.name.value
			})
		)
	}
	/**
	 * @method updateVicepresidencia
	 * @description Updates the directiva of the Vicepresidencia.
	 * @param {Primitives<VicepresidenciaId>} newVicepresidenciaId The new directiva ID for the Vicepresidencia.
	 */
	updateVicepresidencia(newVicepresidenciaId: Primitives<VicepresidenciaId>): void {
		this.vicepresidenciaId = new VicepresidenciaId(newVicepresidenciaId)
	}

	/**
	 * @description Associates a new cargo with the Departamento.
	 * @param {CargoId} cargoId The cargo to add.
	 */
	addCargo(cargoId: CargoId): void {
		if (this.hasCargo(cargoId)) {
			return // Evita duplicados y eventos innecesarios
		}
		this.cargos.add(cargoId)
		this.record(
			new DepartamentoCargoAddedDomainEvent({
				aggregateId: this.idValue,
				cargoId: cargoId.value
			})
		)
	}

	/**
	 * @description Removes a cargo association from the Departamento.
	 * @param {CargoId} cargoId The cargo to remove.
	 */
	removeCargo(cargoId: CargoId): void {
		const cargoToRemove = [...this.cargos].find(c => c.equals(cargoId))
		if (cargoToRemove) {
			this.cargos.delete(cargoToRemove)
			this.record(
				new DepartamentoCargoRemovedDomainEvent({
					aggregateId: this.idValue,
					cargoId: cargoId.value
				})
			)
		}
	}

	/**
	 * @description Marks the Departamento as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new DepartamentoRemovedDomainEvent({
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
	 * @description Returns the primitive value of the Departamento's ID.
	 * @returns {DepartamentoId['value']}
	 */
	get idValue(): Primitives<DepartamentoId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the Departamento's name.
	 * @returns {DepartamentoName['value']}
	 */
	get nameValue(): Primitives<DepartamentoName> {
		return this.name.value
	}

	/**
	 * @getter cargosValue
	 * @description Returns the primitive values of the Departamento's associated cargo IDs.
	 * @returns {CargoId['value'][]}
	 */
	get cargosValue(): Primitives<CargoId>[] {
		return Array.from(this.cargos).map(c => c.value)
	}
	/**
	 * @getter directivaValue
	 * @description Returns the primitive value of the Departamento's associated directiva ID.
	 * @returns {VicepresidenciaId['value']}
	 */
	get vicepresidenciaValue(): Primitives<VicepresidenciaId> {
		return this.vicepresidenciaId.value
	}
}
