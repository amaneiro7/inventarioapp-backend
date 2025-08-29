import { ShipmentDeviceId } from '../valueObject/ShipmentDeviceId'
import { DeviceId } from '../../../../Device/Device/domain/DeviceId'
import { DeviceSnapshot } from '../valueObject/ShipmentDeviceSnapshot'
import { ShipmentId } from '../../../Shipment/domain/valueObject/ShipmentId'
import { ShipmentDeviceDto, type ShipmentDeviceParams, type ShipmentDevicePrimitives } from './ShipmentDevice.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
export class ShipmentDevice {
	constructor(
		private readonly id: ShipmentDeviceId,
		private readonly shipmentId: ShipmentId,
		private readonly deviceId: DeviceId,
		private readonly deviceSnapshot: DeviceSnapshot
	) {}

	static create(params: ShipmentDeviceParams): ShipmentDevice {
		const id = ShipmentDeviceId.random()
		return new ShipmentDevice(
			id,
			new ShipmentId(params.shipmentId),
			new DeviceId(params.deviceId),
			DeviceSnapshot.fromDeviceDto(params.device)
		)
	}

	toPrimitive(): ShipmentDevicePrimitives {
		return {
			id: this.idValue,
			shipmentId: this.shipmentValue,
			deviceId: this.deviceValue,
			deviceSnapshot: this.deviceSnaphotValue
		}
	}

	static fromPrimitives(primitives: ShipmentDeviceDto): ShipmentDevice {
		return new ShipmentDevice(
			new ShipmentId(primitives.id),
			new ShipmentId(primitives.shipmentId),
			new DeviceId(primitives.deviceId),
			new DeviceSnapshot(primitives.deviceSnapshot)
		)
	}

	get idValue(): Primitives<ShipmentDeviceId> {
		return this.id.value
	}
	get shipmentValue(): Primitives<ShipmentId> {
		return this.shipmentId.value
	}

	get deviceValue(): Primitives<DeviceId> {
		return this.deviceId.value
	}

	get deviceSnaphotValue(): Primitives<DeviceSnapshot> {
		return this.deviceSnapshot.value
	}
}
