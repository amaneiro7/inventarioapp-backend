
import { SiteId } from '../domain/SiteId'
import { SiteDoesNotExistError } from '../domain/SiteDoesNotExistError'
import { type SitePrimitives } from '../domain/Site'
import { type SiteRepository } from '../domain/SiteRepository'


export class SiteFinder {
  constructor(private readonly siteRepository: SiteRepository) { }

  async run(params: { id: string }): Promise<SitePrimitives> {
    const { id } = params
    const siteId = new SiteId(id)
    const site = await this.siteRepository.searchById(siteId.value)

    if (!site) {
      throw new SiteDoesNotExistError(siteId.value)
    }

    return site
  }
}
