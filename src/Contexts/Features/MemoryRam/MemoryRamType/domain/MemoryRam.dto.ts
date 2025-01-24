import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from './MemoryRamTypeId'
import { type MemoryRamTypeName } from './MemoryRamTypeName'

export interface MemoryRamType {
	id: Primitives<MemoryRamTypeId>
	name: Primitives<MemoryRamTypeName>
}

export type MemoryRamTypePrimitives = MemoryRamType

export type MemoryRamTypeDto = MemoryRamType
