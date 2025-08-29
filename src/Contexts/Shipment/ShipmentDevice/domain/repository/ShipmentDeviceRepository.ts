import { type ShipmentDevicePrimitives } from '../entity/ShipmentDevice.dto'

export abstract class ShipmentDeviceRepository {
	abstract save(payload: ShipmentDevicePrimitives): Promise<void>
	abstract saveMultiple(payload: ShipmentDevicePrimitives[]): Promise<void>
	abstract removeByShipmentId(shipmentId: string): Promise<void>
}
