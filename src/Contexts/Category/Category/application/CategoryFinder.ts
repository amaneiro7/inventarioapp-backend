import { CategoryDoesNotExistError } from '../domain/CategoryDoesNotExistError'
import { CategoryId } from '../domain/CategoryId'
import { type CategoryPrimitives } from '../domain/Category'
import { type CategoryRepository } from '../domain/CategoryRepository'

export class CategoriesFinder {
  constructor(private readonly categoryRepository: CategoryRepository) { }

  async run(params: { id: string }): Promise<CategoryPrimitives> {
    const { id } = params
    const categoryId = new CategoryId(id)
    const category = await this.categoryRepository.searchById(categoryId.value)

    if (category === null) {
      throw new CategoryDoesNotExistError(categoryId.toString())
    }

    return category
  }
}
