import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../Device/domain/valueObject/DeviceId'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'

/**
 * @description Use case for creating an initial DeviceMonitoring record for a new device.
 */
export class DeviceMonitoringCreator {
	private readonly deviceMonitoringRepository: DeviceMonitoringRepository

	constructor({ deviceMonitoringRepository }: { deviceMonitoringRepository: DeviceMonitoringRepository }) {
		this.deviceMonitoringRepository = deviceMonitoringRepository
	}

	/**
	 * @description Executes the creation of a new device monitoring record.
	 * @param {{ deviceId: Primitives<DeviceId> }} params The device ID for which to create the monitoring record.
	 * @returns {Promise<void>} A promise that resolves when the record is successfully created.
	 */
	async run({ deviceId }: { deviceId: Primitives<DeviceId> }): Promise<void> {
		const deviceMonitoring = DeviceMonitoring.create({
			deviceId,
			lastFailed: null,
			lastScan: null,
			lastSuccess: null,
			status: MonitoringStatuses.NOTAVAILABLE
		})

		await this.deviceMonitoringRepository.save(deviceMonitoring.toPrimitive())
	}
}
