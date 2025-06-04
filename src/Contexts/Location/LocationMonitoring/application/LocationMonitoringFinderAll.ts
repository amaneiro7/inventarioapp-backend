import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type LocationMonitoringMapped } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'

export class LocationMonitoringFinderAll extends GetAllBaseService<LocationMonitoringMapped> {
	constructor(private readonly locationMonitoringRepository: LocationMonitoringRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<LocationMonitoringMapped>> {
		const { data, total } = await this.locationMonitoringRepository.searchAll(criteria)

		return this.response({
			data: data.map(location => ({
				id: location.id,
				status: location.status,
				locationId: location.locationId,
				name: location.location.name ?? '',
				subnet: location.location?.subnet ?? '',
				site: location.location?.site,
				lastScan: location.lastScan,
				lastSuccess: location.lastSuccess,
				lastFailed: location.lastFailed
			})),
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
