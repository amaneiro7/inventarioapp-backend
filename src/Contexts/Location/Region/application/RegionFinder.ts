import { RegionDoesNotExistError } from '../domain/RegionDoesNotExistError'
import { RegionId } from '../domain/RegionId'
import { type RegionDto } from '../domain/Region.dto'
import { type RegionRepository } from '../domain/RegionRepository'

export class RegionFinder {
	constructor(private readonly regionRepository: RegionRepository) {}

	async run(params: { id: string }): Promise<RegionDto> {
		const { id } = params
		const regionId = new RegionId(id).value
		const region = await this.regionRepository.searchById(regionId)

		if (!region) {
			throw new RegionDoesNotExistError(regionId)
		}

		return region
	}
}
