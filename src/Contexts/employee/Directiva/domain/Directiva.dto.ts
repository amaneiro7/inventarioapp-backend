import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'

/**
 * @interface Directiva
 * @description Defines the core properties of a Directiva entity.
 */
export interface Directiva {
	id: DepartmentId['value']
	name: DepartmentName['value']
	cargos: CargoId['value'][]
}

/**
 * @type DirectivaPrimitives
 * @description Represents the primitive, serializable state of a Directiva entity.
 */
export type DirectivaPrimitives = Directiva

/**
 * @type DirectivaParams
 * @description Represents the parameters required to create a new Directiva.
 */
export type DirectivaParams = Omit<Directiva, 'id'>

/**
 * @type DirectivaDto
 * @description Represents a Data Transfer Object (DTO) for the Directiva entity,
 * including associated Cargo DTOs.
 */
export type DirectivaDto = Directiva & {
	cargos: Omit<CargoDto, 'departamentos'>[]
}
