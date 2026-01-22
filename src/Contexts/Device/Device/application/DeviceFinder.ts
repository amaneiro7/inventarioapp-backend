import { DeviceDoesNotExistError } from '../domain/errors/DeviceDoesNotExistError'
import { DeviceId } from '../domain/valueObject/DeviceId'
import { type DeviceRepository } from '../domain/repository/DeviceRepository'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type HistoryEnricher } from '../../../History/domain/service/HistoryEnricher'
import { type DeviceDto } from '../domain/dto/Device.dto'
import { type HistoryDto } from '../../../History/domain/entity/History.dto'

/**
 * @description Use case for finding a Device entity by its unique identifier.
 */
export class DeviceFinder {
	private readonly deviceRepository: DeviceRepository
	private readonly historyEnricher: HistoryEnricher

	constructor({
		deviceRepository,
		historyEnricher
	}: {
		deviceRepository: DeviceRepository
		historyEnricher: HistoryEnricher
	}) {
		this.deviceRepository = deviceRepository
		this.historyEnricher = historyEnricher
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

		let mappedHistory: HistoryDto[] = []
		if (device.history) {
			mappedHistory = await this.historyEnricher.execute(device.history)
		}

		return { ...device, history: mappedHistory }
	}
}
