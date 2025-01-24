import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Device } from '../../../../Device/Device/domain/Device.dto'
import { type HardDriveCapacityDto } from '../../HardDriveCapacity/domain/HardDriveCapacity.dto'
import { type HardDriveTypeDto } from '../../HardDriveType/domain/HardDriveType.dto'
import { type HardDriveHealth } from './HardDriveHealth'
import { type HDDCapacity } from './HDDCapacity'
import { type HDDType } from './HDDType'

export interface DeviceHardDrive {
	health: Primitives<HardDriveHealth>
	hardDriveCapacityId: Primitives<HDDCapacity>
	hardDriveTypeId: Primitives<HDDType>
}

export type DeviceHardDrivePrimitives = Device & {
	health: Primitives<HardDriveHealth>
	hardDriveCapacityId: Primitives<HDDCapacity>
	hardDriveTypeId: Primitives<HDDType>
}

export type DeviceHardDriveParams = Device & {
	health: Primitives<HardDriveHealth>
	hardDriveCapacityId: Primitives<HDDCapacity>
	hardDriveTypeId: Primitives<HDDType>
}

export type DeviceHardDriveDto = DeviceHardDrive & {
	hardDriveCapacity: HardDriveCapacityDto
	hardDriveType: HardDriveTypeDto
}
