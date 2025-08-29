import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type ShipmentDto } from '../domain/entity/Shipment.dto'
import { type ShipmentRepository } from '../domain/repository/ShipmentRepository'

export class ShipmentFinderAll extends GetAllBaseService<ShipmentDto> {
	private readonly shipmentRepository: ShipmentRepository

	constructor({ shipmentRepository }: { shipmentRepository: ShipmentRepository }) {
		super()
		this.shipmentRepository = shipmentRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<ShipmentDto>> {
		const { data, total } = await this.shipmentRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
