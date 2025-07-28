import { LocationDoesNotExistError } from '../domain/LocationDoesNotExistError'
import { LocationId } from '../domain/LocationId'
import { type LocationRepository } from '../domain/LocationRepository'
import { type LocationDto } from '../domain/Location.dto'

/**
 * Service to find a Location by its ID.
 */
export class LocationFinder {
	private readonly locationRepository: LocationRepository
	constructor({ locationRepository }: { locationRepository: LocationRepository }) {
		this.locationRepository = locationRepository
	}

	/**
	 * Runs the service to retrieve a location by its ID.
	 * @param {{ id: string }} params - The parameters containing the location ID.
	 * @returns {Promise<LocationDto>} A promise that resolves to the Location DTO if found.
	 * @throws {LocationDoesNotExistError} If the location with the given ID does not exist.
	 */
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
