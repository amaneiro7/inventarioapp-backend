import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../../../Device/Device/domain/valueObject/DeviceId'
import { type ShipmentDeviceId } from '../valueObject/ShipmentDeviceId'
import { type DeviceSnapshotData } from '../valueObject/DeviceSnapshot'
import { type DeviceDto } from '../../../../Device/Device/domain/dto/Device.dto'
import { type ShipmentId } from '../../../Shipment/domain/valueObject/ShipmentId'

export interface ShipmentDevice {
	id: Primitives<ShipmentDeviceId>
	shipmentId: Primitives<ShipmentId>
	deviceId: Primitives<DeviceId>
	deviceSnapshot: DeviceSnapshotData
}

export type ShipmentDeviceParams = Omit<
	ShipmentDevice & {
		device: DeviceDto
	},
	'id' | 'deviceSnapshot'
>

export type ShipmentDevicePrimitives = ShipmentDevice

export type ShipmentDeviceDto = ShipmentDevice
