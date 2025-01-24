import { type Device } from '../../../Device/Device/domain/Device'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MFPIPAddress } from './MFPIPAddress'

export interface MFP {
	ipAddress: Primitives<MFPIPAddress>
}

export type MFPPrimitives = Device & {
	ipAddress: Primitives<MFPIPAddress>
}

export type MFPParams = Device & {
	ipAddress: Primitives<MFPIPAddress>
}

export type MFPDto = MFP
