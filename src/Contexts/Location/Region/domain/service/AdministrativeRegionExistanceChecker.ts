import { AdministrativeRegionDoesNotExistError } from '../../../AdministrativeRegion/domain/errors/AdministrativeRegionDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionRepository } from '../../../AdministrativeRegion/domain/repository/AdministrativeRegionRepository'
import { type AdministrativeRegionId } from '../../../AdministrativeRegion/domain/valueObject/AdministrativeRegionId'

export class AdministrativeRegionExistenceChecker {
	constructor(private readonly repository: AdministrativeRegionRepository) {}

	/**
	 * Ensures that a state exists in the repository.
	 * @param {{ repository: AdministrativeRegionRepository; stateId: Primitives<AdministrativeRegionId> }} params - Parameters for the existence check.
	 * @param {AdministrativeRegionRepository} params.repository - The state repository to perform the search.
	 * @param {Primitives<AdministrativeRegionId>} params.stateId - The state ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the state exists, or rejects with InvalidArgumentError.
	 * @throws {InvalidArgumentError} If the state does not exist.
	 */
	async ensureExist(stateId: Primitives<AdministrativeRegionId>): Promise<void> {
		const isAdministrativeRegionExist = await this.repository.findById(stateId)
		if (!isAdministrativeRegionExist) {
			throw new AdministrativeRegionDoesNotExistError(stateId)
		}
	}
}
