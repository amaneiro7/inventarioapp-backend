import { type Device } from '../../../Device/Device/domain/Device.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MFPIPAddress } from './MFPIPAddress'

export interface DeviceMFP {
	ipAddress: Primitives<MFPIPAddress>
}

export type DeviceMFPPrimitives = Device & {
	ipAddress: Primitives<MFPIPAddress>
}

export type DeviceMFPParams = Device & {
	ipAddress: Primitives<MFPIPAddress>
}

export type DeviceMFPDto = DeviceMFP
