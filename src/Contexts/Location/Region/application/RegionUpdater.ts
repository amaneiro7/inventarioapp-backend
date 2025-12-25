import { Region } from '../domain/entity/Region'
import { RegionId } from '../domain/valueObject/RegionId'
import { AdministrativeRegionExistenceChecker } from '../domain/service/AdministrativeRegionExistanceChecker'
import { RegionDoesNotExistError } from '../domain/errors/RegionDoesNotExistError'
import { type AdministrativeRegionRepository } from '../../AdministrativeRegion/domain/repository/AdministrativeRegionRepository'
import { type RegionParams } from '../domain/entity/Region.dto'
import { type RegionRepository } from '../domain/repository/RegionRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to update an existing Region.
 */
export class RegionUpdater {
	private readonly regionRepository: RegionRepository
	private readonly administrativeRegionExistenceChecker: AdministrativeRegionExistenceChecker
	private readonly eventBus: EventBus
	constructor({
		regionRepository,
		administrativeRegionRepository,
		eventBus
	}: {
		regionRepository: RegionRepository
		administrativeRegionRepository: AdministrativeRegionRepository
		eventBus: EventBus
	}) {
		this.regionRepository = regionRepository
		this.administrativeRegionExistenceChecker = new AdministrativeRegionExistenceChecker(
			administrativeRegionRepository
		)
		this.eventBus = eventBus
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

		const region = await this.regionRepository.findById(regionId)
		if (!region) {
			throw new RegionDoesNotExistError(id)
		}

		const { administrativeRegionId } = params
		const regionEntity = Region.fromPrimitives(region)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []
		if (administrativeRegionId && regionEntity.administrativeRegionValue !== administrativeRegionId) {
			await this.administrativeRegionExistenceChecker.ensureExist(administrativeRegionId)
			changes.push({
				field: 'administrativeRegionId',
				oldValue: regionEntity.administrativeRegionValue,
				newValue: administrativeRegionId
			})
			regionEntity.updateAdmRegion(administrativeRegionId)
		}

		if (changes.length > 0) {
			regionEntity.registerUpdateEvent(changes)
			await this.regionRepository.save(regionEntity.toPrimitives())
			await this.eventBus.publish(regionEntity.pullDomainEvents())
		}
	}
}
