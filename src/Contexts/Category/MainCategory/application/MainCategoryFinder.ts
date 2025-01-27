import { type MainCategoryDto } from '../domain/MainCategory.dto'
import { MainCategoryDoesNotExistError } from '../domain/MainCategoryDoesNotExistError'
import { MainCategoryId } from '../domain/MainCategoryId'
import { type MainCategoryRepository } from '../domain/MainCategoryRepository'

export class MainCategoriesFinder {
	constructor(
		private readonly mainCategoryRepository: MainCategoryRepository
	) {}

	async run(params: { id: string }): Promise<MainCategoryDto> {
		const { id } = params
		const mainCategoryId = new MainCategoryId(id)
		const mainCategory = await this.mainCategoryRepository.searchById(
			mainCategoryId.value
		)

		if (!mainCategory) {
			throw new MainCategoryDoesNotExistError(mainCategoryId.value)
		}

		return mainCategory
	}
}
