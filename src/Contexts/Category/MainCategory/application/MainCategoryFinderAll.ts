import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from '../domain/MainCategory.dto'
import { type MainCategoryRepository } from '../domain/MainCategoryRepository'

/**
 * Service to find all main categories based on a given criteria.
 *
 * @class MainCategoriesFinderAll
 * @extends {GetAllBaseService<MainCategoryDto>}
 */
export class MainCategoriesFinderAll extends GetAllBaseService<MainCategoryDto> {
	/**
	 * Creates an instance of MainCategoriesFinderAll.
	 * @param {MainCategoryRepository} mainCategoryRepository - The repository for main categories.
	 */
	constructor(private readonly mainCategoryRepository: MainCategoryRepository) {
		super()
	}

	/**
	 * Executes the service to find all main categories.
	 *
	 * @param {Criteria} criteria - The criteria to apply for searching.
	 * @returns {Promise<ResponseService<MainCategoryDto>>} A promise that resolves to the search results.
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
