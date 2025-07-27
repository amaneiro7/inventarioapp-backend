import { DeviceDoesNotExistError } from '../domain/DeviceDoesNotExistError'
import { DeviceId } from '../domain/DeviceId'
import { type DeviceRepository } from '../domain/DeviceRepository'

/**
 * @description Use case for removing a Device entity from the system.
 */
export class DeviceRemover {
	private readonly deviceRepository: DeviceRepository

	constructor({ deviceRepository }: { deviceRepository: DeviceRepository }) {
		this.deviceRepository = deviceRepository
	}

	/**
	 * @description Executes the device removal process.
	 * @param {{ id: string }} params The parameters for removing the device.
	 * @param {string} params.id The unique identifier of the device to remove.
	 * @returns {Promise<void>} A promise that resolves when the device is successfully removed.
	 * @throws {DeviceDoesNotExistError} If no device with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<void> {
		const deviceId = new DeviceId(id).value

		const device = await this.deviceRepository.searchById(deviceId)
		if (!device) {
			throw new DeviceDoesNotExistError(id)
		}

		await this.deviceRepository.remove(deviceId)
	}
}
