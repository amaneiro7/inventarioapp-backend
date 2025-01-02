import { type CategoryPrimitives } from '../domain/Category'
import { type CategoryRepository } from '../domain/CategoryRepository'

export class CategoriesFinderAll {
  constructor(private readonly categoryRepository: CategoryRepository) { }

  async run(): Promise<CategoryPrimitives[]> {
    return await this.categoryRepository.searchAll()
  }
}
