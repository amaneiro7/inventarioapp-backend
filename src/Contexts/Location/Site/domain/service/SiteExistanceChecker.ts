import { SiteDoesNotExistError } from '../../../Site/domain/errors/SiteDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SiteRepository } from '../../../Site/domain/repository/SiteRepository'
import { type SiteId } from '../../../Site/domain/valueObject/SiteId'

export class SiteExistenceChecker {
	constructor(private readonly repository: SiteRepository) {}

	/**
	 * Ensures that a site exists in the repository.
	 * @param {Primitives<SiteId>} siteId - The site ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the site exists.
	 * @throws {SiteDoesNotExistError} If the site does not exist.
	 */
	async ensureExist(siteId: Primitives<SiteId>): Promise<void> {
		const isSiteExist = await this.repository.findById(siteId)
		if (!isSiteExist) {
			throw new SiteDoesNotExistError(siteId)
		}
	}
}
