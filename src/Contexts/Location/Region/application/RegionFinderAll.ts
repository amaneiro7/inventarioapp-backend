import { type RegionPrimitives } from '../domain/Region'
import { type RegionRepository } from '../domain/RegionRepository'

export class RegionFinderAll {
	constructor(private readonly regionRepository: RegionRepository) {}

	async run(): Promise<RegionPrimitives[]> {
		return await this.regionRepository.searchAll()
	}
}
