import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type LocationMonitoringMapped } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'

/**
 * Service to find all LocationMonitoring entries based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class LocationMonitoringFinderAll extends GetAllBaseService<LocationMonitoringMapped> {
	private readonly locationMonitoringRepository: LocationMonitoringRepository
	constructor({ locationMonitoringRepository }: { locationMonitoringRepository: LocationMonitoringRepository }) {
		super()
		this.locationMonitoringRepository = locationMonitoringRepository
	}

	/**
	 * Runs the service to retrieve location monitoring entries.
	 * Maps the raw data to a more user-friendly format including location name, subnet, and site details.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<LocationMonitoringMapped>>} A promise that resolves to a paginated response of mapped location monitoring DTOs.
	 */
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
