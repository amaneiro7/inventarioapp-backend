import { LocationDoesNotExistError } from "../domain/LocationDoesNotExistError"
import { LocationId } from "../domain/LocationId"
import { type LocationPrimitives } from "../domain/Location"
import { type LocationRepository } from "../domain/LocationRepository"

export class LocationFinder {
  constructor(private readonly repository: LocationRepository) { }

  async run(params: { id: string }): Promise<LocationPrimitives> {
    const { id } = params
    const locationId = new LocationId(id).value
    const location = await this.repository.searchById(locationId)

    if (location === null) {
      throw new LocationDoesNotExistError(locationId)
    }

    return location
  }
}
