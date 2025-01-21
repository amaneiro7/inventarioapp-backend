import {
	type DepartmentPrimitives,
	IDepartment
} from '../../IDepartment/IDeparment'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'

/**
 * Esta clase es el nivel mas alto del organigrama laboral
 */

export type DirectivaPrimitives = DepartmentPrimitives

export class Directiva extends IDepartment {
	constructor(id: DepartmentId, name: DepartmentName) {
		super(id, name)
	}
}
