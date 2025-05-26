import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DeviceMonitoringDto } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'

export class DeviceMonitoringFinderAll extends GetAllBaseService<DeviceMonitoringDto> {
	constructor(private readonly deviceMonitoringRepository: DeviceMonitoringRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<DeviceMonitoringDto>> {
		const { data, total } = await this.deviceMonitoringRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
