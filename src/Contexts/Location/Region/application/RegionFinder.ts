import { RegionDoesNotExistError } from '../domain/RegionDoesNotExistError'
import { RegionId } from '../domain/RegionId'
import { type RegionDto } from '../domain/Region.dto'
import { type RegionRepository } from '../domain/RegionRepository'

/**
 * Service to find a Region by its ID.
 */
export class RegionFinder {
	private readonly regionRepository: RegionRepository
	constructor({ regionRepository }: { regionRepository: RegionRepository }) {
		this.regionRepository = regionRepository
	}

	/**
	 * Runs the service to retrieve a region by its ID.
	 * @param {{ id: string }} params - The parameters containing the region ID.
	 * @returns {Promise<RegionDto>} A promise that resolves to the Region DTO if found.
	 * @throws {RegionDoesNotExistError} If the region with the given ID does not exist.
	 */
	async run(params: { id: string }): Promise<RegionDto> {
		const { id } = params
		const regionId = new RegionId(id).value
		const region = await this.regionRepository.findById(regionId)

		if (!region) {
			throw new RegionDoesNotExistError(regionId)
		}

		return region
	}
}
