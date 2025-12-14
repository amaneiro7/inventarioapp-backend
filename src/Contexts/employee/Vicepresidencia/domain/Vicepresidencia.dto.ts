import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../Cargo/domain/entity/Cargo.dto'
import { type CargoId } from '../../Cargo/domain/valueObject/CargoId'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

/**
 * @interface Vicepresidencia
 * @description Defines the core properties of a Vicepresidencia entity.
 */
export interface Vicepresidencia {
	id: Primitives<DepartmentId>
	name: Primitives<DepartmentName>
	vicepresidenciaEjecutivaId: Primitives<DepartmentId>
	cargos: Primitives<CargoId>[]
}

/**
 * @type VicepresidenciaPrimitives
 * @description Represents the primitive, serializable state of a Vicepresidencia entity.
 */
export type VicepresidenciaPrimitives = Vicepresidencia

/**
 * @type VicepresidenciaParams
 * @description Represents the parameters required to create a new Vicepresidencia.
 */
export type VicepresidenciaParams = Omit<Vicepresidencia, 'id'>

/**
 * @type VicepresidenciaDto
 * @description Represents a Data Transfer Object (DTO) for the Vicepresidencia entity,
 * including associated VicepresidenciaEjecutiva and Cargo DTOs.
 */
export type VicepresidenciaDto = Vicepresidencia & {
	vicepresidenciaEjecutiva: VicepresidenciaEjecutivaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
