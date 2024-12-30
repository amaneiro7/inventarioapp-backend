import { type RegionPrimitives } from '../domain/Region'
import { type RegionRepository } from '../domain/RegionRepository'

export class RegionFinderAll {
  constructor(private readonly repository: RegionRepository) { }

  async run(): Promise<RegionPrimitives[]> {
    return await this.repository.searchAll()
  }
}
