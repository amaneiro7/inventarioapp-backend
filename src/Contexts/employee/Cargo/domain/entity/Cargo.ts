import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { CargoId } from '../valueObject/CargoId'
import { CargoName } from '../valueObject/CargoName'
import { DepartamentoId } from '../../../Departamento/domain/valueObject/DepartamentoId'
import { DirectivaId } from '../../../Directiva/domain/valueObject/DirectivaId'
import { VicepresidenciaId } from '../../../Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { CargoUpdatedDomainEvent } from '../event/CargoUpdatedDomainEvent'
import { CargoRenamedDomainEvent } from '../event/CargoRenamedDomainEvent'
import { CargoCreatedDomainEvent } from '../event/CargoCreatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto, type CargoParams, type CargoPrimitives } from './Cargo.dto'
import { CargoRemovedDomainEvent } from '../event/CargoRemovedDomainEvent'

/**
 * @description Represents the Cargo domain entity.
 */
export class Cargo extends AggregateRoot {
	constructor(
		private readonly id: CargoId,
		private name: CargoName,
		private vicepresidenciasEjecutivas = new Set<VicepresidenciaEjecutivaId>(),
		private vicepresidencias = new Set<VicepresidenciaId>(),
		private directivas = new Set<DirectivaId>(),
		private departamentos = new Set<DepartamentoId>()
	) {
		super()
	}

	static create(params: CargoParams): Cargo {
		const id = CargoId.random()
		const name = new CargoName(params.name)
		const directivas = new Set(params.directivas.map(dir => new DirectivaId(dir)))
		const vicepresidenciasEjecutivas = new Set(
			params.vicepresidenciasEjecutivas.map(vpe => new VicepresidenciaEjecutivaId(vpe))
		)
		const vicepresidencias = new Set(params.vicepresidencias.map(vp => new VicepresidenciaId(vp)))
		const departamentos = new Set(params.departamentos.map(deps => new DepartamentoId(deps)))
		const cargo = new Cargo(id, name, directivas, vicepresidenciasEjecutivas, vicepresidencias, departamentos)

		cargo.record(
			new CargoCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)

		return cargo
	}

	static fromPrimitives(primitives: CargoDto): Cargo {
		const uniqueDirectivas = new Set(primitives.directivas.map(dir => new CargoId(dir.id)))
		const uniqueVicepresidenciasEjecutivas = new Set(
			primitives.vicepresidenciasEjecutivas.map(vpe => new CargoId(vpe.id))
		)
		const uniqueVicepresidencias = new Set(primitives.vicepresidencias.map(vp => new CargoId(vp.id)))
		const uniqueDepartamentos = new Set(primitives.departamentos.map(deps => new CargoId(deps.id)))

		return new Cargo(
			new CargoId(primitives.id),
			new CargoName(primitives.name),
			uniqueDirectivas,
			uniqueVicepresidenciasEjecutivas,
			uniqueVicepresidencias,
			uniqueDepartamentos
		)
	}

	toPrimitives(): CargoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			directivas: this.directivasValue,
			vicepresidenciasEjecutivas: this.vicepresidenciasEjecutivasValue,
			vicepresidencias: this.vicepresidenciasValue,
			departamentos: this.departamentosValue
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

	private hasDirectiva(directivaId: DirectivaId): boolean {
		return [...this.directivas].some(dir => dir.equals(directivaId))
	}

	private hasVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId: VicepresidenciaEjecutivaId): boolean {
		return [...this.vicepresidenciasEjecutivas].some(vpe => vpe.equals(vicepresidenciaEjecutivaId))
	}

	private hasVicepresidencia(vicepresidenciaId: VicepresidenciaId): boolean {
		return [...this.vicepresidencias].some(vp => vp.equals(vicepresidenciaId))
	}

	private hasDepartamento(departamentoId: DepartamentoId): boolean {
		return [...this.departamentos].some(dep => dep.equals(departamentoId))
	}

	get idValue(): Primitives<CargoId> {
		return this.id.value
	}

	get nameValue(): Primitives<CargoName> {
		return this.name.value
	}

	get departamentosValue(): Primitives<DepartamentoId>[] {
		return Array.from(this.departamentos).map(dep => dep.value)
	}

	get vicepresidenciasValue(): Primitives<VicepresidenciaId>[] {
		return Array.from(this.vicepresidencias).map(vp => vp.value)
	}
	get vicepresidenciasEjecutivasValue(): Primitives<VicepresidenciaEjecutivaId>[] {
		return Array.from(this.vicepresidenciasEjecutivas).map(vpe => vpe.value)
	}

	get directivasValue(): Primitives<DirectivaId>[] {
		return Array.from(this.directivas).map(dir => dir.value)
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
	 * @description Associates a new directiva with the Directiva.
	 * @param {DirectivaId} directivaId The directiva to add.
	 */
	addDirectiva(directivaId: DirectivaId): void {
		if (this.hasDirectiva(directivaId)) {
			return
		}
		this.directivas.add(directivaId)
	}

	/**
	 * @description Removes a directiva association from the Directiva.
	 * @param {DirectivaId} directivaId The directiva to remove.
	 */
	removeDirectiva(directivaId: DirectivaId): void {
		const directivaToRemove = [...this.directivas].find(dir => dir.equals(directivaId))
		if (directivaToRemove) {
			this.directivas.delete(directivaToRemove)
		}
	}
	/**
	 * @description Associates a new vicepresidenciaEjecutiva with the vicepresidenciaEjecutiva.
	 * @param {VicepresidenciaEjecutivaId} vicepresidenciaEjecutivaId The vicepresidenciaEjecutiva to add.
	 */
	addVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId: VicepresidenciaEjecutivaId): void {
		if (this.hasVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId)) {
			return
		}
		this.vicepresidenciasEjecutivas.add(vicepresidenciaEjecutivaId)
	}

	/**
	 * @description Removes a vicepresidenciaEjecutiva association from the VicepresidenciaEjecutiva.
	 * @param {VicepresidenciaEjecutivaId} vicepresidenciaEjecutivaId The vicepresidenciaEjecutiva to remove.
	 */
	removeVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId: VicepresidenciaEjecutivaId): void {
		const vicepresidenciaEjecutivaToRemove = [...this.vicepresidenciasEjecutivas].find(vpe =>
			vpe.equals(vicepresidenciaEjecutivaId)
		)
		if (vicepresidenciaEjecutivaToRemove) {
			this.vicepresidenciasEjecutivas.delete(vicepresidenciaEjecutivaToRemove)
		}
	}
	/**
	 * @description Associates a new vicepresidencia with the Directiva.
	 * @param {VicepresidenciaId} vicepresidenciaId The vicepresidencia to add.
	 */
	addVicepresidencia(vicepresidenciaId: VicepresidenciaId): void {
		if (this.hasVicepresidencia(vicepresidenciaId)) {
			return
		}
		this.vicepresidencias.add(vicepresidenciaId)
	}

	/**
	 * @description Removes a vicepresidencia association from the Vicepresidencia.
	 * @param {VicepresidenciaId} vicepresidenciaId The vicepresidencia to remove.
	 */
	removeVicepresidencia(vicepresidenciaId: VicepresidenciaId): void {
		const vicepresidenciaToRemove = [...this.vicepresidencias].find(vp => vp.equals(vicepresidenciaId))
		if (vicepresidenciaToRemove) {
			this.vicepresidencias.delete(vicepresidenciaToRemove)
		}
	}

	/**
	 * @description Associates a new departamento with the Directiva.
	 * @param {DepartamentoId} departamentoId The departamento to add.
	 */
	addDepartamento(departamentoId: DepartamentoId): void {
		if (this.hasDepartamento(departamentoId)) {
			return
		}
		this.departamentos.add(departamentoId)
	}

	/**
	 * @description Removes a departamento association from the Departamento.
	 * @param {DepartamentoId} departamentoId The departamento to remove.
	 */
	removeDepartamento(departamentoId: DepartamentoId): void {
		const departamentoToRemove = [...this.departamentos].find(vp => vp.equals(departamentoId))
		if (departamentoToRemove) {
			this.departamentos.delete(departamentoToRemove)
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
