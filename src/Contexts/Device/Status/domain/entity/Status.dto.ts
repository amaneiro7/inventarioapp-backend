import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusId } from '../valueObject/StatusId'
import { type StatusName } from '../valueObject/StatusName'

/**
 * @interface Status
 * @description Defines the core properties of a Status entity.
 */
export interface Status {
	id: Primitives<StatusId>
	name: Primitives<StatusName>
}

/**
 * @type StatusPrimitives
 * @description Represents the primitive, serializable state of a Status entity.
 */
export type StatusPrimitives = Status

/**
 * @type StatusDto
 * @description Represents a Data Transfer Object (DTO) for the Status entity.
 */
export type StatusDto = Status
