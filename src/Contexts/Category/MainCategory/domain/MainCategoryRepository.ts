import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from './MainCategory.dto'
import { type MainCategoryId } from './MainCategoryId'

/**
 * Abstract repository for accessing main category data.
 *
 * @export
 * @abstract
 * @class MainCategoryRepository
 */
export abstract class MainCategoryRepository {
	/**
	 * Searches for all main categories matching the given criteria.
	 *
	 * @abstract
	 * @param {Criteria} criteria - The criteria to apply.
	 * @returns {Promise<ResponseDB<MainCategoryDto>>} A promise that resolves to the search results.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<MainCategoryDto>>

	/**
	 * Searches for a main category by its ID.
	 *
	 * @abstract
	 * @param {MainCategoryId['value']} id - The ID of the main category.
	 * @returns {Promise<Nullable<MainCategoryDto>>} A promise that resolves to the main category or null if not found.
	 */
	abstract searchById(id: MainCategoryId['value']): Promise<Nullable<MainCategoryDto>>
}
