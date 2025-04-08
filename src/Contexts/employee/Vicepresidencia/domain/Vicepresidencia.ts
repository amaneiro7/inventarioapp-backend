import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { IDepartment } from '../../IDepartment/IDeparment'
import {
	type VicepresidenciaDto,
	type VicepresidenciaParams,
	type VicepresidenciaPrimitives
} from './Vicepresidencia.dto'

/**
 * Esta clase es el segundo nivel del organigrama laboral
 */

export class Vicepresidencia extends IDepartment {
	constructor(id: DepartmentId, name: DepartmentName, private directivaId: DepartmentId) {
		super(id, name)
	}

	static create(params: VicepresidenciaParams): Vicepresidencia {
		const id = DepartmentId.random().value
		return new Vicepresidencia(
			new DepartmentId(id),
			new DepartmentName(params.name),
			new DepartmentId(params.directivaId)
		)
	}

	static fromPrimitives(primitives: VicepresidenciaDto): Vicepresidencia {
		return new Vicepresidencia(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			new DepartmentId(primitives.directivaId)
		)
	}

	toPrimitive(): VicepresidenciaPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			directivaId: this.directivaValue
		}
	}

	get directivaValue(): Primitives<DepartmentId> {
		return this.directivaId.value
	}

	updateDirectiva(newDirectivaId: Primitives<DepartmentId>): void {
		this.directivaId = new DepartmentId(newDirectivaId)
	}
}
