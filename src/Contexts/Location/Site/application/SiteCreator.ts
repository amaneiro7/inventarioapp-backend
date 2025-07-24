import { Site } from '../domain/Site'
import { type SitePrimitives } from '../domain/Site.dto'
import { type SiteRepository } from '../domain/SiteRepository'

export class SiteCreator {
	private readonly siteRepository: SiteRepository
	constructor({ siteRepository }: { siteRepository: SiteRepository }) {
		this.siteRepository = siteRepository
	}

	async run(params: Omit<SitePrimitives, 'id'>): Promise<void> {
		const site = Site.create(params)

		await this.siteRepository.save(site.toPrimitive())
	}
}
