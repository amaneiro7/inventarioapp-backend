import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StatusDoesNotExistError } from '../../Status/domain/StatusDoesNotExistError'
import { StatusId } from '../../Status/domain/StatusId'
import { type StatusRepository } from '../../Status/domain/StatusRepository'
import { type Device } from './Device'

/**
 * @class DeviceStatus
 * @extends StatusId
 * @description Represents the Value Object for a Device's status.
 * It encapsulates business logic related to status validation and updates.
 */
export class DeviceStatus extends StatusId {
	/**
	 * @static
	 * @method updateStatusField
	 * @description Handles the logic for updating a device's status.
	 * @param {{ repository: StatusRepository; status?: Primitives<StatusId>; entity: Device }} params The parameters for updating.
	 * @returns {Promise<void>}
	 */
	static async updateStatusField({
		repository,
		status,
		entity
	}: {
		repository: StatusRepository
		status?: Primitives<StatusId>
		entity: Device
	}): Promise<void> {
		if (status === undefined || entity.statusValue === status) {
			return
		}
		await DeviceStatus.ensureStatusExit({ repository, status })
		entity.updateStatus(status)
	}

	/**
	 * @static
	 * @method ensureStatusExit
	 * @description Checks if a status exists in the repository.
	 * @param {{ repository: StatusRepository; status: Primitives<StatusId> }} params The parameters for the check.
	 * @throws {StatusDoesNotExistError} If the status does not exist.
	 */
	static async ensureStatusExit({
		repository,
		status
	}: {
		repository: StatusRepository
		status: Primitives<StatusId>
	}): Promise<void> {
		const existingStatus = await repository.searchById(new StatusId(status).value)
		if (!existingStatus) {
			throw new StatusDoesNotExistError(status)
		}
	}
}
