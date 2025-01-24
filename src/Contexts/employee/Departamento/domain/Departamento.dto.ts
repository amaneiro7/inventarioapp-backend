import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type CentroCostoDto } from '../../CentroCosto/domain/CentroCosto.dto'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export interface Departamento {
	id: DepartmentId['value']
	name: DepartmentName['value']
	vicepresidenciaEjecutivaId: DepartmentId['value']
	centroCostoId: CodCentroCosto['value']
	cargos: CargoId['value'][]
}

export type DepartamentoPrimitives = Departamento

export type DepartamentoParams = Omit<Departamento, 'id'>

export type DepartamentoDto = Departamento & {
	vicepresiednciaEjecutiva: VicepresidenciaEjecutivaDto
	centroCosto: CentroCostoDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
