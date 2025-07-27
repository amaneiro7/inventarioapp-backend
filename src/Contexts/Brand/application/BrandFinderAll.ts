import { GetAllBaseService } from '../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../Shared/domain/ResponseType'
import { type BrandDto } from '../domain/Brand.dto'
import { type BrandRepository } from '../domain/BrandRepository'

/**
 * @description Use case for retrieving all Brand entities, with support for criteria-based filtering, sorting, and pagination.
 */
export class BrandFinderAll extends GetAllBaseService<BrandDto> {
	private readonly brandRepository: BrandRepository

	constructor({ brandRepository }: { brandRepository: BrandRepository }) {
		super()
		this.brandRepository = brandRepository
	}

	/**
	 * @description Executes the process of finding all brands based on the provided criteria.
	 * @param {Criteria} criteria The criteria object for filtering, sorting, and pagination.
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
