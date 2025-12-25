import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type RegionParams, type RegionDto } from '../entity/Region.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionId } from '../valueObject/RegionId'

/**
 * Abstract class defining the contract for Region data access.
 * Implementations will provide methods for searching and saving regions.
 */
export abstract class RegionRepository {
	/**
	 * Searches for all regions based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<RegionDto>>} A promise that resolves to a paginated response of region DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<RegionDto>>

	/**
	 * Searches for a single region by its unique identifier.
	 * @param {Primitives<RegionId>} id - The ID of the region to search for.
	 * @returns {Promise<RegionDto | null>} A promise that resolves to the region DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<RegionId>): Promise<RegionDto | null>

	/**
	 * Saves a new region or updates an existing one.
	 * @param {RegionParams} payload - The region data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the operation is complete.
	 */
	abstract save(payload: RegionParams): Promise<void>
}
