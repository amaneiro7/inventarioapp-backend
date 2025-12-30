import { CategoryDoesNotExistError } from '../errors/CategoryDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CategoryRepository } from '../repository/CategoryRepository'
import { type CategoryId } from '../valueObject/CategoryId'

export class CategoryExistenceChecker {
	constructor(private readonly repository: CategoryRepository) {}

	async ensureExist(categoryIds: Primitives<CategoryId>[]): Promise<void> {
		const uniqueCategoryIds = [...new Set(categoryIds)]
		if (uniqueCategoryIds.length === 0) {
			return
		}

		const foundCategories = await this.repository.findByIds(uniqueCategoryIds)
		if (foundCategories.length !== uniqueCategoryIds.length) {
			const foundIds = new Set(foundCategories.map(c => c.id))
			const missingIds = uniqueCategoryIds.filter(id => !foundIds.has(id))
			throw new CategoryDoesNotExistError(missingIds.join(', '))
		}
	}
}
