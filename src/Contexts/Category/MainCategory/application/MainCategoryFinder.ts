import { MainCategoryId } from '../domain/MainCategoryId'
import { MainCategoryDoesNotExistError } from '../domain/MainCategoryDoesNotExistError'
import { type MainCategoryDto } from '../domain/MainCategory.dto'
import { type MainCategoryRepository } from '../domain/MainCategoryRepository'

/**
 * Service to find a main category by its ID.
 *
 * @class MainCategoriesFinder
 */
export class MainCategoriesFinder {
	/**
	 * Creates an instance of MainCategoriesFinder.
	 * @param {MainCategoryRepository} mainCategoryRepository - The repository for main categories.
	 */
	private readonly mainCategoryRepository: MainCategoryRepository
	constructor({ mainCategoryRepository }: { mainCategoryRepository: MainCategoryRepository }) {
		this.mainCategoryRepository = mainCategoryRepository
	}

	/**
	 * Executes the service to find a main category.
	 *
	 * @param {{ id: string }} params - The parameters for finding a main category, containing the ID.
	 * @returns {Promise<MainCategoryDto>} A promise that resolves to the found main category.
	 * @throws {MainCategoryDoesNotExistError} If the main category with the given ID does not exist.
	 */
	async run(params: { id: string }): Promise<MainCategoryDto> {
		const { id } = params
		const mainCategoryId = new MainCategoryId(id)
		const mainCategory = await this.mainCategoryRepository.searchById(mainCategoryId.value)

		if (!mainCategory) {
			throw new MainCategoryDoesNotExistError(mainCategoryId.value)
		}

		return mainCategory
	}
}
