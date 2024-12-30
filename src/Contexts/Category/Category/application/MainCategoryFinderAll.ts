import { type MainCategoryPrimitives } from '../domain/MainCategory'
import { type MainCategoryRepository } from '../domain/MainCategoryRepository'

export class MainCategoriesFinderAll {
  constructor(private readonly repository: MainCategoryRepository) { }

  async run(): Promise<MainCategoryPrimitives[]> {
    return await this.repository.searchAll()
  }
}
