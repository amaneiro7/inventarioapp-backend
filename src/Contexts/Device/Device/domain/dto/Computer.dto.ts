import { type HardDriveCapacityDto } from '../../../../Features/HardDrive/HardDriveCapacity/domain/entity/HardDriveCapacity.dto'
import { type HardDriveCapacityId } from '../../../../Features/HardDrive/HardDriveCapacity/domain/valueObject/HardDriveCapacityId'
import { type HardDriveTypeDto } from '../../../../Features/HardDrive/HardDriveType/domain/entity/HardDriveType.dto'
import { type HardDriveTypeId } from '../../../../Features/HardDrive/HardDriveType/domain/valueObject/HardDriveTypeId'
import { type MemoryRamCapacity } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamCapacity'
import { type MemoryRamValues } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type OperatingSystemDto } from '../../../../Features/OperatingSystem/OperatingSystem/domain/entity/OperatingSystem.dto'
import { type OperatingSystemId } from '../../../../Features/OperatingSystem/OperatingSystem/domain/valueObject/OperatingSystemId'
import { type OperatingSystemArqDto } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/entity/OperatingSystemArq.dto'
import { type OperatingSystemArqId } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/valueObject/OperatingSystemArqID'
import { type ProcessorDto } from '../../../../Features/Processor/domain/entity/Processor.dto'
import { type ProcessorId } from '../../../../Features/Processor/domain/valueObject/ProcessorId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ComputerName } from '../valueObject/ComputerName'
import { type DeviceIPAddress } from '../valueObject/DeviceIPAddress'
import { type MACAddress } from '../valueObject/MACAddress'
import { type Device, type DevicePrimitives } from './Device.dto'

/**
 * @interface DeviceComputer
 * @description Extends the base Device interface with computer-specific properties.
 */
export interface DeviceComputer extends Device {
	computerName: Primitives<ComputerName>
	processorId: Primitives<ProcessorId> | null
	memoryRam: Primitives<MemoryRamValues>[]
	memoryRamCapacity: Primitives<MemoryRamCapacity>
	hardDriveCapacityId: Primitives<HardDriveCapacityId> | null
	hardDriveTypeId: Primitives<HardDriveTypeId> | null
	operatingSystemId: Primitives<OperatingSystemId> | null
	operatingSystemArqId: Primitives<OperatingSystemArqId> | null
	macAddress: Primitives<MACAddress>
	ipAddress: Primitives<DeviceIPAddress>
}

/**
 * @type DeviceComputerPrimitives
 * @description Represents the primitive, serializable state of a DeviceComputer entity.
 */
export type DeviceComputerPrimitives = DevicePrimitives & DeviceComputer

/**
 * @type DeviceComputerParams
 * @description Represents the parameters required to create a new computer device.
 */
export type DeviceComputerParams = Device & {
	computerName: Primitives<ComputerName>
	processorId: Primitives<ProcessorId> | null
	memoryRam: Primitives<MemoryRamValues>[]
	hardDriveCapacityId: Primitives<HardDriveCapacityId> | null
	hardDriveTypeId: Primitives<HardDriveTypeId> | null
	operatingSystemId: Primitives<OperatingSystemId> | null
	operatingSystemArqId: Primitives<OperatingSystemArqId> | null
	macAddress: Primitives<MACAddress>
	ipAddress: Primitives<DeviceIPAddress>
}

/**
 * @type DeviceComputerDto
 * @description Data Transfer Object for a DeviceComputer, including related entities.
 */
export type DeviceComputerDto = DeviceComputer & {
	processor: ProcessorDto
	hardDriveCapacity: HardDriveCapacityDto
	hardDriveType: HardDriveTypeDto
	operatingSystem: OperatingSystemDto
	operatingSystemArq: OperatingSystemArqDto
}
