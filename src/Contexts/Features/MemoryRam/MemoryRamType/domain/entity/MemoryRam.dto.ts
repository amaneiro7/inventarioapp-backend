import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../valueObject/MemoryRamTypeId'
import { type MemoryRamTypeName } from '../valueObject/MemoryRamTypeName'

/**
 * @interface MemoryRamType
 * @description Defines the core properties of a MemoryRamType entity.
 */
export interface MemoryRamType {
	id: Primitives<MemoryRamTypeId>
	name: Primitives<MemoryRamTypeName>
}

/**
 * @type MemoryRamTypePrimitives
 * @description Represents the primitive, serializable state of a MemoryRamType entity.
 */
export type MemoryRamTypePrimitives = MemoryRamType

/**
 * @type MemoryRamTypeDto
 * @description Represents a Data Transfer Object (DTO) for the MemoryRamType entity.
 */
export type MemoryRamTypeDto = MemoryRamType
