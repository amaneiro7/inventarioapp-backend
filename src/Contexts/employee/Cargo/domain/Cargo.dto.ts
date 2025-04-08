import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type CargoId } from './CargoId'
import { type CargoName } from './CargoName'

export interface Cargo {
	id: CargoId['value']
	name: CargoName['value']
}

export type CargoPrimitives = Cargo & {
	directivas: DepartmentId['value'][]
	vicepresidenciasEjecutivas: DepartmentId['value'][]
	vicepresidencias: DepartmentId['value'][]
	departamentos: DepartmentId['value'][]
}

export type CargoParams = Omit<
	Cargo & {
		directivas: DepartmentId['value'][]
		vicepresidenciasEjecutivas: DepartmentId['value'][]
		vicepresidencias: DepartmentId['value'][]
		departamentos: DepartmentId['value'][]
	},
	'id'
>

export type CargoDto = Cargo & {
	directivas: DirectivaDto[]
	vicepresidenciasEjecutivas: VicepresidenciaEjecutivaDto[]
	vicepresidencias: VicepresidenciaDto[]
	departamentos: DepartamentoDto[]
}
