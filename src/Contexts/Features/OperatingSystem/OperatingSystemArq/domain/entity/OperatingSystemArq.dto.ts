import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqId } from '../valueObject/OperatingSystemArqID'
import { type OperatingSystemArqName } from '../valueObject/OperatingSystemArqName'

/**
 * @interface OperatingSystemArq
 * @description Defines the core properties of an OperatingSystemArq entity.
 */
export interface OperatingSystemArq {
	id: Primitives<OperatingSystemArqId>
	name: Primitives<OperatingSystemArqName>
}

/**
 * @type OperatingSystemArqPrimitives
 * @description Represents the primitive, serializable state of an OperatingSystemArq entity.
 */
export type OperatingSystemArqPrimitives = OperatingSystemArq

/**
 * @type OperatingSystemArqDto
 * @description Represents a Data Transfer Object (DTO) for the OperatingSystemArq entity.
 */
export type OperatingSystemArqDto = OperatingSystemArq
