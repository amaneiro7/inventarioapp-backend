import { type Device } from './Device.dto'
import { type DeviceIPAddress } from '../valueObject/DeviceIPAddress'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @interface DevicePrinter
 * @description Extends the base Device interface with MFP-specific properties.
 */
export interface DevicePrinter extends Device {
	ipAddress: Primitives<DeviceIPAddress>
}

/**
 * @type DevicePrinterPrimitives
 * @description Represents the primitive, serializable state of a DevicePrinter entity.
 */
export type DevicePrinterPrimitives = Device & DevicePrinter
export type DevicePrinterFields = keyof Omit<DevicePrinterPrimitives, 'id'>

/**
 * @type DevicePrinterParams
 * @description Represents the parameters required to create a new MFP device.
 */
export type DevicePrinterParams = Device & DevicePrinter

/**
 * @type DevicePrinterDto
 * @description Data Transfer Object for a DevicePrinter.
 */
export type DevicePrinterDto = DevicePrinter
