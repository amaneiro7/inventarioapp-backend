import { type UnidadDto } from '../../../Unidad/domain/entity/Unidad.dto'
import { type UnidadId } from '../../../Unidad/domain/valueObject/UnidadId'
import { type CargoId } from '../valueObject/CargoId'
import { type CargoName } from '../valueObject/CargoName'

/**
 * @interface Cargo
 * @description Defines the core properties of a Cargo entity.
 */
export interface Cargo {
	id: CargoId['value']
	name: CargoName['value']
}

/**
 * @type CargoPrimitives
 * @description Represents the primitive, serializable state of a Cargo entity,
 * including associated department IDs.
 */
export type CargoPrimitives = Cargo & {
	unidades: UnidadId['value'][]
}

/**
 * @type CargoParams
 * @description Represents the parameters required to create a new Cargo.
 * The 'id' is omitted as it is generated automatically.
 */
export type CargoParams = Omit<
	Cargo & {
		unidades: UnidadId['value'][]
	},
	'id'
>

/**
 * @type CargoDto
 * @description Represents a Data Transfer Object (DTO) for the Cargo entity,
 * including full associated department DTOs.
 */
export type CargoDto = Cargo & {
	unidades: UnidadDto[]
}
