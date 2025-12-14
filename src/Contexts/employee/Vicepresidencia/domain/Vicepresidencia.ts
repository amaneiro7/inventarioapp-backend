import { CargoId } from '../../Cargo/domain/valueObject/CargoId'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { IDepartment } from '../../IDepartment/IDeparment'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import {
	type VicepresidenciaDto,
	type VicepresidenciaParams,
	type VicepresidenciaPrimitives
} from './Vicepresidencia.dto'

/**
 * @description Represents the Vicepresidencia domain entity, the third level in the organizational chart.
 */
export class Vicepresidencia extends IDepartment {
	constructor(
		id: DepartmentId,
		name: DepartmentName,
		cargos: CargoId[],
		private vicepresidenciaEjecutivaId: DepartmentId
	) {
		super(id, name, cargos)
	}

	static create(params: VicepresidenciaParams): Vicepresidencia {
		return new Vicepresidencia(
			DepartmentId.random(),
			new DepartmentName(params.name),
			params.cargos.map(cargo => new CargoId(cargo)),
			new DepartmentId(params.vicepresidenciaEjecutivaId)
		)
	}

	static fromPrimitives(primitives: VicepresidenciaDto): Vicepresidencia {
		return new Vicepresidencia(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			this.addCargoIds(primitives.cargos),
			new DepartmentId(primitives.vicepresidenciaEjecutivaId)
		)
	}

	toPrimitive(): VicepresidenciaPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			vicepresidenciaEjecutivaId: this.vicepresidenciaEjecutivaValue,
			cargos: this.CargosValue
		}
	}

	get vicepresidenciaEjecutivaValue(): Primitives<DepartmentId> {
		return this.vicepresidenciaEjecutivaId.value
	}

	updateVicepresidenciaEjecutiva(newVicepresidenciaEjecutivaId: Primitives<DepartmentId>): void {
		this.vicepresidenciaEjecutivaId = new DepartmentId(newVicepresidenciaEjecutivaId)
	}
}
