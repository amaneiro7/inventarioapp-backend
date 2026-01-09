import { LocationDoesNotExistError } from '../../../Location/domain/errors/LocationDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationRepository } from '../../../Location/domain/repository/LocationRepository'
import { type LocationId } from '../../../Location/domain/valueObject/LocationId'
import { type LocationDto } from '../entity/Location.dto'

export class LocationExistenceChecker {
	constructor(private readonly repository: LocationRepository) {}

	/**
	 * Ensures that a location exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<LocationId>} locationId - The location ID to check for existence.
	 * @returns {Promise<LocationDto | undefined>} A promise that resolves if the location exists.
	 * @throws {LocationDoesNotExistError} If the location does not exist.
	 */
	async ensureExist(locationId: Primitives<LocationId> | null | undefined): Promise<LocationDto | undefined> {
		if (locationId === null || locationId === undefined) {
			return
		}

		const isLocationExist = await this.repository.findById(locationId)
		if (!isLocationExist) {
			throw new LocationDoesNotExistError(locationId)
		}

		return isLocationExist
	}
}
