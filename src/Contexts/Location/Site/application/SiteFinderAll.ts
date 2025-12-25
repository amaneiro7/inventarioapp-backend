import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type SiteDto } from '../domain/entity/Site.dto'
import { type SiteRepository } from '../domain/repository/SiteRepository'

/**
 * Service to find all Sites based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class SiteFinderAll extends GetAllBaseService<SiteDto> {
	private readonly siteRepository: SiteRepository
	constructor({ siteRepository }: { siteRepository: SiteRepository }) {
		super()
		this.siteRepository = siteRepository
	}

	/**
	 * Runs the service to retrieve sites.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<SiteDto>>} A promise that resolves to a paginated response of site DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<SiteDto>> {
		const { data, total } = await this.siteRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
