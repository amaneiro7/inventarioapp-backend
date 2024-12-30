import { type SitePrimitives } from '../domain/Site'
import { type SiteRepository } from '../domain/SiteRepository'

export class SiteFinderAll {
  constructor(private readonly repository: SiteRepository) { }

  async run(): Promise<SitePrimitives[]> {
    return await this.repository.searchAll()
  }
}
