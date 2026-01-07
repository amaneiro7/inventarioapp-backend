import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeId } from '../valueObject/HardDriveTypeId'
import { type HardDriveTypeName } from '../valueObject/HardDriveTypeName'

/**
 * @interface HardDriveType
 * @description Defines the core properties of a HardDriveType entity.
 */
export interface HardDriveType {
	id: Primitives<HardDriveTypeId>
	name: Primitives<HardDriveTypeName>
}

/**
 * @type HardDriveTypePrimitives
 * @description Represents the primitive, serializable state of a HardDriveType entity.
 */
export type HardDriveTypePrimitives = HardDriveType

/**
 * @type HardDriveTypeDto
 * @description Represents a Data Transfer Object (DTO) for the HardDriveType entity.
 */
export type HardDriveTypeDto = HardDriveType
