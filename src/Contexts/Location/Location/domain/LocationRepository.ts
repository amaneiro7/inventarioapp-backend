import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationDto, type LocationPrimitives } from './Location.dto'
import { type LocationId } from './LocationId'
import { type LocationName } from './LocationName'

/**
 * Abstract class defining the contract for Location data access.
 * Implementations will provide methods for searching and saving locations.
 */
export abstract class LocationRepository {
	/**
	 * Searches for all locations based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<LocationDto>>} A promise that resolves to a paginated response of location DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<LocationDto>>

	/**
	 * Searches for locations matching specific criteria.
	 * This method might be used for more complex filtering logic.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<LocationDto>>} A promise that resolves to a paginated response of location DTOs.
	 */
	abstract matching(criteria: Criteria): Promise<ResponseDB<LocationDto>>

	/**
	 * Saves a new location or updates an existing one.
	 * @param {LocationPrimitives} payload - The location data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the operation is complete.
	 */
	abstract save(payload: LocationPrimitives): Promise<void>

	/**
	 * Searches for a single location by its unique identifier.
	 * @param {Primitives<LocationId>} id - The ID of the location to search for.
	 * @returns {Promise<LocationDto | null>} A promise that resolves to the location DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<LocationId>): Promise<LocationDto | null>

	/**
	 * Searches for a single location by its name.
	 * @param {Primitives<LocationName>} name - The name of the location to search for.
	 * @returns {Promise<LocationDto | null>} A promise that resolves to the location DTO if found, or null otherwise.
	 */
	abstract findByName(name: Primitives<LocationName>): Promise<LocationDto | null>
}
