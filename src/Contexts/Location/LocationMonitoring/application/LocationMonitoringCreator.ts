import { LocationMonitoringStatuses } from '../domain/valueObject/LocationMonitoringStatus'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../Location/domain/LocationId'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'

export class LocationMonitoringCreator {
	constructor(private readonly deviceMonitoringRepository: LocationMonitoringRepository) {}

	async run({ locationId }: { locationId: Primitives<LocationId> }): Promise<void> {
		const deviceMonitoring = LocationMonitoring.create({
			locationId,
			lastFailed: null,
			lastScan: null,
			lastSuccess: null,
			status: LocationMonitoringStatuses.NOTAVAILABLE
		}).toPrimitive()

		await this.deviceMonitoringRepository.save(deviceMonitoring)
	}
}
