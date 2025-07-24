import { LocationMonitoringDoesNotExistError } from '../domain/error/LocationMonitoringDoesNotExistError'
import { MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'
import { type LocationMonitoringDto } from '../domain/entity/LocationMonitoring.dto'

export class LocationMonitoringFinder {
	private readonly locationMonitoringRepository: LocationMonitoringRepository
	constructor({ locationMonitoringRepository }: { locationMonitoringRepository: LocationMonitoringRepository }) {
		this.locationMonitoringRepository = locationMonitoringRepository
	}

	async run(params: { id: string }): Promise<LocationMonitoringDto> {
		const { id } = params
		const locationMonitoringId = new MonitoringId(id)
		const locationMonitoring = await this.locationMonitoringRepository.searchById(locationMonitoringId.value)

		if (!locationMonitoring) {
			throw new LocationMonitoringDoesNotExistError(locationMonitoringId.value)
		}

		return locationMonitoring
	}
}
