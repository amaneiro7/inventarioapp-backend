import { CategoryId } from '../domain/valueObject/CategoryId'
import { CategoryDoesNotExistError } from '../domain/errors/CategoryDoesNotExistError'
import { type CategoryDto } from '../domain/entity/Category.dto'
import { type CategoryRepository } from '../domain/repository/CategoryRepository'

/**
 * @description Use case for finding a Category entity by its unique identifier.
 */
export class CategoriesFinder {
	private readonly categoryRepository: CategoryRepository

	constructor({ categoryRepository }: { categoryRepository: CategoryRepository }) {
		this.categoryRepository = categoryRepository
	}

	/**
	 * @description Executes the category finding process.
	 * @param {{ id: string }} params The parameters for finding the category.
	 * @param {string} params.id The unique identifier of the category to find.
	 * @returns {Promise<CategoryDto>} A promise that resolves to the found Category DTO.
	 * @throws {CategoryDoesNotExistError} If no category with the provided ID is found.
	 * @throws {InvalidArgumentError} If the provided ID is not valid.
	 */
	async run({ id }: { id: string }): Promise<CategoryDto> {
		const categoryId = new CategoryId(id)
		const category = await this.categoryRepository.findById(categoryId.value)

		if (!category) {
			throw new CategoryDoesNotExistError(categoryId.value)
		}

		return category
	}
}
