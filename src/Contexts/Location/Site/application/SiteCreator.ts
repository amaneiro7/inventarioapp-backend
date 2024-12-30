
import { Site, type SitePrimitives } from '../domain/Site'
import { type SiteRepository } from '../domain/SiteRepository'


export class SiteCreator {
  constructor(private readonly repository: SiteRepository) { }

  async run(params: Omit<SitePrimitives, 'id'>): Promise<void> {

    const site = Site.create(params)

    await this.repository.save(site.toPrimitive())
  }

}
