import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { CargoId } from '../valueObject/CargoId'
import { CargoName } from '../valueObject/CargoName'
import { type CargoDto, type CargoParams, type CargoPrimitives } from './Cargo.dto'

/**
 * @description Represents the Cargo domain entity.
 */
export class Cargo extends AggregateRoot {
	constructor(
		private readonly id: CargoId,
		private name: CargoName,
		private directivas: DepartmentId[],
		private vicepresidenciasEjecutivas: DepartmentId[],
		private vicepresidencias: DepartmentId[],
		private departamentos: DepartmentId[]
	) {
		super()
	}

	static create(params: CargoParams): Cargo {
		const id = CargoId.random()
		const directivas = params.directivas.map(deps => new DepartmentId(deps))
		const vicepresidenciasEjecutivas = params.vicepresidenciasEjecutivas.map(deps => new DepartmentId(deps))
		const vicepresidencias = params.vicepresidencias.map(deps => new DepartmentId(deps))
		const departamentos = params.departamentos.map(deps => new DepartmentId(deps))
		return new Cargo(
			id,
			new CargoName(params.name),
			directivas,
			vicepresidenciasEjecutivas,
			vicepresidencias,
			departamentos
		)
	}

	static fromPrimitives(primitives: CargoDto): Cargo {
		return new Cargo(
			new CargoId(primitives.id),
			new CargoName(primitives.name),
			primitives.directivas.map(dir => new DepartmentId(dir.id)),
			primitives.vicepresidenciasEjecutivas.map(vpe => new DepartmentId(vpe.id)),
			primitives.vicepresidencias.map(vp => new DepartmentId(vp.id)),
			primitives.departamentos.map(deps => new DepartmentId(deps.id))
		)
	}

	toPrimitives(): CargoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			directivas: this.directivas.map(dir => dir.value),
			vicepresidenciasEjecutivas: this.vicepresidenciasEjecutivas.map(vpe => vpe.value),
			vicepresidencias: this.vicepresidencias.map(vp => vp.value),
			departamentos: this.departamentos.map(dept => dept.value)
		}
	}

	get idValue(): Primitives<CargoId> {
		return this.id.value
	}

	get nameValue(): Primitives<CargoName> {
		return this.name.value
	}

	get directivasValue(): Primitives<DepartmentId>[] {
		return this.directivas.map(directiva => directiva.value)
	}

	get vicepresidenciasEjecutivasValue(): Primitives<DepartmentId>[] {
		return this.vicepresidenciasEjecutivas.map(vpe => vpe.value)
	}

	get vicepresidenciasValue(): Primitives<DepartmentId>[] {
		return this.vicepresidencias.map(vp => vp.value)
	}

	get departamentosValue(): Primitives<DepartmentId>[] {
		return this.departamentos.map(deps => deps.value)
	}

	updateName(newName: Primitives<CargoName>): void {
		this.name = new CargoName(newName)
	}

	updateDirectivas(directivasIds: Primitives<DepartmentId>[]): void {
		this.directivas = directivasIds.map(dir => new DepartmentId(dir))
	}

	updateVicepresidenciaEjecutivas(vicepresidenciaEjecutivasIds: Primitives<DepartmentId>[]): void {
		this.vicepresidenciasEjecutivas = vicepresidenciaEjecutivasIds.map(vpe => new DepartmentId(vpe))
	}

	updateVicepresidencias(vicepresidenciasIds: Primitives<DepartmentId>[]): void {
		this.vicepresidencias = vicepresidenciasIds.map(vp => new DepartmentId(vp))
	}

	updateDepartamentos(departamentoIds: Primitives<DepartmentId>[]): void {
		this.departamentos = departamentoIds.map(deps => new DepartmentId(deps))
	}
}
