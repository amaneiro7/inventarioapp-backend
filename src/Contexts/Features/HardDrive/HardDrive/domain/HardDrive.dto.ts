import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Device } from '../../../../Device/Device/domain/Device.dto'
import { type HardDriveCapacityDto } from '../../HardDriveCapacity/domain/HardDriveCapacity.dto'
import { type HardDriveTypeDto } from '../../HardDriveType/domain/HardDriveType.dto'
import { type HardDriveHealth } from './HardDriveHealth'
import { type HDDCapacity } from './HDDCapacity'
import { type HDDType } from './HDDType'

/**
 * @interface DeviceHardDrive
 * @description Extends the base Device interface with hard drive-specific properties.
 */
export interface DeviceHardDrive extends Device {
	health: Primitives<HardDriveHealth>
	hardDriveCapacityId: Primitives<HDDCapacity>
	hardDriveTypeId: Primitives<HDDType>
}

/**
 * @type DeviceHardDrivePrimitives
 * @description Represents the primitive, serializable state of a DeviceHardDrive entity.
 */
export type DeviceHardDrivePrimitives = Device & DeviceHardDrive

/**
 * @type DeviceHardDriveParams
 * @description Represents the parameters required to create a new hard drive device.
 */
export type DeviceHardDriveParams = Device & DeviceHardDrive

/**
 * @type DeviceHardDriveDto
 * @description Data Transfer Object for a DeviceHardDrive, including related entities.
 */
export type DeviceHardDriveDto = DeviceHardDrive & {
	hardDriveCapacity: HardDriveCapacityDto
	hardDriveType: HardDriveTypeDto
}
