import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/MonitoringStatus'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../Location/domain/LocationId'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'

export class LocationMonitoringCreator {
	constructor(private readonly locationMonitoringRepository: LocationMonitoringRepository) {}

	async run({ locationId }: { locationId: Primitives<LocationId> }): Promise<void> {
		const deviceMonitoring = LocationMonitoring.create({
			locationId,
			lastFailed: null,
			lastScan: null,
			lastSuccess: null,
			status: MonitoringStatuses.NOTAVAILABLE
		}).toPrimitive()

		await this.locationMonitoringRepository.save(deviceMonitoring)
	}
}
