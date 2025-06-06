import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'

export interface VicepresidenciaEjecutiva {
	id: Primitives<DepartmentId>
	name: Primitives<DepartmentName>
	directivaId: Primitives<DepartmentId>
	cargos: Primitives<CargoId>[]
}

export type VicepresidenciaEjecutivaPrimitives = VicepresidenciaEjecutiva
export type VicepresidenciaEjecutivaParams = Omit<VicepresidenciaEjecutiva, 'id'>

export type VicepresidenciaEjecutivaDto = VicepresidenciaEjecutiva & {
	directiva: DirectivaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
