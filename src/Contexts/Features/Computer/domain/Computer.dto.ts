import { type Device } from '../../../Device/Device/domain/Device.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityDto } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacity.dto'
import { type HardDriveTypeDto } from '../../HardDrive/HardDriveType/domain/HardDriveType.dto'
import { type MemoryRamValues } from '../../MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type OperatingSystemDto } from '../../OperatingSystem/OperatingSystem/domain/OperatingSystem.dto'
import { type OperatingSystemArqDto } from '../../OperatingSystem/OperatingSystemArq/domain/OperatingSystemArq.dto'
import { type ProcessorDto } from '../../Processor/Processor/domain/Processor.dto'
import { type ComputerHardDriveCapacity } from './ComputerHardDriveCapacity'
import { type ComputerHardDriveType } from './ComputerHardDriveType'
import { type ComputerMemoryRamCapacity } from './ComputerMemoryRamCapacity'
import { type ComputerName } from './ComputerName'
import { type ComputerOperatingSystem } from './ComputerOperatingSystem'
import { type ComputerOperatingSystemArq } from './ComputerOperatingSystemArq'
import { type ComputerProcessor } from './ComputerProcessor'
import { type IPAddress } from './IPAddress'
import { type MACAddress } from './MACAddress'

export interface DeviceComputer {
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

export type DeviceComputerPrimitives = Device & {
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

export type DeviceComputerDto = DeviceComputer & {
	processor: ProcessorDto
	hardDriveCapacity: HardDriveCapacityDto
	hardDriveType: HardDriveTypeDto
	operatingSystem: OperatingSystemDto
	operatingSystemArq: OperatingSystemArqDto
}
