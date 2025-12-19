import { type BrandName } from '../../../../Brand/domain/valueObject/BrandName'
import { type DeviceActivo } from '../../../../Device/Device/domain/DeviceActivo'
import { type DeviceId } from '../../../../Device/Device/domain/DeviceId'
import { type DeviceSerial } from '../../../../Device/Device/domain/DeviceSerial'
import { type StatusName } from '../../../../Device/Status/domain/StatusName'
import { type ComputerMemoryRamCapacity } from '../../../../Features/Computer/domain/ComputerMemoryRamCapacity'
import { type ComputerName } from '../../../../Features/Computer/domain/ComputerName'
import { type IPAddress } from '../../../../Features/Computer/domain/IPAddress'
import { type MACAddress } from '../../../../Features/Computer/domain/MACAddress'
import { type HardDriveHealth } from '../../../../Features/HardDrive/HardDrive/domain/HardDriveHealth'
import { type HardDriveCapacityValue } from '../../../../Features/HardDrive/HardDriveCapacity/domain/HardDriveCapacityValue'
import { type HardDriveTypeName } from '../../../../Features/HardDrive/HardDriveType/domain/HardDriveTypeName'
import { type MemoryRamValues } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type OperatingSystemVersion } from '../../../../Features/OperatingSystem/OperatingSystem/domain/OperatingSystemVersion'
import { type OperatingSystemArqName } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/OperatingSystemArqName'
import { type ProcessorName } from '../../../../Features/Processor/Processor/domain/ProcessorName'
import { type ModelSeriesName } from '../../../../ModelSeries/ModelSeries/domain/valueObject/ModelSeriesName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

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
	memoryRamCapacity: Primitives<ComputerMemoryRamCapacity>
	hardDriveCapacity: Primitives<HardDriveCapacityValue>
	hardDriveType: Primitives<HardDriveTypeName>
	operatingSystem: Primitives<OperatingSystemVersion>
	operatingSystemArq: Primitives<OperatingSystemArqName>
	macAddress: Primitives<MACAddress>
	ipAddress: Primitives<IPAddress>
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
