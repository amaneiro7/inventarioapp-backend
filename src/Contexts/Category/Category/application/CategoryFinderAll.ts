import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CategoryDto } from '../domain/Category.dto'
import { type CategoryRepository } from '../domain/CategoryRepository'

/**
 * Service to find all categories based on a given criteria.
 *
 * @class CategoriesFinderAll
 * @extends {GetAllBaseService<CategoryDto>}
 */
export class CategoriesFinderAll extends GetAllBaseService<CategoryDto> {
	/**
	 * Creates an instance of CategoriesFinderAll.
	 * @param {CategoryRepository} categoryRepository - The repository for categories.
	 */
	constructor(private readonly categoryRepository: CategoryRepository) {
		super()
	}

	/**
	 * Executes the service to find all categories.
	 *
	 * @param {Criteria} criteria - The criteria to apply for searching.
	 * @returns {Promise<ResponseService<CategoryDto>>} A promise that resolves to the search results.
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
