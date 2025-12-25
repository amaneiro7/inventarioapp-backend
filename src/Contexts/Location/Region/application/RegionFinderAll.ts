import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type RegionDto } from '../domain/entity/Region.dto'
import { type RegionRepository } from '../domain/repository/RegionRepository'

/**
 * Service to find all Regions based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class RegionFinderAll extends GetAllBaseService<RegionDto> {
	private readonly regionRepository: RegionRepository
	constructor({ regionRepository }: { regionRepository: RegionRepository }) {
		super()
		this.regionRepository = regionRepository
	}

	/**
	 * Runs the service to retrieve regions.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<RegionDto>>} A promise that resolves to a paginated response of region DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<RegionDto>> {
		const { data, total } = await this.regionRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
