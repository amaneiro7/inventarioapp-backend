import { SiteId } from '../domain/SiteId'
import { SiteDoesNotExistError } from '../domain/SiteDoesNotExistError'
import { type SitePrimitives } from '../domain/Site.dto'
import { type SiteRepository } from '../domain/SiteRepository'

/**
 * Service to find a Site by its ID.
 */
export class SiteFinder {
	private readonly siteRepository: SiteRepository
	constructor({ siteRepository }: { siteRepository: SiteRepository }) {
		this.siteRepository = siteRepository
	}

	/**
	 * Runs the service to retrieve a site by its ID.
	 * @param {{ id: string }} params - The parameters containing the site ID.
	 * @returns {Promise<SitePrimitives>} A promise that resolves to the SitePrimitives DTO if found.
	 * @throws {SiteDoesNotExistError} If the site with the given ID does not exist.
	 */
	async run(params: { id: string }): Promise<SitePrimitives> {
		const { id } = params
		const siteId = new SiteId(id)
		const site = await this.siteRepository.findById(siteId.value)

		if (!site) {
			throw new SiteDoesNotExistError(siteId.value)
		}

		return site
	}
}
