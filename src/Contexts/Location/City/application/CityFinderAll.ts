import { type CityPrimitives } from '../domain/City'
import { type CityRepository } from '../domain/CityRepository'

export class CityFinderAll {
  constructor(private readonly repository: CityRepository) { }

  async run(): Promise<CityPrimitives[]> {
    return await this.repository.searchAll()
  }
}
