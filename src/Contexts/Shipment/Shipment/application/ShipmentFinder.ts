import { ShipmentId } from '../domain/valueObject/ShipmentId'

import { type ShipmentDto } from '../domain/entity/Shipment.dto'
import { type ShipmentRepository } from '../domain/repository/ShipmentRepository'
import { ShipmentDoesNotExistError } from '../domain/errors/ShipmentDoesNotExistError'

export class ShipmentFinder {
	private readonly shipmentRepository: ShipmentRepository

	constructor({ shipmentRepository }: { shipmentRepository: ShipmentRepository }) {
		this.shipmentRepository = shipmentRepository
	}

	async run({ id }: { id: string }): Promise<ShipmentDto> {
		const shipmentId = new ShipmentId(id)
		const shipment = await this.shipmentRepository.searchById(shipmentId.value)

		if (!shipment) {
			throw new ShipmentDoesNotExistError(shipmentId.value)
		}

		return shipment
	}
}
