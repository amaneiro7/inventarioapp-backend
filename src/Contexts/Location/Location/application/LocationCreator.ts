import { Location } from '../domain/entity/Location'
import { LocationStatusExistenceChecker } from '../domain/service/LocationStatusExistanceChecker'
import { TypeOfSiteExistenceChecker } from '../domain/service/TypeOfSiteExistanceChecker'
import { SiteExistenceChecker } from '../domain/service/SiteExistanceChecker'
import { LocationNameUniquenessChecker } from '../domain/service/LocationNameUniquenessChecker'
import { type LocationStatusRepository } from '../../LocationStatus/domain/repository/LocationStatusRepository'
import { type LocationRepository } from '../domain/repository/LocationRepository'
import { type TypeOfSiteRepository } from '../../TypeOfSite/domain/repository/TypeOfSiteRepository'
import { type SiteRepository } from '../../Site/domain/repository/SiteRepository'
import { type LocationParams } from '../domain/entity/Location.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to create a new Location.
 */
export class LocationCreator {
	private readonly locationRepository: LocationRepository
	private readonly locationNameUniquenessChecker: LocationNameUniquenessChecker
	private readonly locationStatusExistenceChecker: LocationStatusExistenceChecker
	private readonly siteExistenceChecker: SiteExistenceChecker
	private readonly typeOfSiteExistenceChecker: TypeOfSiteExistenceChecker
	private readonly eventBus: EventBus
	constructor({
		locationRepository,
		typeOfSiteRepository,
		siteRepository,
		locationStatusRepository,
		eventBus
	}: {
		locationRepository: LocationRepository
		typeOfSiteRepository: TypeOfSiteRepository
		siteRepository: SiteRepository
		locationStatusRepository: LocationStatusRepository
		eventBus: EventBus
	}) {
		this.locationRepository = locationRepository
		this.locationNameUniquenessChecker = new LocationNameUniquenessChecker(locationRepository)
		this.locationStatusExistenceChecker = new LocationStatusExistenceChecker(locationStatusRepository)
		this.siteExistenceChecker = new SiteExistenceChecker(siteRepository)
		this.typeOfSiteExistenceChecker = new TypeOfSiteExistenceChecker(typeOfSiteRepository)
		this.eventBus = eventBus
	}

	/**
	 * Runs the service to create a new location.
	 * It performs several validations before creating the location and its monitoring entry.
	 * @param {LocationParams} params - The parameters for creating the location.
	 * @returns {Promise<void>} A promise that resolves when the location and its monitoring are successfully created.
	 */
	async run(params: LocationParams): Promise<void> {
		await Promise.all([
			this.locationNameUniquenessChecker.ensureUnique(params.name),
			this.locationStatusExistenceChecker.ensureExist(params.locationStatusId),
			this.siteExistenceChecker.ensureExist(params.siteId),
			this.typeOfSiteExistenceChecker.ensureExist(params.typeOfSiteId)
		])
		const location = Location.create(params)

		// 1. Persistencia: El 'await' garantiza que el dato esté en la DB antes de continuar.
		await this.locationRepository.save(location.toPrimitives())

		// 2. Publicación: El evento se dispara solo si el guardado fue exitoso.
		// Los suscriptores pueden buscar la entidad en la DB con seguridad.
		await this.eventBus.publish(location.pullDomainEvents())
	}
}
