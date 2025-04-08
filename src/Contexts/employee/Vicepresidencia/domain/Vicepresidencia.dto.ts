import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'

export interface Vicepresidencia {
	id: DepartmentId['value']
	name: DepartmentName['value']
	directivaId: DepartmentId['value']
}

export type VicepresidenciaPrimitives = Vicepresidencia
export type VicepresidenciaParams = Omit<Vicepresidencia, 'id'>

export type VicepresidenciaDto = Vicepresidencia & {
	directiva: DirectivaDto
}
