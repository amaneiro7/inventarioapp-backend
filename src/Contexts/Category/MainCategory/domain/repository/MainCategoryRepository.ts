import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from '../entity/MainCategory.dto'
import { type MainCategoryId } from '../valueObject/MainCategoryId'

/**
 * @abstract
 * @class MainCategoryRepository
 * @description Defines the contract for data persistence operations related to the Main Category entity.
 * This abstraction allows for different storage implementations while maintaining a consistent interface.
 */
export abstract class MainCategoryRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of main categories based on a set of criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<MainCategoryDto>>} A promise that resolves to a paginated response of main category DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<MainCategoryDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single main category by its unique identifier.
	 * @param {MainCategoryId['value']} id The ID of the main category to search for.
	 * @returns {Promise<Nullable<MainCategoryDto>>} A promise that resolves to the main category DTO if found, or null otherwise.
	 */
	abstract findById(id: MainCategoryId['value']): Promise<Nullable<MainCategoryDto>>
}
