import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityId } from './HardDriveCapacityId'
import { type HardDriveCapacityValue } from './HardDriveCapacityValue'

export interface HardDriveCapacity {
	id: Primitives<HardDriveCapacityId>
	name: Primitives<HardDriveCapacityValue>
}

export type HardDriveCapacityPrimitives = HardDriveCapacity

export type HardDriveCapacityDto = HardDriveCapacity
