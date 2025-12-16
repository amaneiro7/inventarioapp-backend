import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type CategoryDto } from './Category.dto'
import { type CategoryId } from './CategoryId'
import { type CategoryName } from './CategoryName'

/**
 * @abstract
 * @class CategoryRepository
 * @description Defines the contract for data persistence operations related to the Category entity.
 * This abstraction allows for different storage implementations while maintaining a consistent interface.
 */
export abstract class CategoryRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of categories based on a set of criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CategoryDto>>} A promise that resolves to a paginated response of category DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<CategoryDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single category by its unique identifier.
	 * @param {CategoryId['value']} id The ID of the category to search for.
	 * @returns {Promise<CategoryDto | null>} A promise that resolves to the category DTO if found, or null otherwise.
	 */
	abstract findById(id: CategoryId['value']): Promise<CategoryDto | null>
	abstract findByIds: (ids: Array<CategoryId['value']>) => Promise<CategoryDto[]>

	/**
	 * @abstract
	 * @method findByName
	 * @description Finds a single category by its name.
	 * @param {CategoryName['value']} name The name of the category to search for.
	 * @returns {Promise<CategoryDto | null>} A promise that resolves to the category DTO if found, or null otherwise.
	 */
	abstract findByName(name: CategoryName['value']): Promise<CategoryDto | null>
}
