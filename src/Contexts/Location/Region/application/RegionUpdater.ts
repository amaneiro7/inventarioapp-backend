import { AdmRegionRegion } from '../domain/AdministrativeRegion'
import { Region } from '../domain/Region'
import { RegionDoesNotExistError } from '../domain/RegionDoesNotExistError'
import { RegionId } from '../domain/RegionId'
import { type AdministrativeRegionRepository } from '../../AdministrativeRegion/domain/AdministrativeRegionRepository'
import { type RegionParams } from '../domain/Region.dto'
import { type RegionRepository } from '../domain/RegionRepository'

/**
 * Service to update an existing Region.
 */
export class RegionUpdater {
	private readonly regionRepository: RegionRepository
	private readonly administrativeRegionRepository: AdministrativeRegionRepository
	constructor({
		regionRepository,
		administrativeRegionRepository
	}: {
		regionRepository: RegionRepository
		administrativeRegionRepository: AdministrativeRegionRepository
	}) {
		this.regionRepository = regionRepository
		this.administrativeRegionRepository = administrativeRegionRepository
	}

	/**
	 * Runs the service to update a region.
	 * It validates the existence of the region and updates its administrative region if provided.
	 * @param {{ id: string; params: Partial<RegionParams> }} params - The parameters for updating the region (id, and partial region data).
	 * @returns {Promise<void>} A promise that resolves when the region is successfully updated.
	 * @throws {RegionDoesNotExistError} If the region with the given ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<RegionParams> }): Promise<void> {
		const regionId = new RegionId(id).value

		const region = await this.regionRepository.searchById(regionId)
		if (!region) {
			throw new RegionDoesNotExistError(id)
		}

		const { administrativeRegionId } = params
		const regionEntity = Region.fromPrimitives(region)
		await AdmRegionRegion.updateAdmRegionField({
			entity: regionEntity,
			repository: this.administrativeRegionRepository,
			administrativeRegionId
		})

		await this.regionRepository.save(regionEntity.toPrimitive())
	}
}
