import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export interface Vicepresidencia {
	id: Primitives<DepartmentId>
	name: Primitives<DepartmentName>
	vicepresidenciaEjecutivaId: Primitives<DepartmentId>
	cargos: Primitives<CargoId>[]
}

export type VicepresidenciaPrimitives = Vicepresidencia
export type VicepresidenciaParams = Omit<Vicepresidencia, 'id'>

export type VicepresidenciaDto = Vicepresidencia & {
	vicepresidenciaEjecutiva: VicepresidenciaEjecutivaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
