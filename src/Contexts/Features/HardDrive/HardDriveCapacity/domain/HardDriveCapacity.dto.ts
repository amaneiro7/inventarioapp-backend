import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityId } from './HardDriveCapacityId'
import { type HardDriveCapacityValue } from './HardDriveCapacityValue'

/**
 * @interface HardDriveCapacity
 * @description Defines the core properties of a HardDriveCapacity entity.
 */
export interface HardDriveCapacity {
	id: Primitives<HardDriveCapacityId>
	name: Primitives<HardDriveCapacityValue>
}

/**
 * @type HardDriveCapacityPrimitives
 * @description Represents the primitive, serializable state of a HardDriveCapacity entity.
 */
export type HardDriveCapacityPrimitives = HardDriveCapacity

/**
 * @type HardDriveCapacityDto
 * @description Represents a Data Transfer Object (DTO) for the HardDriveCapacity entity.
 */
export type HardDriveCapacityDto = HardDriveCapacity
