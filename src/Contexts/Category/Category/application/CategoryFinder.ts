import { CategoryDoesNotExistError } from '../domain/CategoryDoesNotExistError'
import { CategoryId } from '../domain/CategoryId'
import { type CategoryDto } from '../domain/Category.dto'
import { type CategoryRepository } from '../domain/CategoryRepository'

export class CategoriesFinder {
	constructor(private readonly categoryRepository: CategoryRepository) {}

	async run(params: { id: string }): Promise<CategoryDto> {
		const { id } = params
		const categoryId = new CategoryId(id)
		const category = await this.categoryRepository.searchById(categoryId.value)

		if (!category) {
			throw new CategoryDoesNotExistError(categoryId.toString())
		}

		return category
	}
}
