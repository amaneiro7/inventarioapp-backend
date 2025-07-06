import { MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { DeviceMonitoringDoesNotExistError } from '../domain/error/DeviceMonitoringDoesNotExistError'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'
import { type DeviceMonitoringDto } from '../domain/entity/DeviceMonitoring.dto'

export class DeviceMonitoringFinder {
	constructor(private readonly deviceMonitoringRepository: DeviceMonitoringRepository) {}

	async run(params: { id: string }): Promise<DeviceMonitoringDto> {
		const { id } = params
		const deviceMonitoringId = new MonitoringId(id)
		const deviceMonitoring = await this.deviceMonitoringRepository.searchById(deviceMonitoringId.value)

		if (!deviceMonitoring) {
			throw new DeviceMonitoringDoesNotExistError(deviceMonitoringId.value)
		}

		return deviceMonitoring
	}
}
