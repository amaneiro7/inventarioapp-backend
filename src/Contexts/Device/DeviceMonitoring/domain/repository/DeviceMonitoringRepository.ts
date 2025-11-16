import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DeviceMonitoringDto, type DeviceMonitoringPrimitives } from '../entity/DeviceMonitoring.dto'

/**
 * @abstract
 * @class DeviceMonitoringRepository
 * @description Defines the contract for data persistence operations related to the DeviceMonitoring entity.
 */
export abstract class DeviceMonitoringRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of device monitoring records based on a set of criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<DeviceMonitoringDto>>} A promise that resolves to a paginated response.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<DeviceMonitoringDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single device monitoring record by its unique identifier.
	 * @param {DeviceMonitoringDto['id']} id The ID of the record to search for.
	 * @returns {Promise<DeviceMonitoringDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: DeviceMonitoringDto['id']): Promise<DeviceMonitoringDto | null>

	/**
	 * @abstract
	 * @method searchNotNullIpAddress
	 * @description Finds device monitoring records that have a non-null IP address.
	 * @param {{ page?: number; pageSize?: number }} params The pagination parameters.
	 * @returns {Promise<DeviceMonitoringDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract searchNotNullIpAddress(params: { page?: number; pageSize?: number }): Promise<DeviceMonitoringDto[]>

	/**
	 * @abstract
	 * @method save
	 * @description Creates or updates a device monitoring record in the data store.
	 * @param {DeviceMonitoringPrimitives} payload The data of the record to be saved.
	 * @returns {Promise<void>}
	 */
	abstract save(payload: DeviceMonitoringPrimitives): Promise<void>
}
