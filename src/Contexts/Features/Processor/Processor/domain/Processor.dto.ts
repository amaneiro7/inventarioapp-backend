import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorId } from './ProcessorId'
import { type ProcessorName } from './ProcessorName'
import { type ProcessorCores } from './ProcessorCores'
import { type ProcessorFrequency } from './ProcessorFrequency'
import { type ProcessorHasThreads } from './ProcessorIsThreads'
import { type ProcessorNumberModel } from './ProcessorNumberModel'
import { type ProcessorProductCollection } from './ProcessorProductCollection'

export interface Processor {
	id: Primitives<ProcessorId>
	productCollection: Primitives<ProcessorProductCollection>
	numberModel: Primitives<ProcessorNumberModel>
	name: Primitives<ProcessorName>
	cores: Primitives<ProcessorCores>
	threads: Primitives<ProcessorHasThreads>
	frequency: Primitives<ProcessorFrequency>
}

export type ProcessorPrimitives = Processor

export type ProcessorParams = Omit<Processor, 'id' | 'name'>

export type ProcessorDto = Processor
