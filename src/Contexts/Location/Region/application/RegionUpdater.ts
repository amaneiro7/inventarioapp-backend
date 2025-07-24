import { AdmRegionRegion } from '../domain/AdministrativeRegion'
import { Region } from '../domain/Region'
import { RegionDoesNotExistError } from '../domain/RegionDoesNotExistError'
import { RegionId } from '../domain/RegionId'
import { type AdministrativeRegionRepository } from '../../AdministrativeRegion/domain/AdministrativeRegionRepository'
import { type RegionParams } from '../domain/Region.dto'
import { type RegionRepository } from '../domain/RegionRepository'

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
