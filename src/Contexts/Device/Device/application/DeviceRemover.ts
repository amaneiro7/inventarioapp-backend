import { DeviceDoesNotExistError } from '../domain/errors/DeviceDoesNotExistError'
import { DeviceId } from '../domain/valueObject/DeviceId'
import { type DeviceRepository } from '../domain/repository/DeviceRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { Device } from '../domain/entity/Device'

/**
 * @description Use case for removing a Device entity from the system.
 */
export class DeviceRemover {
	private readonly deviceRepository: DeviceRepository
	private readonly eventBus: EventBus

	constructor({ deviceRepository, eventBus }: { deviceRepository: DeviceRepository; eventBus: EventBus }) {
		this.deviceRepository = deviceRepository
		this.eventBus = eventBus
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

		const device = await this.deviceRepository.findById(deviceId)
		if (!device) {
			throw new DeviceDoesNotExistError(id)
		}
		const deviceEntity = Device.fromPrimitives(device)
		deviceEntity.delete()

		await this.deviceRepository.remove(deviceEntity.idValue)
		await this.eventBus.publish(deviceEntity.pullDomainEvents())
	}
}
