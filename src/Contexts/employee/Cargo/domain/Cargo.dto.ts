import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type CargoId } from './CargoId'
import { type CargoName } from './CargoName'

export interface Cargo {
	id: CargoId['value']
	name: CargoName['value']
}

export type CargoPrimitives = Cargo & {
	departamentos: DepartmentId['value'][]
}

export type CargoParams = Cargo & {
	departamentos: DepartmentId['value'][]
}

export type CargoDto = Cargo & {
	departamentos: DepartamentoDto[]
}
