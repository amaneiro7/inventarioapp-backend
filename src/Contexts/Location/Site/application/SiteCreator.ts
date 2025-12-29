import { Site } from '../domain/entity/Site'
import { CityExistenceChecker } from '../../City/domain/service/CityExistanceChecker'
import { SiteNameUniquenessChecker } from '../domain/service/SiteNameUniquenessChecker'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type CityRepository } from '../../City/domain/repository/CityRepository'
import { type SiteParams } from '../domain/entity/Site.dto'
import { type SiteRepository } from '../domain/repository/SiteRepository'

/**
 * Service to create a new Site.
 */
export class SiteCreator {
	private readonly siteRepository: SiteRepository
	private readonly siteNameUniquenessChecker: SiteNameUniquenessChecker
	private readonly cityExistenceChecker: CityExistenceChecker
	private readonly eventBus: EventBus
	constructor({
		siteRepository,
		cityRepository,
		eventBus
	}: {
		siteRepository: SiteRepository
		cityRepository: CityRepository
		eventBus: EventBus
	}) {
		this.siteRepository = siteRepository
		this.eventBus = eventBus
		this.siteNameUniquenessChecker = new SiteNameUniquenessChecker(siteRepository)
		this.cityExistenceChecker = new CityExistenceChecker(cityRepository)
	}

	/**
	 * Runs the service to create a new site.
	 * @param {SiteParams} params - The parameters for creating the site.
	 * @returns {Promise<void>} A promise that resolves when the site is successfully created.
	 */
	async run(params: SiteParams): Promise<void> {
		await Promise.all([
			this.siteNameUniquenessChecker.ensureUnique(params.name),
			this.cityExistenceChecker.ensureExist(params.cityId)
		])

		const site = Site.create(params)

		await this.siteRepository.save(site.toPrimitives())
		await this.eventBus.publish(site.pullDomainEvents())
	}
}
