import { Site } from '../domain/entity/Site'
import { SiteId } from '../domain/valueObject/SiteId'
import { SiteDoesNotExistError } from '../domain/errors/SiteDoesNotExistError'
import { SiteNameUniquenessChecker } from '../domain/service/SiteNameUniquenessChecker'
import { type SitePrimitives } from '../domain/entity/Site.dto'
import { type SiteRepository } from '../domain/repository/SiteRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to update an existing Site.
 */
export class SiteUpdater {
	private readonly siteRepository: SiteRepository
	private readonly siteNameUniquenessChecker: SiteNameUniquenessChecker

	private readonly eventBus: EventBus
	constructor({
		siteRepository,

		eventBus
	}: {
		siteRepository: SiteRepository

		eventBus: EventBus
	}) {
		this.siteRepository = siteRepository
		this.eventBus = eventBus
		this.siteNameUniquenessChecker = new SiteNameUniquenessChecker(siteRepository)
	}

	/**
	 * Runs the service to update a site.
	 * It validates the existence of the site and updates its name and address if provided.
	 * @param {{ id: string; params: Partial<Omit<SitePrimitives, 'id'>> }} params - The parameters for updating the site (id, and partial site data).
	 * @returns {Promise<void>} A promise that resolves when the site is successfully updated.
	 * @throws {SiteDoesNotExistError} If the site with the given ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<Omit<SitePrimitives, 'id'>> }): Promise<void> {
		const siteId = new SiteId(id)
		const site = await this.siteRepository.findById(siteId.value)

		if (!site) {
			throw new SiteDoesNotExistError(id)
		}

		const siteEntity = Site.fromPrimitives(site)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.name && siteEntity.nameValue !== params.name.trim()) {
			await this.siteNameUniquenessChecker.ensureUnique(params.name, siteEntity.idValue)
			changes.push({
				field: 'name',
				oldValue: siteEntity.nameValue,
				newValue: params.name
			})
			siteEntity.updateName(params.name)
		}

		if (params.address && siteEntity.addressValue !== params.address.trim()) {
			changes.push({
				field: 'address',
				oldValue: siteEntity.addressValue,
				newValue: params.address
			})
			siteEntity.updateAddress(params.address)
		}
		if (changes.length > 0) {
			siteEntity.registerUpdateEvent(changes)
			await this.eventBus.publish(siteEntity.pullDomainEvents())
			await this.siteRepository.save(siteEntity.toPrimitives())
		}
	}
}
