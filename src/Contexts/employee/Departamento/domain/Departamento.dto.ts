import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

export interface Departamento {
	id: DepartmentId['value']
	name: DepartmentName['value']
	vicepresidenciaId: DepartmentId['value']
	cargos: CargoId['value'][]
}

export type DepartamentoPrimitives = Departamento

export type DepartamentoParams = Omit<Departamento, 'id'>

export type DepartamentoDto = Departamento & {
	vicepresiedncia: VicepresidenciaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
