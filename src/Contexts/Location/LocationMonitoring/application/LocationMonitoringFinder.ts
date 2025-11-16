import { LocationMonitoringDoesNotExistError } from '../domain/error/LocationMonitoringDoesNotExistError'
import { MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'
import { type LocationMonitoringDto } from '../domain/entity/LocationMonitoring.dto'

/**
 * Service to find a LocationMonitoring entry by its ID.
 */
export class LocationMonitoringFinder {
	private readonly locationMonitoringRepository: LocationMonitoringRepository
	constructor({ locationMonitoringRepository }: { locationMonitoringRepository: LocationMonitoringRepository }) {
		this.locationMonitoringRepository = locationMonitoringRepository
	}

	/**
	 * Runs the service to retrieve a location monitoring entry by its ID.
	 * @param {{ id: string }} params - The parameters containing the monitoring ID.
	 * @returns {Promise<LocationMonitoringDto>} A promise that resolves to the LocationMonitoring DTO if found.
	 * @throws {LocationMonitoringDoesNotExistError} If the location monitoring entry with the given ID does not exist.
	 */
	async run(params: { id: string }): Promise<LocationMonitoringDto> {
		const { id } = params
		const locationMonitoringId = new MonitoringId(id)
		const locationMonitoring = await this.locationMonitoringRepository.findById(locationMonitoringId.value)

		if (!locationMonitoring) {
			throw new LocationMonitoringDoesNotExistError(locationMonitoringId.value)
		}

		return locationMonitoring
	}
}
