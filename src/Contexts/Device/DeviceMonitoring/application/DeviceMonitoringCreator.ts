import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../Device/domain/DeviceId'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'

export class DeviceMonitoringCreator {
	private readonly deviceMonitoringRepository: DeviceMonitoringRepository
	constructor({ deviceMonitoringRepository }: { deviceMonitoringRepository: DeviceMonitoringRepository }) {
		this.deviceMonitoringRepository = deviceMonitoringRepository
	}

	async run({ deviceId }: { deviceId: Primitives<DeviceId> }): Promise<void> {
		const deviceMonitoring = DeviceMonitoring.create({
			deviceId,
			lastFailed: null,
			lastScan: null,
			lastSuccess: null,
			status: MonitoringStatuses.NOTAVAILABLE
		}).toPrimitive()

		await this.deviceMonitoringRepository.save(deviceMonitoring)
	}
}
