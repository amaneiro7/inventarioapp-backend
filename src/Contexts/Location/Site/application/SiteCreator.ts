import { Site } from '../domain/Site'
import { type SitePrimitives } from '../domain/Site.dto'
import { type SiteRepository } from '../domain/SiteRepository'

/**
 * Service to create a new Site.
 */
export class SiteCreator {
	private readonly siteRepository: SiteRepository
	constructor({ siteRepository }: { siteRepository: SiteRepository }) {
		this.siteRepository = siteRepository
	}

	/**
	 * Runs the service to create a new site.
	 * @param {Omit<SitePrimitives, 'id'>} params - The parameters for creating the site, excluding the ID.
	 * @returns {Promise<void>} A promise that resolves when the site is successfully created.
	 */
	async run(params: Omit<SitePrimitives, 'id'>): Promise<void> {
		const site = Site.create(params)

		await this.siteRepository.save(site.toPrimitive())
	}
}
