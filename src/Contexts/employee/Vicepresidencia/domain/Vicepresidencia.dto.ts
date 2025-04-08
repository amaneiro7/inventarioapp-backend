import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type CentroCostoDto } from '../../CentroCosto/domain/CentroCosto.dto'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'

export interface Vicepresidencia {
	id: Primitives<DepartmentId>
	name: Primitives<DepartmentName>
	directivaId: Primitives<DepartmentId>
	centroCostoId: Primitives<CodCentroCosto>
	cargos: Primitives<CargoId>[]
}

export type VicepresidenciaPrimitives = Vicepresidencia
export type VicepresidenciaParams = Omit<Vicepresidencia, 'id'>

export type VicepresidenciaDto = Vicepresidencia & {
	directiva: DirectivaDto
	centroCosto: CentroCostoDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
