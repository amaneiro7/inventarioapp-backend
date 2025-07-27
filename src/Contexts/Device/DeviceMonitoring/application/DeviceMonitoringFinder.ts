import { MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { DeviceMonitoringDoesNotExistError } from '../domain/error/DeviceMonitoringDoesNotExistError'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'
import { type DeviceMonitoringDto } from '../domain/entity/DeviceMonitoring.dto'

/**
 * @description Use case for finding a DeviceMonitoring entity by its unique identifier.
 */
export class DeviceMonitoringFinder {
	private readonly deviceMonitoringRepository: DeviceMonitoringRepository

	constructor({ deviceMonitoringRepository }: { deviceMonitoringRepository: DeviceMonitoringRepository }) {
		this.deviceMonitoringRepository = deviceMonitoringRepository
	}

	/**
	 * @description Executes the device monitoring finding process.
	 * @param {{ id: string }} params The parameters for finding the record.
	 * @returns {Promise<DeviceMonitoringDto>} A promise that resolves to the found DeviceMonitoring DTO.
	 * @throws {DeviceMonitoringDoesNotExistError} If no record with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<DeviceMonitoringDto> {
		const deviceMonitoringId = new MonitoringId(id)
		const deviceMonitoring = await this.deviceMonitoringRepository.searchById(deviceMonitoringId.value)

		if (!deviceMonitoring) {
			throw new DeviceMonitoringDoesNotExistError(deviceMonitoringId.value)
		}

		return deviceMonitoring
	}
}
