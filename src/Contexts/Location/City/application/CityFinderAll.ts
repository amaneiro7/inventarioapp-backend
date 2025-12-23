import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CityDto } from '../domain/entity/City.dto'
import { type CityRepository } from '../domain/repository/CityRepository'

/**
 * Service to find all cities based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class CityFinderAll extends GetAllBaseService<CityDto> {
	private readonly cityRepository: CityRepository
	constructor({ cityRepository }: { cityRepository: CityRepository }) {
		super()
		this.cityRepository = cityRepository
	}

	/**
	 * Runs the service to retrieve cities.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<CityDto>>} A promise that resolves to a paginated response of cities.
	 */
	async run(criteria: Criteria): Promise<ResponseService<CityDto>> {
		const { data, total } = await this.cityRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
