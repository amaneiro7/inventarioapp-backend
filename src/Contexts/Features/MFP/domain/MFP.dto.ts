import { type Device } from '../../../Device/Device/domain/dto/Device.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MFPIPAddress } from './MFPIPAddress'

/**
 * @interface DeviceMFP
 * @description Extends the base Device interface with MFP-specific properties.
 */
export interface DeviceMFP extends Device {
	ipAddress: Primitives<MFPIPAddress>
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
