import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ShipmentId } from '../valueObject/ShipmentId'
import { type DeliveryDate } from '../valueObject/DeliveryDate'
import { type TrackingNumber } from '../valueObject/Trackingnumber'
import { type ShipmentStatus } from '../valueObject/ShipmentStatus'
import { type ShipmentReason } from '../valueObject/ShipmentReason'
import { type Origin } from '../valueObject/Origin'
import { type Destination } from '../valueObject/Destinaton'
import { type ShipmentDate } from '../valueObject/ShipmentDate'
import { type SentBy } from '../valueObject/SentBy'
import { type ReceivedBy } from '../valueObject/ReceivedBy'
import { type Observation } from '../valueObject/Observation'
import { type DeviceDto } from '../../../../Device/Device/domain/dto/Device.dto'
import {
	type ShipmentDevicePrimitives,
	type ShipmentDeviceDto
} from '../../../ShipmentDevice/domain/entity/ShipmentDevice.dto'
import { type DeviceId } from '../../../../Device/Device/domain/DeviceId'
import { type ShipmentCode } from '../valueObject/ShipmentCode'

export interface Shipment {
	id: Primitives<ShipmentId>
	shipmentCode: Primitives<ShipmentCode>
	origin: Primitives<Origin>
	destination: Primitives<Destination>
	shipmentDate: Primitives<ShipmentDate>
	deliveryDate: Primitives<DeliveryDate>
	sentBy: Primitives<SentBy>
	receivedBy: Primitives<ReceivedBy>
	trackingNumber: Primitives<TrackingNumber>
	observation: Primitives<Observation>
	status: Primitives<ShipmentStatus>
	reason: Primitives<ShipmentReason>
	shipmentDevices: ShipmentDevicePrimitives[]
}

export type ShipmentCreatorParams = Omit<
	Shipment & {
		devices: DeviceDto[]
	},
	'id'
>
export type ShipmentParams = Omit<
	Shipment & {
		deviceIds: Primitives<DeviceId>[]
	},
	'id' | 'shipmentCode'
>

export type ShipmentPrimitives = Shipment

export type ShipmentDto = Omit<
	Shipment & {
		shipmentDevice: ShipmentDeviceDto[]
	},
	'shipmentDevices'
>
