import { GetAllBaseService } from '../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../Shared/domain/ResponseType'
import { type BrandDto } from '../domain/Brand.dto'
import { type BrandRepository } from '../domain/BrandRepository'

/**
 * @class BrandFinderAll
 * @extends GetAllBaseService<BrandDto>
 * @description Use case for retrieving all Brand entities, with support for criteria-based filtering and pagination.
 */
export class BrandFinderAll extends GetAllBaseService<BrandDto> {
	/**
	 * @constructor
	 * @param {BrandRepository} brandRepository - The repository responsible for Brand data persistence.
	 */
	constructor(private readonly brandRepository: BrandRepository) {
		super()
	}

	/**
	 * @method run
	 * @description Executes the process of finding all brands based on the provided criteria.
	 * @param {Criteria} criteria - The criteria object for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<BrandDto>>} A promise that resolves to a paginated response containing Brand DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<BrandDto>> {
		const { data, total } = await this.brandRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
