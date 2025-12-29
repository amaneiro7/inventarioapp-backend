import { LocationDoesNotExistError } from '../../../Location/domain/errors/LocationDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationRepository } from '../../../Location/domain/repository/LocationRepository'
import { type LocationId } from '../../../Location/domain/valueObject/LocationId'

export class LocationExistenceChecker {
	constructor(private readonly repository: LocationRepository) {}

	/**
	 * Ensures that a location exists in the repository.
	 * @param {Primitives<LocationId>} locationId - The location ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the location exists.
	 * @throws {LocationDoesNotExistError} If the location does not exist.
	 */
	async ensureExist(locationId: Primitives<LocationId>): Promise<void> {
		const isLocationExist = await this.repository.findById(locationId)
		if (!isLocationExist) {
			throw new LocationDoesNotExistError(locationId)
		}
	}
}
