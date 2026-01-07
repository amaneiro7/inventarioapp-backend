import { CategoryDoesNotExistError } from '../errors/CategoryDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CategoryRepository } from '../repository/CategoryRepository'
import { type CategoryId } from '../valueObject/CategoryId'

export class CategoryExistenceChecker {
	constructor(private readonly repository: CategoryRepository) {}

	/**
	 * Ensures that one or more Category exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<CategoryId> | null | undefined | (Primitives<CategoryId> | null | undefined)[]} categoryIds - The Category ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all provided non-null Category exist.
	 * @throws {CategoryDoesNotExistError} If any of the Category do not exist.
	 */
	async ensureExist(
		categoryIds: Primitives<CategoryId> | null | undefined | (Primitives<CategoryId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(categoryIds) ? categoryIds : [categoryIds]
		const uniqueCategoryIds = [
			...new Set(ids.filter(id => id !== null && id !== undefined))
		] as Primitives<CategoryId>[]
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
