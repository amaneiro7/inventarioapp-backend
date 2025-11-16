import { DeviceDoesNotExistError } from '../domain/DeviceDoesNotExistError'
import { DeviceId } from '../domain/DeviceId'
import { type DeviceRepository } from '../domain/DeviceRepository'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type DeviceDto } from '../domain/Device.dto'

/**
 * @description Use case for finding a Device entity by its unique identifier.
 */
export class DeviceFinder {
	private readonly deviceRepository: DeviceRepository

	constructor({ deviceRepository }: { deviceRepository: DeviceRepository }) {
		this.deviceRepository = deviceRepository
	}

	/**
	 * @description Executes the device finding process.
	 * @param {{ id: string }} params The parameters for finding the device.
	 * @param {string} params.id The unique identifier of the device to find.
	 * @returns {Promise<Nullable<DeviceDto>>} A promise that resolves to the found Device DTO or null if not found.
	 * @throws {DeviceDoesNotExistError} If no device with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<Nullable<DeviceDto>> {
		const deviceId = new DeviceId(id).value
		const device = await this.deviceRepository.findById(deviceId)

		if (!device) {
			throw new DeviceDoesNotExistError(id)
		}

		return device
	}
}
