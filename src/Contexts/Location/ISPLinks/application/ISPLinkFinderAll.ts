import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type ISPLinkDto } from '../domain/entity/ISPLink.dto'
import { type ISPLinkRepository } from '../domain/repository/ISPLinkRepository'

/**
 * Service to find all ISPLinks based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class ISPLinkFinderAll extends GetAllBaseService<ISPLinkDto> {
	private readonly ispLinkRepository: ISPLinkRepository
	constructor({ ispLinkRepository }: { ispLinkRepository: ISPLinkRepository }) {
		super()
		this.ispLinkRepository = ispLinkRepository
	}

	/**
	 * Runs the service to retrieve all ISPLinks.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<ISPLinkDto>>} A promise that resolves to a paginated response of ISPLinks.
	 */
	async run(criteria: Criteria): Promise<ResponseService<ISPLinkDto>> {
		const { data, total } = await this.ispLinkRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
