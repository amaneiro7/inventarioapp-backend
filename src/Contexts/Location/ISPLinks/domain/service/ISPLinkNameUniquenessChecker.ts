import { ISPLinkAlreadyExistError } from '../errors/ISPLinkIsAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ISPLinkRepository } from '../repository/ISPLinkRepository'
import { type ISPLinkId } from '../valueObject/ISPLinkId'

/**
 * Domain service responsible for verifying that an ISPLink name is unique within the system.
 */
export class ISPLinkNameUniquenessChecker {
	/**
	 * Creates an instance of ISPLinkNameUniquenessChecker.
	 * @param {ISPLinkRepository} repository - The repository used to check for existing ISPLinks.
	 */
	constructor(private readonly repository: ISPLinkRepository) {}

	/**
	 * Ensures that the provided ISPLink name is unique.
	 * If an ID is provided in excludeId, it ignores that ISPLink (useful for updates).
	 *
	 * @param {string} name - The ISPLink name to check.
	 * @param {Primitives<ISPLinkId>} [excludeId] - The ID of the ISPLink to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {ISPLinkAlreadyExistError} If an ISPLink with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<ISPLinkId>): Promise<void> {
		const existingISPLink = await this.repository.findByName(name)
		if (existingISPLink && existingISPLink.id !== excludeId) {
			throw new ISPLinkAlreadyExistError(name)
		}
	}
}
