import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../Shared/domain/Nullable'
import { type BrandDto, type BrandPrimitives } from './Brand.dto'
import { type GenericRepository } from '../../Shared/domain/GenericRepository'
import { type ResponseDB } from '../../Shared/domain/ResponseType'

/**
 * @abstract
 * @class BrandRepository
 * @implements {GenericRepository<BrandDto>}
 * @description Defines the contract for data persistence operations related to the Brand entity.
 * This abstraction allows for different storage implementations (e.g., SQL, NoSQL)
 * while maintaining a consistent interface for the application layer.
 */
export abstract class BrandRepository implements GenericRepository<BrandDto> {
	/**
	 * @abstract
	 * @method save
	 * @description Creates a new brand or updates an existing one in the data store.
	 * @param {BrandPrimitives} payload The data of the brand to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	abstract save(payload: BrandPrimitives): Promise<void>

	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of brands based on a set of criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<BrandDto>>} A promise that resolves to a paginated response containing brand DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<BrandDto>>

	/**
	 * @abstract
	 * @method searchById
	 * @description Finds a single brand by its unique identifier.
	 * @param {BrandDto['id']} id The ID of the brand to search for.
	 * @returns {Promise<Nullable<BrandDto>>} A promise that resolves to the brand DTO if found, or null otherwise.
	 */
	abstract searchById(id: BrandDto['id']): Promise<Nullable<BrandDto>>

	/**
	 * @abstract
	 * @method searchByName
	 * @description Finds a single brand by its name.
	 * @param {BrandDto['name']} name The name of the brand to search for.
	 * @returns {Promise<Nullable<BrandDto>>} A promise that resolves to the brand DTO if found, or null otherwise.
	 */
	abstract searchByName(name: BrandDto['name']): Promise<Nullable<BrandDto>>

	/**
	 * @abstract
	 * @method remove
	 * @description Deletes a brand from the data store by its unique identifier.
	 * @param {BrandDto['id']} id The ID of the brand to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	abstract remove(id: BrandDto['id']): Promise<void>
}
