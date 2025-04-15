import { CargoId } from '../../Cargo/domain/CargoId'
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
 * Esta clase es el segundo nivel del organigrama laboral
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
		const id = DepartmentId.random().value
		const cargos = params.cargos.map(cargo => new CargoId(cargo))
		return new Vicepresidencia(
			new DepartmentId(id),
			new DepartmentName(params.name),
			cargos,
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
