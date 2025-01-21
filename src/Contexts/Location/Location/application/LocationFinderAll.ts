import { type LocationPrimitives } from '../domain/Location'
import { type LocationRepository } from '../domain/LocationRepository'

export class LocationFinderAll {
	constructor(private readonly locationRepository: LocationRepository) {}

	async run(): Promise<LocationPrimitives[]> {
		return await this.locationRepository.searchAll()
	}
}
