import { CategoryId } from '../domain/CategoryId'
import { CategoryDoesNotExistError } from '../domain/CategoryDoesNotExistError'
import { type CategoryDto } from '../domain/Category.dto'
import { type CategoryRepository } from '../domain/CategoryRepository'

export class CategoriesFinder {
	constructor(private readonly categoryRepository: CategoryRepository) {}

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
