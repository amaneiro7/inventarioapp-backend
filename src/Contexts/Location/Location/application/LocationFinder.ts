import { LocationDoesNotExistError } from '../domain/LocationDoesNotExistError'
import { LocationId } from '../domain/LocationId'
import { type LocationRepository } from '../domain/LocationRepository'
import { type LocationDto } from '../domain/Location.dto'

export class LocationFinder {
	private readonly locationRepository: LocationRepository
	constructor({ locationRepository }: { locationRepository: LocationRepository }) {
		this.locationRepository = locationRepository
	}

	async run(params: { id: string }): Promise<LocationDto> {
		const { id } = params
		const locationId = new LocationId(id).value
		const location = await this.locationRepository.searchById(locationId)

		if (!location) {
			throw new LocationDoesNotExistError(locationId)
		}

		return location
	}
}
