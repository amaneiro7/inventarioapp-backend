import { type BrandName } from '../../../../Brand/domain/valueObject/BrandName'
import { type DeviceActivo } from '../../../../Device/Device/domain/valueObject/DeviceActivo'
import { type DeviceId } from '../../../../Device/Device/domain/valueObject/DeviceId'
import { type DeviceSerial } from '../../../../Device/Device/domain/valueObject/DeviceSerial'
import { type StatusName } from '../../../../Device/Status/domain/valueObject/StatusName'

import { type ComputerName } from '../../../../Device/Device/domain/valueObject/ComputerName'
import { type DeviceIPAddress } from '../../../../Device/Device/domain/valueObject/DeviceIPAddress'
import { type MACAddress } from '../../../../Device/Device/domain/valueObject/MACAddress'
import { type HardDriveHealth } from '../../../../Device/Device/domain/valueObject/HardDriveHealth'
import { type HardDriveCapacityValue } from '../../../../Features/HardDrive/HardDriveCapacity/domain/valueObject/HardDriveCapacityValue'
import { type HardDriveTypeName } from '../../../../Features/HardDrive/HardDriveType/domain/valueObject/HardDriveTypeName'
import { type MemoryRamValues } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type OperatingSystemVersion } from '../../../../Features/OperatingSystem/OperatingSystem/domain/valueObject/OperatingSystemVersion'
import { type OperatingSystemArqName } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/valueObject/OperatingSystemArqName'
import { type ProcessorName } from '../../../../Features/Processor/domain/valueObject/ProcessorName'
import { type ModelSeriesName } from '../../../../ModelSeries/ModelSeries/domain/valueObject/ModelSeriesName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamCapacity } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamCapacity'

// Propiedades comunes a todos los dispositivos
interface BaseDeviceSnapshot {
	id: Primitives<DeviceId>
	serial: Primitives<DeviceSerial>
	activo: Primitives<DeviceActivo>
	status: Primitives<StatusName>
	brandName: Primitives<BrandName>
	modelName: Primitives<ModelSeriesName>
}

// Interfaces específicas por categoría
interface ComputerSnapshot extends BaseDeviceSnapshot {
	categoryName: 'Computadoras' | 'Laptops' | 'All in One' | 'Servidores'
	computerName: Primitives<ComputerName>
	processorName: Primitives<ProcessorName>
	memoryRam: Primitives<MemoryRamValues>[]
	memoryRamCapacity: Primitives<MemoryRamCapacity>
	hardDriveCapacity: Primitives<HardDriveCapacityValue>
	hardDriveType: Primitives<HardDriveTypeName>
	operatingSystem: Primitives<OperatingSystemVersion>
	operatingSystemArq: Primitives<OperatingSystemArqName>
	macAddress: Primitives<MACAddress>
	ipAddress: Primitives<DeviceIPAddress>
}

interface HardDriveSnapshot extends BaseDeviceSnapshot {
	categoryName: 'Discos Duros'
	health: Primitives<HardDriveHealth>
	hardDriveCapacity: Primitives<HardDriveCapacityValue>
	hardDriveType: Primitives<HardDriveTypeName>
}

// Un tipo de unión que incluye todos los posibles snapshots.
// Esto nos permite ser específicos en la lógica del código.
export type DeviceSnapshotData = BaseDeviceSnapshot | ComputerSnapshot | HardDriveSnapshot
