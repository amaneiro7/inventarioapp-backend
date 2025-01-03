
import { Site, type SitePrimitives } from '../domain/Site'
import { type SiteRepository } from '../domain/SiteRepository'


export class SiteCreator {
  constructor(private readonly siteRepository: SiteRepository) { }

  async run(params: Omit<SitePrimitives, 'id'>): Promise<void> {

    const site = Site.create(params)

    await this.siteRepository.save(site.toPrimitive())
  }

}
