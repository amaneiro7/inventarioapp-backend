import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Device } from '../../../../Device/Device/domain/dto/Device.dto'
import { type HardDriveHealth } from '../valueObject/HardDriveHealth'
import { type HardDriveCapacityId } from '../../../../Features/HardDrive/HardDriveCapacity/domain/valueObject/HardDriveCapacityId'
import { type HardDriveTypeId } from '../../../../Features/HardDrive/HardDriveType/domain/valueObject/HardDriveTypeId'
import { type HardDriveCapacityDto } from '../../../../Features/HardDrive/HardDriveCapacity/domain/entity/HardDriveCapacity.dto'
import { type HardDriveTypeDto } from '../../../../Features/HardDrive/HardDriveType/domain/entity/HardDriveType.dto'

/**
 * @interface DeviceHardDrive
 * @description Extends the base Device interface with hard drive-specific properties.
 */
export interface DeviceHardDrive extends Device {
	health: Primitives<HardDriveHealth>
	hardDriveCapacityId: Primitives<HardDriveCapacityId>
	hardDriveTypeId: Primitives<HardDriveTypeId>
}

/**
 * @type DeviceHardDrivePrimitives
 * @description Represents the primitive, serializable state of a DeviceHardDrive entity.
 */
export type DeviceHardDrivePrimitives = Device & DeviceHardDrive

export type DeviceHardDriveFields = keyof Omit<DeviceHardDrivePrimitives, 'id'>
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
