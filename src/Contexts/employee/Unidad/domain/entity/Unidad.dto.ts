import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type UnidadId } from '../valueObject/UnidadId'
import { type UnidadName } from '../valueObject/UnidadName'

/**
 * @interface Unidad
 * @description Defines the core properties of a Unidad entity.
 */
export interface Unidad {
	id: Primitives<UnidadId>
	name: Primitives<UnidadName>
}

/**
 * @type UnidadPrimitives
 * @description Represents the primitive, serializable state of a Unidad entity.
 */
export type UnidadPrimitives = Unidad & {
	cargos: Primitives<CargoId>[]
}

/**
 * @type UnidadParams
 * @description Represents the parameters required to create a new Unidad.
 */
export type UnidadParams = Omit<Unidad & { cargos: Primitives<CargoId>[] }, 'id'>

/**
 * @type UnidadDto
 * @description Represents a Data Transfer Object (DTO) for the Unidad entity,
 * including associated Cargo DTOs.
 */
export type UnidadDto = Unidad & {
	cargos: Omit<CargoDto, 'departamentos'>[]
}
