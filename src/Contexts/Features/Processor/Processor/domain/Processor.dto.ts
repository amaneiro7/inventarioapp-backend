import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorId } from './ProcessorId'
import { type ProcessorName } from './ProcessorName'
import { type ProcessorCores } from './ProcessorCores'
import { type ProcessorFrequency } from './ProcessorFrequency'
import { type ProcessorHasThreads } from './ProcessorIsThreads'
import { type ProcessorNumberModel } from './ProcessorNumberModel'
import { type ProcessorProductCollection } from './ProcessorProductCollection'

/**
 * @interface Processor
 * @description Defines the core properties of a Processor entity.
 */
export interface Processor {
	id: Primitives<ProcessorId>
	productCollection: Primitives<ProcessorProductCollection>
	numberModel: Primitives<ProcessorNumberModel>
	name: Primitives<ProcessorName>
	cores: Primitives<ProcessorCores>
	threads: Primitives<ProcessorHasThreads>
	frequency: Primitives<ProcessorFrequency>
}

/**
 * @type ProcessorPrimitives
 * @description Represents the primitive, serializable state of a Processor entity.
 */
export type ProcessorPrimitives = Processor

/**
 * @type ProcessorParams
 * @description Represents the set of parameters required to create a new Processor.
 */
export type ProcessorParams = Omit<Processor, 'id' | 'name'>

/**
 * @type ProcessorDto
 * @description Represents a Data Transfer Object (DTO) for the Processor entity.
 */
export type ProcessorDto = Processor
