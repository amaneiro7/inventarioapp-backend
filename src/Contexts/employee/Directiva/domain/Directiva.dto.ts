import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'

export interface Directiva {
	id: DepartmentId['value']
	name: DepartmentName['value']
	cargos: CargoId['value'][]
}

export type DirectivaPrimitives = Directiva

export type DirectivaParams = Omit<Directiva, 'id'>

export type DirectivaDto = Directiva & {
	cargos: Omit<CargoDto, 'departamentos'>[]
}
