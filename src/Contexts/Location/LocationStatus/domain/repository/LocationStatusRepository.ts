import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationStatusDto } from '../entity/LocationStatus.dto'
import { type LocationStatusId } from '../valueObject/LocationStatusId'

/**
 * Abstract class defining the contract for Location Status data access.
 * Implementations will provide methods for searching and retrieving location statuses.
 */
export abstract class LocationStatusRepository {
	/**
	 * Searches for all location statuses based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<LocationStatusDto>>} A promise that resolves to a paginated response of location status DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<LocationStatusDto>>

	/**
	 * Searches for a single location status by its unique identifier.
	 * @param {Primitives<LocationStatusId>} id - The ID of the location status to search for.
	 * @returns {Promise<LocationStatusDto | null>} A promise that resolves to the location status DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<LocationStatusId>): Promise<LocationStatusDto | null>
}
