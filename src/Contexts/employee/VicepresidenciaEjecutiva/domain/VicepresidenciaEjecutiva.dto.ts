import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'

export interface VicepresidenciaEjecutiva {
	id: DepartmentId['value']
	name: DepartmentName['value']
	directivaId: DepartmentId['value']
}

export type VicepresidenciaEjecutivaPrimitives = VicepresidenciaEjecutiva
export type VicepresidenciaEjecutivaParams = Omit<
	VicepresidenciaEjecutiva,
	'id'
>

export type VicepresidenciaEjecutivaDto = VicepresidenciaEjecutiva & {
	directiva: DirectivaDto
}
