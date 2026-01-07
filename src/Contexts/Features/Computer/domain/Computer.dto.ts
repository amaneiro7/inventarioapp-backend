import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type Device, type DevicePrimitives } from '../../../Device/Device/domain/dto/Device.dto'
import { type ProcessorDto } from '../../Processor/domain/entity/Processor.dto'
import { type HardDriveCapacityDto } from '../../HardDrive/HardDriveCapacity/domain/entity/HardDriveCapacity.dto'
import { type HardDriveTypeDto } from '../../HardDrive/HardDriveType/domain/entity/HardDriveType.dto'
import { type OperatingSystemDto } from '../../OperatingSystem/OperatingSystem/domain/entity/OperatingSystem.dto'
import { type OperatingSystemArqDto } from '../../OperatingSystem/OperatingSystemArq/domain/entity/OperatingSystemArq.dto'
import { type ComputerName } from './ComputerName'
import { type ComputerProcessor } from './ComputerProcessor'
import { type MemoryRamValues } from '../../MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type ComputerMemoryRamCapacity } from './ComputerMemoryRamCapacity'
import { type ComputerHardDriveCapacity } from './ComputerHardDriveCapacity'
import { type ComputerHardDriveType } from './ComputerHardDriveType'
import { type ComputerOperatingSystem } from './ComputerOperatingSystem'
import { type ComputerOperatingSystemArq } from './ComputerOperatingSystemArq'
import { type MACAddress } from './MACAddress'
import { type IPAddress } from './IPAddress'

/**
 * @interface DeviceComputer
 * @description Extends the base Device interface with computer-specific properties.
 */
export interface DeviceComputer extends Device {
	computerName: Primitives<ComputerName>
	processorId: Primitives<ComputerProcessor>
	memoryRam: Primitives<MemoryRamValues>[]
	memoryRamCapacity: Primitives<ComputerMemoryRamCapacity>
	hardDriveCapacityId: Primitives<ComputerHardDriveCapacity>
	hardDriveTypeId: Primitives<ComputerHardDriveType>
	operatingSystemId: Primitives<ComputerOperatingSystem>
	operatingSystemArqId: Primitives<ComputerOperatingSystemArq>
	macAddress: Primitives<MACAddress>
	ipAddress: Primitives<IPAddress>
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
	processorId: Primitives<ComputerProcessor>
	memoryRam: Primitives<MemoryRamValues>[]
	hardDriveCapacityId: Primitives<ComputerHardDriveCapacity>
	hardDriveTypeId: Primitives<ComputerHardDriveType>
	operatingSystemId: Primitives<ComputerOperatingSystem>
	operatingSystemArqId: Primitives<ComputerOperatingSystemArq>
	macAddress: Primitives<MACAddress>
	ipAddress: Primitives<IPAddress>
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
