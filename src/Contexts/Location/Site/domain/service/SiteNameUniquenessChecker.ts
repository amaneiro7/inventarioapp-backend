import { SiteAlreadyExistError } from '../errors/SiteAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SiteRepository } from '../repository/SiteRepository'
import { type SiteId } from '../valueObject/SiteId'

/**
 * Domain service responsible for verifying that a site name is unique within the system.
 */
export class SiteNameUniquenessChecker {
	/**
	 * Creates an instance of SiteNameUniquenessChecker.
	 * @param {SiteRepository} repository - The repository used to check for existing cities.
	 */
	constructor(private readonly repository: SiteRepository) {}

	/**
	 * Ensures that the provided site name is unique.
	 * If an ID is provided in excludeId, it ignores that site (useful for updates).
	 *
	 * @param {string} name - The site name to check.
	 * @param {Primitives<SiteId>} [excludeId] - The ID of the site to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {SiteAlreadyExistError} If a site with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<SiteId>): Promise<void> {
		const existingSite = await this.repository.findByName(name)
		if (existingSite && existingSite.id !== excludeId) {
			throw new SiteAlreadyExistError(name)
		}
	}
}
