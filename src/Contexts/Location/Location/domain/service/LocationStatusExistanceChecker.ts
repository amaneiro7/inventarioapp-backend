import { LocationStatusDoesNotExistError } from '../../../LocationStatus/domain/errors/LocationStatusDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationStatusRepository } from '../../../LocationStatus/domain/repository/LocationStatusRepository'
import { type LocationStatusId } from '../../../LocationStatus/domain/valueObject/LocationStatusId'

export class LocationStatusExistenceChecker {
	constructor(private readonly repository: LocationStatusRepository) {}

	/**
	 * Ensures that a locationStatus exists in the repository.
	 * @param {Primitives<LocationStatusId>} locationStatusId - The locationStatus ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the locationStatus exists.
	 * @throws {LocationStatusDoesNotExistError} If the locationStatus does not exist.
	 */
	async ensureExist(locationStatusId: Primitives<LocationStatusId>): Promise<void> {
		const isLocationStatusExist = await this.repository.findById(locationStatusId)
		if (!isLocationStatusExist) {
			throw new LocationStatusDoesNotExistError(locationStatusId)
		}
	}
}
