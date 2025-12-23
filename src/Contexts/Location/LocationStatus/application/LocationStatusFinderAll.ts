import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type LocationStatusDto } from '../domain/entity/LocationStatus.dto'
import { type LocationStatusRepository } from '../domain/repository/LocationStatusRepository'

/**
 * Service to find all location statuses based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class LocationStatusFinderAll extends GetAllBaseService<LocationStatusDto> {
	private readonly locationStatusRepository: LocationStatusRepository
	constructor({ locationStatusRepository }: { locationStatusRepository: LocationStatusRepository }) {
		super()
		this.locationStatusRepository = locationStatusRepository
	}

	/**
	 * Runs the service to retrieve location statuses.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<LocationStatusDto>>} A promise that resolves to a paginated response of location status DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<LocationStatusDto>> {
		const { data, total } = await this.locationStatusRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
