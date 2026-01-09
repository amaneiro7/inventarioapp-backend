import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../Location/domain/valueObject/LocationId'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to create a new LocationMonitoring entry.
 */
export class LocationMonitoringCreator {
	private readonly locationMonitoringRepository: LocationMonitoringRepository
	private readonly eventBus: EventBus
	constructor({
		locationMonitoringRepository,
		eventBus
	}: {
		locationMonitoringRepository: LocationMonitoringRepository
		eventBus: EventBus
	}) {
		this.locationMonitoringRepository = locationMonitoringRepository
		this.eventBus = eventBus
	}

	/**
	 * Runs the service to create a new location monitoring entry.
	 * Initializes the monitoring status to NOTAVAILABLE and saves the entry.
	 * @param {{ locationId: Primitives<LocationId> }} params - The parameters containing the location ID.
	 * @returns {Promise<void>} A promise that resolves when the location monitoring entry is successfully created.
	 */
	async run({ locationId }: { locationId: Primitives<LocationId> }): Promise<void> {
		const locationMonitoring = LocationMonitoring.create({
			locationId,
			lastFailed: null,
			lastScan: null,
			lastSuccess: null,
			status: MonitoringStatuses.NOTAVAILABLE
		})
		await this.locationMonitoringRepository.save(locationMonitoring.toPrimitives())
		await this.eventBus.publish(locationMonitoring.pullDomainEvents())
	}
}
