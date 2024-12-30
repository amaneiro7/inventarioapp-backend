import { type CategoryPrimitives } from '../domain/Category'
import { type CategoryRepository } from '../domain/CategoryRepository'

export class CategoriesFinderAll {
  constructor(private readonly repository: CategoryRepository) { }

  async search(): Promise<CategoryPrimitives[]> {
    return await this.repository.searchAll()
  }
}
