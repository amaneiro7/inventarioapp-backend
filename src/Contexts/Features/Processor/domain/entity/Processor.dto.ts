import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorId } from '../valueObject/ProcessorId'
import { type ProcessorName } from '../valueObject/ProcessorName'
import { type ProcessorCores } from '../valueObject/ProcessorCores'
import { type ProcessorFrequency } from '../valueObject/ProcessorFrequency'
import { type ProcessorHasThreads } from '../valueObject/ProcessorIsThreads'
import { type ProcessorNumberModel } from '../valueObject/ProcessorNumberModel'
import { type ProcessorProductCollection } from '../valueObject/ProcessorProductCollection'

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
