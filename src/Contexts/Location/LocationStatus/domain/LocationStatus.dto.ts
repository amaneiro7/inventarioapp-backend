import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationStatusId } from './LocationStatusId'
import { type LocationStatusName } from './LocationStatusName'

/**
 * Represents the core properties of a Location Status.
 */
export interface LocationStatus {
	id: Primitives<LocationStatusId>
	name: Primitives<LocationStatusName>
}

/**
 * Represents the primitive type of a Location Status, suitable for data transfer.
 */
export type LocationStatusPrimitives = LocationStatus

/**
 * Represents the Data Transfer Object (DTO) for a Location Status.
 * Currently, it's the same as LocationStatusPrimitives.
 */
export type LocationStatusDto = LocationStatus
