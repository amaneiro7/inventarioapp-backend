import { CityDoesNotExistError } from '../../../City/domain/errors/CityDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityRepository } from '../../../City/domain/repository/CityRepository'
import { type CityId } from '../../../City/domain/valueObject/CityId'

export class CityExistenceChecker {
	constructor(private readonly repository: CityRepository) {}

	/**
	 * Ensures that a city exists in the repository.
	 * @param {Primitives<CityId>} cityId - The city ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the city exists.
	 * @throws {CityDoesNotExistError} If the city does not exist.
	 */
	async ensureExist(cityId: Primitives<CityId>): Promise<void> {
		const isCityExist = await this.repository.findById(cityId)
		if (!isCityExist) {
			throw new CityDoesNotExistError(cityId)
		}
	}
}
