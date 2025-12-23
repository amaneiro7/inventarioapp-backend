import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type AdministrativeRegionDto } from '../entity/AdministrativeRegion.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionId } from '../valueObject/AdministrativeRegionId'

/**
 * Abstract class defining the contract for Administrative Region data access.
 * Implementations will provide methods for searching and retrieving administrative regions.
 */
export abstract class AdministrativeRegionRepository {
	/**
	 * Searches for all administrative regions based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<AdministrativeRegionDto>>} A promise that resolves to a paginated response of administrative region DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<AdministrativeRegionDto>>

	/**
	 * Searches for a single administrative region by its unique identifier.
	 * @param {Primitives<AdministrativeRegionId>} id - The ID of the administrative region to search for.
	 * @returns {Promise<AdministrativeRegionDto | null>} A promise that resolves to the administrative region DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<AdministrativeRegionId>): Promise<AdministrativeRegionDto | null>
}
