import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { DeviceMonitoringParams } from '../domain/entity/DeviceMonitoring.dto'
import { DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'

export class DeviceMonitoringCreator {
	constructor(private readonly deviceMonitoringRepository: DeviceMonitoringRepository) {}

	async run(params: DeviceMonitoringParams): Promise<void> {
		await DeviceMonitoringName.ensureDeviceMonitoringNameDoesNotExist({
			name: params.name,
			repository: this.DeviceMonitoringRepository
		})

		const deviceMonitoring = DeviceMonitoring.create(params).toPrimitive()

		await this.deviceMonitoringRepository.save(deviceMonitoring)
	}
}
