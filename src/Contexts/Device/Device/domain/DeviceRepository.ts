import { type ComputerName } from '../../../Features/Computer/domain/ComputerName'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DevicePrimitives, type DeviceDto } from './Device.dto'
import { type DeviceId } from './DeviceId'
import { type DeviceSerial } from './DeviceSerial'

/**
 * @abstract
 * @class DeviceRepository
 * @description Defines the contract for data persistence operations related to the Device entity.
 */
export abstract class DeviceRepository {
	/**
	 * @abstract
	 * @method save
	 * @description Creates or updates a device in the data store.
	 * @param {DevicePrimitives} payload The data of the device to be saved.
	 * @returns {Promise<void>}
	 */
	abstract save(payload: DevicePrimitives): Promise<void>

	/**
	 * @abstract
	 * @method searchById
	 * @description Finds a single device by its unique identifier.
	 * @param {Primitives<DeviceId>} deviceId The ID of the device to search for.
	 * @returns {Promise<DeviceDto | null>} A promise that resolves to the device DTO if found, or null otherwise.
	 */
	abstract searchById(deviceId: Primitives<DeviceId>): Promise<DeviceDto | null>

	/**
	 * @abstract
	 * @method searchByActivo
	 * @description Finds a single device by its asset number.
	 * @param {Primitives<DeviceSerial>} serial The asset number to search for.
	 * @returns {Promise<DeviceDto | null>} A promise that resolves to the device DTO if found, or null otherwise.
	 */
	abstract searchByActivo(serial: Primitives<DeviceSerial>): Promise<DeviceDto | null>

	/**
	 * @abstract
	 * @method searchBySerial
	 * @description Finds a single device by its serial number.
	 * @param {Primitives<DeviceSerial>} activo The serial number to search for.
	 * @returns {Promise<DeviceDto | null>} A promise that resolves to the device DTO if found, or null otherwise.
	 */
	abstract searchBySerial(activo: Primitives<DeviceSerial>): Promise<DeviceDto | null>

	/**
	 * @abstract
	 * @method searchByComputerName
	 * @description Finds a single device by its computer name.
	 * @param {Primitives<ComputerName>} name The computer name to search for.
	 * @returns {Promise<DeviceDto | null>} A promise that resolves to the device DTO if found, or null otherwise.
	 */
	abstract searchByComputerName(name: Primitives<ComputerName>): Promise<DeviceDto | null>

	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of devices based on a set of criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<DeviceDto>>} A promise that resolves to a paginated response of device DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<DeviceDto>>

	/**
	 * @abstract
	 * @method matching
	 * @description Retrieves a paginated list of devices that match a complex set of criteria, often involving multiple associations.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<DeviceDto>>} A promise that resolves to a paginated response of device DTOs.
	 */
	abstract matching(criteria: Criteria): Promise<ResponseDB<DeviceDto>>

	/**
	 * @abstract
	 * @method donwload
	 * @description Generates an Excel file (Buffer) containing device data based on provided criteria.
	 * @param {Criteria} criteria The criteria for filtering the data to be downloaded.
	 * @returns {Promise<Buffer>} A promise that resolves to an Excel file buffer.
	 */
	abstract donwload(criteria: Criteria): Promise<Buffer>

	/**
	 * @abstract
	 * @method remove
	 * @description Deletes a device from the data store by its unique identifier.
	 * @param {Primitives<DeviceId>} deviceId The ID of the device to remove.
	 * @returns {Promise<void>}
	 */
	abstract remove(deviceId: Primitives<DeviceId>): Promise<void>
}
