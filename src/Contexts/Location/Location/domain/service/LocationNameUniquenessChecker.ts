import { LocationNameAlreadyExistError } from '../errors/LocationNameAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationRepository } from '../repository/LocationRepository'
import { type LocationId } from '../valueObject/LocationId'

/**
 * Domain service responsible for verifying that a location name is unique within the system.
 */
export class LocationNameUniquenessChecker {
	/**
	 * Creates an instance of LocationNameUniquenessChecker.
	 * @param {LocationRepository} repository - The repository used to check for existing cities.
	 */
	constructor(private readonly repository: LocationRepository) {}

	/**
	 * Ensures that the provided location name is unique.
	 * If an ID is provided in excludeId, it ignores that location (useful for updates).
	 *
	 * @param {string} name - The location name to check.
	 * @param {Primitives<LocationId>} [excludeId] - The ID of the location to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {LocationNameAlreadyExistError} If a location with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<LocationId>): Promise<void> {
		const existingLocation = await this.repository.findByName(name)
		if (existingLocation && existingLocation.id !== excludeId) {
			throw new LocationNameAlreadyExistError(name)
		}
	}
}
