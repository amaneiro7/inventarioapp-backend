import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { TypeOfSiteId } from '../valueObject/TypeOfSiteId'
import { TypeOfSiteName } from '../valueObject/TypeOfSiteName'

/**
 * Represents the core properties of a TypeOfSite.
 */
export interface TypeOfSite {
	id: Primitives<TypeOfSiteId>
	name: Primitives<TypeOfSiteName>
}

/**
 * Represents the primitive type of a TypeOfSite, suitable for data transfer.

 */
export type TypeOfSitePrimitives = TypeOfSite

/**
 * Represents the Data Transfer Object (DTO) for a TypeOfSite.
 * Currently, it's the same as TypeOfSitePrimitives.
 */
export type TypeOfSiteDto = TypeOfSite
