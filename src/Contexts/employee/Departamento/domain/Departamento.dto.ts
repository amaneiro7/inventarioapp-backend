import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

/**
 * @interface Departamento
 * @description Defines the core properties of a Departamento entity.
 */
export interface Departamento {
	id: DepartmentId['value']
	name: DepartmentName['value']
	vicepresidenciaId: DepartmentId['value']
	cargos: CargoId['value'][]
}

/**
 * @type DepartamentoPrimitives
 * @description Represents the primitive, serializable state of a Departamento entity.
 */
export type DepartamentoPrimitives = Departamento

/**
 * @type DepartamentoParams
 * @description Represents the parameters required to create a new Departamento.
 */
export type DepartamentoParams = Omit<Departamento, 'id'>

/**
 * @type DepartamentoDto
 * @description Represents a Data Transfer Object (DTO) for the Departamento entity,
 * including associated Vicepresidencia and Cargo DTOs.
 */
export type DepartamentoDto = Departamento & {
	vicepresiedncia: VicepresidenciaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
