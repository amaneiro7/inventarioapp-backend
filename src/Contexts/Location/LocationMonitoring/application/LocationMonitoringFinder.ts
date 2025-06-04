import { LocationMonitoringDoesNotExistError } from '../domain/error/LocationMonitoringDoesNotExistError'
import { LocationMonitoringId } from '../domain/valueObject/LocationMonitoringId'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'
import { type LocationMonitoringDto } from '../domain/entity/LocationMonitoring.dto'

export class LocationMonitoringFinder {
	constructor(private readonly locationMonitoringRepository: LocationMonitoringRepository) {}

	async run(params: { id: string }): Promise<LocationMonitoringDto> {
		const { id } = params
		const locationMonitoringId = new LocationMonitoringId(id)
		const locationMonitoring = await this.locationMonitoringRepository.searchById(locationMonitoringId.value)

		if (!locationMonitoring) {
			throw new LocationMonitoringDoesNotExistError(locationMonitoringId.value)
		}

		return locationMonitoring
	}
}
