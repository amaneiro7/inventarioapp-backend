import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../Shared/domain/Nullable'
import { type BrandDto, type BrandParams } from './Brand.dto'
import { type GenericRepository } from '../../Shared/domain/GenericRepository'
import { type ResponseDB } from '../../Shared/domain/ResponseType'

/**
 * @abstract
 * @class BrandRepository
 * @implements {GenericRepository<BrandDto>}
 * @description Abstract class defining the contract for Brand data persistence operations.
 * This ensures that any concrete implementation of a Brand repository adheres to a standard set of methods,
 * promoting loose coupling and testability.
 */
export abstract class BrandRepository implements GenericRepository<BrandDto> {
	/**
	 * @abstract
	 * @method save
	 * @description Saves a Brand entity to the data store. This method should handle both creation and updates.
	 * @param {BrandParams} payload - The Brand data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	abstract save(payload: BrandParams): Promise<void>

	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of Brand entities based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<BrandDto>>} A promise that resolves to a paginated response containing Brand DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<BrandDto>>

	/**
	 * @abstract
	 * @method searchById
	 * @description Retrieves a single Brand entity by its unique identifier.
	 * @param {BrandDto['id']} id - The ID of the Brand to search for.
	 * @returns {Promise<Nullable<BrandDto>>} A promise that resolves to the Brand DTO if found, or null otherwise.
	 */
	abstract searchById(id: BrandDto['id']): Promise<Nullable<BrandDto>>

	/**
	 * @abstract
	 * @method searchByName
	 * @description Retrieves a single Brand entity by its name.
	 * @param {BrandDto['name']} name - The name of the Brand to search for.
	 * @returns {Promise<Nullable<BrandDto>>} A promise that resolves to the Brand DTO if found, or null otherwise.
	 */
	abstract searchByName(name: BrandDto['name']): Promise<Nullable<BrandDto>>

	/**
	 * @abstract
	 * @method remove
	 * @description Deletes a Brand entity from the data store by its unique identifier.
	 * @param {BrandDto['id']} id - The ID of the Brand to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	abstract remove(id: BrandDto['id']): Promise<void>
}
