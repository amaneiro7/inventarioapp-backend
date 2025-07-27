import { type CentroCostoName } from './CentroCostoName'
import { type CodCentroCosto } from './CodCentroCosto'

/**
 * @interface CentroCosto
 * @description Defines the core properties of a CentroCosto entity.
 */
export interface CentroCosto {
	id: CodCentroCosto['value']
	name: CentroCostoName['value']
}

/**
 * @type CentroCostoPrimitives
 * @description Represents the primitive, serializable state of a CentroCosto entity.
 */
export type CentroCostoPrimitives = CentroCosto

/**
 * @type CentroCostoParams
 * @description Represents the parameters required to create a new CentroCosto.
 */
export type CentroCostoParams = CentroCosto

/**
 * @type CentroCostoDto
 * @description Represents a Data Transfer Object (DTO) for the CentroCosto entity.
 */
export type CentroCostoDto = CentroCosto
