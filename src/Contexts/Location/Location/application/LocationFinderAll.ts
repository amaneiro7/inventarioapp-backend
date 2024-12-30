import { type LocationPrimitives } from '../domain/Location'
import { type LocationRepository } from '../domain/LocationRepository'

export class LocationFinderAll {
  constructor(private readonly repository: LocationRepository) { }

  async run(): Promise<LocationPrimitives[]> {
    return await this.repository.searchAll()
  }
}
