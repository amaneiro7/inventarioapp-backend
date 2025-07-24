import { CategoryId } from '../domain/CategoryId'
import { CategoryDoesNotExistError } from '../domain/CategoryDoesNotExistError'
import { type CategoryDto } from '../domain/Category.dto'
import { type CategoryRepository } from '../domain/CategoryRepository'

/**
 * Service to find a category by its ID.
 *
 * @class CategoriesFinder
 */
export class CategoriesFinder {
	/**
	 * Creates an instance of CategoriesFinder.
	 * @param {CategoryRepository} categoryRepository - The repository for categories.
	 */
	private readonly categoryRepository: CategoryRepository
	constructor({ categoryRepository }: { categoryRepository: CategoryRepository }) {
		this.categoryRepository = categoryRepository
	}

	/**
	 * Executes the service to find a category.
	 *
	 * @param {{ id: string }} params - The parameters for finding a category, containing the ID.
	 * @returns {Promise<CategoryDto>} A promise that resolves to the found category.
	 * @throws {CategoryDoesNotExistError} If the category with the given ID does not exist.
	 */
	async run(params: { id: string }): Promise<CategoryDto> {
		const { id } = params
		const categoryId = new CategoryId(id).value
		const category = await this.categoryRepository.searchById(categoryId)

		if (!category) {
			throw new CategoryDoesNotExistError(categoryId)
		}

		return category
	}
}
