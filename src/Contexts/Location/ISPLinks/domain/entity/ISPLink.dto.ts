import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationDto } from '../../../Location/domain/entity/Location.dto'
import { type ISPLinkId } from '../valueObject/ISPLinkId'
import { type ISPLinkName } from '../valueObject/ISPLinkName'

/**
 * Represents the core properties of a ISPLink.
 */
export interface ISPLink {
	id: Primitives<ISPLinkId>
	name: Primitives<ISPLinkName>
}

/**
 * Represents the parameters required to create a new ISPLink, excluding the ID.
 */
export type ISPLinkParams = Omit<ISPLink, 'id'>

/**
 * Represents the primitive type of a ISPLink, suitable for data transfer.
 */
export type ISPLinkPrimitives = ISPLink

/**
 * Represents the Data Transfer Object (DTO) for a ISPLink, including its associated State.
 */
export type ISPLinkDto = ISPLink & {
	locations: LocationDto[]
}
