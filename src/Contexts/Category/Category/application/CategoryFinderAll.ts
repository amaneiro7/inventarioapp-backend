import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CategoryDto } from '../domain/Category.dto'
import { type CategoryRepository } from '../domain/CategoryRepository'

/**
 * @description Use case for retrieving all Category entities, with support for criteria-based filtering, sorting, and pagination.
 */
export class CategoriesFinderAll extends GetAllBaseService<CategoryDto> {
	private readonly categoryRepository: CategoryRepository

	constructor({ categoryRepository }: { categoryRepository: CategoryRepository }) {
		super()
		this.categoryRepository = categoryRepository
	}

	/**
	 * @description Executes the process of finding all categories based on the provided criteria.
	 * @param {Criteria} criteria The criteria object for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<CategoryDto>>} A promise that resolves to a paginated response containing Category DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<CategoryDto>> {
		const { data, total } = await this.categoryRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
