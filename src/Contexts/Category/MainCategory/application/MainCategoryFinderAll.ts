import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from '../domain/entity/MainCategory.dto'
import { type MainCategoryRepository } from '../domain/repository/MainCategoryRepository'

/**
 * @description Use case for retrieving all Main Category entities, with support for criteria-based filtering, sorting, and pagination.
 */
export class MainCategoriesFinderAll extends GetAllBaseService<MainCategoryDto> {
	private readonly mainCategoryRepository: MainCategoryRepository

	constructor({ mainCategoryRepository }: { mainCategoryRepository: MainCategoryRepository }) {
		super()
		this.mainCategoryRepository = mainCategoryRepository
	}

	/**
	 * @description Executes the process of finding all main categories based on the provided criteria.
	 * @param {Criteria} criteria The criteria object for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<MainCategoryDto>>} A promise that resolves to a paginated response containing Main Category DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<MainCategoryDto>> {
		const { data, total } = await this.mainCategoryRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
