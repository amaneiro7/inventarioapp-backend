import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type LocationDto } from '../domain/Location.dto'
import { type LocationRepository } from '../domain/LocationRepository'

/**
 * Service to find all Locations based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class LocationFinderAll extends GetAllBaseService<LocationDto> {
	private readonly locationRepository: LocationRepository
	constructor({ locationRepository }: { locationRepository: LocationRepository }) {
		super()
		this.locationRepository = locationRepository
	}

	/**
	 * Runs the service to retrieve locations.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<LocationDto>>} A promise that resolves to a paginated response of location DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<LocationDto>> {
		const { data, total } = await this.locationRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
