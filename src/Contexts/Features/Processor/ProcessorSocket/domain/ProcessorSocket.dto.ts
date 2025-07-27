import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketId } from './ProcessorSocketId'
import { type ProcessorSocketName } from './ProcessorSocketName'

/**
 * @interface ProcessorSocket
 * @description Defines the core properties of a ProcessorSocket entity.
 */
export interface ProcessorSocket {
	id: Primitives<ProcessorSocketId>
	name: Primitives<ProcessorSocketName>
}

/**
 * @type ProcessorSocketPrimitives
 * @description Represents the primitive, serializable state of a ProcessorSocket entity.
 */
export type ProcessorSocketPrimitives = ProcessorSocket

/**
 * @type ProcessorSocketDto
 * @description Represents a Data Transfer Object (DTO) for the ProcessorSocket entity.
 */
export type ProcessorSocketDto = ProcessorSocket
