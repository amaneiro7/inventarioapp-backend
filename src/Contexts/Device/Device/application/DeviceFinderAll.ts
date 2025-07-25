import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { ResponseService } from '../../../Shared/domain/ResponseType'
import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type DeviceDto } from '../domain/Device.dto'
import { type DeviceRepository } from '../domain/DeviceRepository'

export class DevicesFinderAll extends GetAllBaseService<DeviceDto> {
	private readonly deviceRepository: DeviceRepository
	constructor({ deviceRepository }: { deviceRepository: DeviceRepository }) {
		super()
		this.deviceRepository = deviceRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<DeviceDto>> {
		const { data, total } = await this.deviceRepository.searchAll(criteria)

		return this.response({
			total,
			data,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
