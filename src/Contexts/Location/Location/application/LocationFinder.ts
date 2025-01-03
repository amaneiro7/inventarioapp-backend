import { LocationDoesNotExistError } from "../domain/LocationDoesNotExistError"
import { LocationId } from "../domain/LocationId"
import { type LocationPrimitives } from "../domain/Location"
import { type LocationRepository } from "../domain/LocationRepository"

export class LocationFinder {
  constructor(private readonly locationRepository: LocationRepository) { }

  async run(params: { id: string }): Promise<LocationPrimitives> {
    const { id } = params
    const locationId = new LocationId(id).value
    const location = await this.locationRepository.searchById(locationId)

    if (!location) {
      throw new LocationDoesNotExistError(locationId)
    }

    return location
  }
}
