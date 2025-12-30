import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type DirectivaId } from '../valueObject/DirectivaId'
import { type DirectivaName } from '../valueObject/DirectivaName'

/**
 * @interface Directiva
 * @description Defines the core properties of a Directiva entity.
 */
export interface Directiva {
	id: Primitives<DirectivaId>
	name: Primitives<DirectivaName>
}

/**
 * @type DirectivaPrimitives
 * @description Represents the primitive, serializable state of a Directiva entity.
 */
export type DirectivaPrimitives = Directiva & {
	cargos: Primitives<CargoId>[]
}

/**
 * @type DirectivaParams
 * @description Represents the parameters required to create a new Directiva.
 */
export type DirectivaParams = Omit<Directiva & { cargos: Primitives<CargoId>[] }, 'id'>

/**
 * @type DirectivaDto
 * @description Represents a Data Transfer Object (DTO) for the Directiva entity,
 * including associated Cargo DTOs.
 */
export type DirectivaDto = Directiva & {
	cargos: Omit<CargoDto, 'departamentos'>[]
}
