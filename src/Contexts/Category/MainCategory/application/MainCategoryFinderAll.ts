import { type MainCategoryPrimitives } from '../domain/MainCategory'
import { type MainCategoryRepository } from '../domain/MainCategoryRepository'

export class MainCategoriesFinderAll {
	constructor(
		private readonly mainCategoryRepository: MainCategoryRepository
	) {}

	async run(): Promise<MainCategoryPrimitives[]> {
		return await this.mainCategoryRepository.searchAll()
	}
}
