import { ShipmentDeviceModel } from './ShipmentDeviceSchema'
import { type ShipmentDeviceRepository } from '../../domain/repository/ShipmentDeviceRepository'
import { type ShipmentDevicePrimitives } from '../../domain/entity/ShipmentDevice.dto'

export class SequelizeShipmentDeviceRepository implements ShipmentDeviceRepository {
	async save(payload: ShipmentDevicePrimitives): Promise<void> {
		await ShipmentDeviceModel.create(payload)
	}

	async saveMultiple(payload: ShipmentDevicePrimitives[]): Promise<void> {
		await ShipmentDeviceModel.bulkCreate(payload)
	}

	async removeByShipmentId(shipmentId: string): Promise<void> {
		await ShipmentDeviceModel.destroy({ where: { shipmentId } })
	}
}
