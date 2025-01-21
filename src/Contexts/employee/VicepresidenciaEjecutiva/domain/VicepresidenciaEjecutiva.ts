import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import {
	IDepartment,
	type DepartmentPrimitives
} from '../../IDepartment/IDeparment'

/**
 * Esta clase es el segundo nivel del organigrama laboral
 */
export type VicepresidenciaEjecutivaPrimitives = DepartmentPrimitives & {
	directivaId: Primitives<DepartmentId>
}

export class VicepresidenciaEjecutiva extends IDepartment {
	constructor(
		id: DepartmentId,
		name: DepartmentName,
		private directivaId: DepartmentId
	) {
		super(id, name)
	}

	static create(
		params: Omit<VicepresidenciaEjecutivaPrimitives, 'id'>
	): VicepresidenciaEjecutiva {
		const id = DepartmentId.random().value
		return new VicepresidenciaEjecutiva(
			new DepartmentId(id),
			new DepartmentName(params.name),
			new DepartmentId(params.directivaId)
		)
	}

	static fromPrimitives(
		primitives: VicepresidenciaEjecutivaPrimitives
	): VicepresidenciaEjecutiva {
		return new VicepresidenciaEjecutiva(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			new DepartmentId(primitives.directivaId)
		)
	}

	toPrimitive(): VicepresidenciaEjecutivaPrimitives {
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
