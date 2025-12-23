import { CityAlreadyExistError } from '../errors/CItyAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityRepository } from '../repository/CityRepository'
import { type CityId } from '../valueObject/CityId'

/**
 * Domain service responsible for verifying that a city name is unique within the system.
 */
export class CityNameUniquenessChecker {
	/**
	 * Creates an instance of CityNameUniquenessChecker.
	 * @param {CityRepository} repository - The repository used to check for existing cities.
	 */
	constructor(private readonly repository: CityRepository) {}

	/**
	 * Ensures that the provided city name is unique.
	 * If an ID is provided in excludeId, it ignores that city (useful for updates).
	 *
	 * @param {string} name - The city name to check.
	 * @param {Primitives<CityId>} [excludeId] - The ID of the city to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {CityAlreadyExistError} If a city with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<CityId>): Promise<void> {
		const existingCity = await this.repository.findByName(name)
		if (existingCity && existingCity.id !== excludeId) {
			throw new CityAlreadyExistError(name)
		}
	}
}
