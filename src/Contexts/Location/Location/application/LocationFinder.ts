import { LocationDoesNotExistError } from '../domain/errors/LocationDoesNotExistError'
import { LocationId } from '../domain/valueObject/LocationId'
import { type LocationRepository } from '../domain/repository/LocationRepository'
import { type LocationDto } from '../domain/entity/Location.dto'

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
		const location = await this.locationRepository.findById(locationId)

		if (!location) {
			throw new LocationDoesNotExistError(locationId)
		}

		return location
	}
}
