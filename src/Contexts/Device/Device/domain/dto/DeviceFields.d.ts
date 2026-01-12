import { type DeviceComputerFields } from './Computer.dto'
import { type DeviceFields } from './Device.dto'
import { type DeviceHardDriveFields } from './HardDrive.dto'
import { type DevicePrinterFields } from './Printer.dto'

export type DeviceChangeFields = Array<{
	field: DeviceFields | DeviceComputerFields | DeviceHardDriveFields | DevicePrinterFields

	oldValue: unknown
	newValue: unknown
}>
