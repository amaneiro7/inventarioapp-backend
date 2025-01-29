import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketId } from './ProcessorSocketId'
import { type ProcessorSocketName } from './ProcessorSocketName'

export interface ProcessorSocket {
	id: Primitives<ProcessorSocketId>
	name: Primitives<ProcessorSocketName>
}

export type ProcessorSocketPrimitives = ProcessorSocket

export type ProcessorSocketDto = ProcessorSocket
