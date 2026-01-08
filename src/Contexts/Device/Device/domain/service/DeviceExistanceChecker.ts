import { DeviceDoesNotExistError } from '../../../Device/domain/errors/DeviceDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceRepository } from '../../../Device/domain/repository/DeviceRepository'
import { type DeviceId } from '../../../Device/domain/valueObject/DeviceId'

export class DeviceExistenceChecker {
	constructor(private readonly repository: DeviceRepository) {}

	/**
	 * Ensures that a Device exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<DeviceId>} deviceId - The Device ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the Device exists.
	 * @throws {DeviceDoesNotExistError} If the Device does not exist.
	 */
	async ensureExist(deviceId: Primitives<DeviceId> | null | undefined): Promise<void> {
		if (deviceId === null || deviceId === undefined) {
			return
		}

		const isDeviceExist = await this.repository.findById(deviceId)
		if (!isDeviceExist) {
			throw new DeviceDoesNotExistError(deviceId)
		}
	}
}
