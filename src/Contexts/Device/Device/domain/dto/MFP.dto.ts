import { type Device } from './Device.dto'
import { type DeviceIPAddress } from '../valueObject/DeviceIPAddress'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @interface DeviceMFP
 * @description Extends the base Device interface with MFP-specific properties.
 */
export interface DeviceMFP extends Device {
	ipAddress: Primitives<DeviceIPAddress>
}

/**
 * @type DeviceMFPPrimitives
 * @description Represents the primitive, serializable state of a DeviceMFP entity.
 */
export type DeviceMFPPrimitives = Device & DeviceMFP

/**
 * @type DeviceMFPParams
 * @description Represents the parameters required to create a new MFP device.
 */
export type DeviceMFPParams = Device & DeviceMFP

/**
 * @type DeviceMFPDto
 * @description Data Transfer Object for a DeviceMFP.
 */
export type DeviceMFPDto = DeviceMFP
