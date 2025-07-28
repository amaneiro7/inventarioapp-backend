import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../Location/domain/LocationId'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'

/**
 * Service to create a new LocationMonitoring entry.
 */
export class LocationMonitoringCreator {
	private readonly locationMonitoringRepository: LocationMonitoringRepository
	constructor({ locationMonitoringRepository }: { locationMonitoringRepository: LocationMonitoringRepository }) {
		this.locationMonitoringRepository = locationMonitoringRepository
	}

	/**
	 * Runs the service to create a new location monitoring entry.
	 * Initializes the monitoring status to NOTAVAILABLE and saves the entry.
	 * @param {{ locationId: Primitives<LocationId> }} params - The parameters containing the location ID.
	 * @returns {Promise<void>} A promise that resolves when the location monitoring entry is successfully created.
	 */
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
