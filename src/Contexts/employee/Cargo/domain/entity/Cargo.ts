import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { CargoId } from '../valueObject/CargoId'
import { CargoName } from '../valueObject/CargoName'
import { UnidadId } from '../../../Unidad/domain/valueObject/UnidadId'
import { CargoUpdatedDomainEvent } from '../event/CargoUpdatedDomainEvent'
import { CargoRenamedDomainEvent } from '../event/CargoRenamedDomainEvent'
import { CargoRemovedDomainEvent } from '../event/CargoRemovedDomainEvent'
import { CargoCreatedDomainEvent } from '../event/CargoCreatedDomainEvent'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { CargoDto, CargoParams, CargoPrimitives } from './Cargo.dto'

/**
 * @description Represents the Cargo domain entity.
 */
export class Cargo extends AggregateRoot {
	constructor(
		private readonly id: CargoId,
		private name: CargoName,
		private unidades = new Set<UnidadId>()
	) {
		super()
	}

	static create(params: CargoParams): Cargo {
		const id = CargoId.random()
		const name = new CargoName(params.name)
		const unidades = new Set(params.unidades.map(uid => new UnidadId(uid)))
		const cargo = new Cargo(id, name, unidades)

		cargo.record(
			new CargoCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)

		return cargo
	}

	static fromPrimitives(primitives: CargoDto): Cargo {
		const uniqueUnidades = new Set(primitives.unidades.map(unidad => new UnidadId(unidad.id)))

		return new Cargo(new CargoId(primitives.id), new CargoName(primitives.name), uniqueUnidades)
	}

	toPrimitives(): CargoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			unidades: this.unidadesValue
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new CargoUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	private hasUnidad(unidadesId: UnidadId): boolean {
		return [...this.unidades].some(uid => uid.equals(unidadesId))
	}

	get idValue(): Primitives<CargoId> {
		return this.id.value
	}

	get nameValue(): Primitives<CargoName> {
		return this.name.value
	}

	get unidadesValue(): Primitives<UnidadId>[] {
		return Array.from(this.unidades).map(unidad => unidad.value)
	}

	updateName(newName: Primitives<CargoName>): void {
		this.name = new CargoName(newName)
		this.record(
			new CargoRenamedDomainEvent({
				aggregateId: this.idValue,
				name: this.nameValue
			})
		)
	}

	/**
	 * @description Associates a new unidad with the Cargo.
	 * @param {UnidadId} unidadId The unidad to add.
	 */
	addUnidad(unidadId: UnidadId): void {
		if (this.hasUnidad(unidadId)) {
			return
		}
		this.unidades.add(unidadId)
	}

	/**
	 * @description Removes a unidad association from the Cargo.
	 * @param {UnidadId} unidadId The unidad to remove.
	 */
	removeUnidad(unidadId: UnidadId): void {
		const unidadToRemove = [...this.unidades].find(dir => dir.equals(unidadId))
		if (unidadToRemove) {
			this.unidades.delete(unidadToRemove)
		}
	}

	/**
	 * @description Marks the Cargo as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new CargoRemovedDomainEvent({
				aggregateId: this.idValue,
				name: this.nameValue
			})
		)
	}
}
