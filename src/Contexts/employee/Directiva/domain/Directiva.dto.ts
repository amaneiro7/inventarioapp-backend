import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'

export interface Directiva {
	id: DepartmentId['value']
	name: DepartmentName['value']
}

export type DirectivaPrimitives = Directiva

export type DirectivaParams = Omit<Directiva, 'id'>

export type DirectivaDto = Directiva
