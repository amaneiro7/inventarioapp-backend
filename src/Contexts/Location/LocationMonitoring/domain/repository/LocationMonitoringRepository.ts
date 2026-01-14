import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type MonitoringId } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoringDto, type LocationMonitoringPrimitives } from '../entity/LocationMonitoring.dto'

/**
 * Abstract class defining the contract for LocationMonitoring data access.
 * Implementations will provide methods for searching and saving location monitoring entries.
 */
export abstract class LocationMonitoringRepository {
	/**
	 * Searches for all location monitoring entries based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<LocationMonitoringDto>>} A promise that resolves to a paginated response of location monitoring DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<LocationMonitoringDto>>

	/**
	 * Searches for a single location monitoring entry by its unique identifier.
	 * @param {LocationMonitoringDto['id']} id - The ID of the location monitoring entry to search for.
	 * @returns {Promise<LocationMonitoringDto | null>} A promise that resolves to the LocationMonitoring DTO if found, or null otherwise.
	 */
	abstract findById(id: LocationMonitoringDto['id']): Promise<LocationMonitoringDto | null>

	/**
	 * Searches for a single location monitoring entry by its location identifier.
	 * @param {string} locationId - The ID of the location.
	 * @returns {Promise<LocationMonitoringDto | null>} A promise that resolves to the LocationMonitoring DTO if found.
	 */
	abstract findByLocationId(locationId: string): Promise<LocationMonitoringDto | null>

	/**
	 * Searches for location monitoring entries that have a non-null IP address.
	 * @param {{ page?: number; pageSize?: number }} params - Parameters for pagination.
	 * @param {number} [params.page] - Optional page number for pagination.
	 * @param {number} [params.pageSize] - Optional page size for pagination.
	 * @returns {Promise<LocationMonitoringDto[]>} A promise that resolves to an array of location monitoring DTOs.
	 */
	abstract searchNotNullIpAddress({
		page,
		pageSize
	}: {
		page?: number
		pageSize?: number
	}): Promise<LocationMonitoringDto[]>

	/**
	 * Saves a location monitoring entry.
	 * @param {LocationMonitoringPrimitives} payload - The location monitoring data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	abstract save(payload: LocationMonitoringPrimitives): Promise<void>

	/**
	 * Saves an array of location monitoring entries.
	 * @param {LocationMonitoringPrimitives[]} payload - The array of location monitoring data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	abstract saveAll(payload: LocationMonitoringPrimitives[]): Promise<void>

	/**
	 * Invalidates the cache for a specific location monitoring entry.
	 * @param {string} [id] - The ID of the location monitoring entry.
	 */
	abstract invalidate(params?: Primitives<MonitoringId> | Record<string, string>): Promise<void>
}
