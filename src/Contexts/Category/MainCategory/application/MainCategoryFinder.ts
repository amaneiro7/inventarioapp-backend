import { MainCategoryDoesNotExistError } from '../domain/MainCategoryDoesNotExistError'
import { MainCategoryId } from '../domain/MainCategoryId'
import { type MainCategoryPrimitives } from '../domain/MainCategory'
import { type MainCategoryRepository } from '../domain/MainCategoryRepository'

export class MainCategoriesFinder {
	constructor(
		private readonly mainCategoryRepository: MainCategoryRepository
	) {}

	async run(params: { id: string }): Promise<MainCategoryPrimitives> {
		const { id } = params
		const categoryId = new MainCategoryId(id)
		const category = await this.mainCategoryRepository.searchById(
			categoryId.value
		)

		if (category === null) {
			throw new MainCategoryDoesNotExistError(categoryId.value)
		}

		return category
	}
}
