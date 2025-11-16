import { MainCategoryId } from '../domain/MainCategoryId'
import { MainCategoryDoesNotExistError } from '../domain/MainCategoryDoesNotExistError'
import { type MainCategoryDto } from '../domain/MainCategory.dto'
import { type MainCategoryRepository } from '../domain/MainCategoryRepository'

/**
 * @description Use case for finding a Main Category entity by its unique identifier.
 */
export class MainCategoriesFinder {
	private readonly mainCategoryRepository: MainCategoryRepository

	constructor({ mainCategoryRepository }: { mainCategoryRepository: MainCategoryRepository }) {
		this.mainCategoryRepository = mainCategoryRepository
	}

	/**
	 * @description Executes the main category finding process.
	 * @param {{ id: string }} params The parameters for finding the main category.
	 * @param {string} params.id The unique identifier of the main category to find.
	 * @returns {Promise<MainCategoryDto>} A promise that resolves to the found Main Category DTO.
	 * @throws {MainCategoryDoesNotExistError} If no main category with the provided ID is found.
	 * @throws {InvalidArgumentError} If the provided ID is not valid.
	 */
	async run({ id }: { id: string }): Promise<MainCategoryDto> {
		const mainCategoryId = new MainCategoryId(id)
		const mainCategory = await this.mainCategoryRepository.findById(mainCategoryId.value)

		if (!mainCategory) {
			throw new MainCategoryDoesNotExistError(mainCategoryId.value)
		}

		return mainCategory
	}
}
