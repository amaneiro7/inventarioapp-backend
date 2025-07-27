import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'

/**
 * @interface VicepresidenciaEjecutiva
 * @description Defines the core properties of a VicepresidenciaEjecutiva entity.
 */
export interface VicepresidenciaEjecutiva {
	id: Primitives<DepartmentId>
	name: Primitives<DepartmentName>
	directivaId: Primitives<DepartmentId>
	cargos: Primitives<CargoId>[]
}

/**
 * @type VicepresidenciaEjecutivaPrimitives
 * @description Represents the primitive, serializable state of a VicepresidenciaEjecutiva entity.
 */
export type VicepresidenciaEjecutivaPrimitives = VicepresidenciaEjecutiva

/**
 * @type VicepresidenciaEjecutivaParams
 * @description Represents the parameters required to create a new VicepresidenciaEjecutiva.
 */
export type VicepresidenciaEjecutivaParams = Omit<VicepresidenciaEjecutiva, 'id'>

/**
 * @type VicepresidenciaEjecutivaDto
 * @description Represents a Data Transfer Object (DTO) for the VicepresidenciaEjecutiva entity,
 * including associated Directiva and Cargo DTOs.
 */
export type VicepresidenciaEjecutivaDto = VicepresidenciaEjecutiva & {
	directiva: DirectivaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
