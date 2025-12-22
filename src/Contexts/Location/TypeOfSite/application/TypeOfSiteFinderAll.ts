import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type TypeOfSiteDto } from '../domain/entity/TypeOfSite.dto'
import { type TypeOfSiteRepository } from '../domain/repository/TypeOfSiteRepository'

/**
 * Service to find all TypeOfSites based on provided criteria.
 * Extends GetAllBaseService for common pagination and response handling.
 */
export class TypeOfSiteFinderAll extends GetAllBaseService<TypeOfSiteDto> {
	private readonly typeOfSiteRepository: TypeOfSiteRepository
	constructor({ typeOfSiteRepository }: { typeOfSiteRepository: TypeOfSiteRepository }) {
		super()
		this.typeOfSiteRepository = typeOfSiteRepository
	}

	/**
	 * Runs the service to retrieve types of sites.
	 * @param {Criteria} criteria - The criteria for searching, filtering, and pagination.
	 * @returns {Promise<ResponseService<TypeOfSiteDto>>} A promise that resolves to a paginated response of type of site DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<TypeOfSiteDto>> {
		const { data, total } = await this.typeOfSiteRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
