import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DeviceDto } from '../domain/Device.dto'
import { type DeviceRepository } from '../domain/DeviceRepository'

export class DeviceSearchByCriteria extends GetAllBaseService<DeviceDto> {
	private readonly deviceRepository: DeviceRepository
	constructor({ deviceRepository }: { deviceRepository: DeviceRepository }) {
		super()
		this.deviceRepository = deviceRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<DeviceDto>> {
		const { data, total } = await this.deviceRepository.matching(criteria)

		return this.response({
			data,
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
