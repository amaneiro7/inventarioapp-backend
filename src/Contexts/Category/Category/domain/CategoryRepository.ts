import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type CategoryDto } from './Category.dto'
import { type CategoryId } from './CategoryId'
import { type CategoryName } from './CategoryName'

/**
 * Abstract repository for accessing category data.
 *
 * @export
 * @abstract
 * @class CategoryRepository
 */
export abstract class CategoryRepository {
	/**
	 * Searches for all categories matching the given criteria.
	 *
	 * @abstract
	 * @param {Criteria} criteria - The criteria to apply.
	 * @returns {Promise<ResponseDB<CategoryDto>>} A promise that resolves to the search results.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<CategoryDto>>

	/**
	 * Searches for a category by its ID.
	 *
	 * @abstract
	 * @param {CategoryId['value']} id - The ID of the category.
	 * @returns {Promise<CategoryDto | null>} A promise that resolves to the category or null if not found.
	 */
	abstract searchById(id: CategoryId['value']): Promise<CategoryDto | null>

	/**
	 * Searches for a category by its name.
	 *
	 * @abstract
	 * @param {CategoryName['value']} name - The name of the category.
	 * @returns {Promise<CategoryDto | null>} A promise that resolves to the category or null if not found.
	 */
	abstract searchByName(name: CategoryName['value']): Promise<CategoryDto | null>
}
