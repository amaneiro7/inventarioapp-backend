import { DeviceMonitoringStatuses } from '../domain/valueObject/DeviceMonitoringStatus'
import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../Device/domain/DeviceId'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'

export class DeviceMonitoringCreator {
	constructor(private readonly deviceMonitoringRepository: DeviceMonitoringRepository) {}

	async run({ deviceId }: { deviceId: Primitives<DeviceId> }): Promise<void> {
		const deviceMonitoring = DeviceMonitoring.create({
			deviceId,
			lastFailed: null,
			lastScan: null,
			lastSuccess: null,
			status: DeviceMonitoringStatuses.NOTAVAILABLE
		}).toPrimitive()

		await this.deviceMonitoringRepository.save(deviceMonitoring)
	}
}
