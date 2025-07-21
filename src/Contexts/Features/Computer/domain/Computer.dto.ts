import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type Device, type DevicePrimitives } from '../../../Device/Device/domain/Device.dto'
import { type ProcessorDto } from '../../Processor/Processor/domain/Processor.dto'
import { type HardDriveCapacityDto } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacity.dto'
import { type HardDriveTypeDto } from '../../HardDrive/HardDriveType/domain/HardDriveType.dto'
import { type OperatingSystemDto } from '../../OperatingSystem/OperatingSystem/domain/OperatingSystem.dto'
import { type OperatingSystemArqDto } from '../../OperatingSystem/OperatingSystemArq/domain/OperatingSystemArq.dto'
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
 * Represents the structure of a computer device, extending the base Device interface.
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
 * Represents the primitive type of a DeviceComputer, extending the base DevicePrimitives.
 */
export type DeviceComputerPrimitives = DevicePrimitives & {
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
 * Represents the parameters for creating a new computer device, extending the base Device interface.
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
 * Data Transfer Object for a DeviceComputer, including related entities.
 */
export type DeviceComputerDto = DeviceComputer & {
	processor: ProcessorDto
	hardDriveCapacity: HardDriveCapacityDto
	hardDriveType: HardDriveTypeDto
	operatingSystem: OperatingSystemDto
	operatingSystemArq: OperatingSystemArqDto
}

