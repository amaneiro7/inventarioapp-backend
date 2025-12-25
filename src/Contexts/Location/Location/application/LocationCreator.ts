import { Location } from '../domain/Location'
import { LocationName } from '../domain/LocationName'
import { LocationSite } from '../domain/LocationSite'
import { LocationTypeOfSite } from '../domain/LocationTypeOfSite'
import { LocationOperationalStatus } from '../domain/LocationOperationalStatus'
import { LocationMonitoringCreator } from '../../LocationMonitoring/application/LocationMonitoringCreator'
import { type LocationStatusRepository } from '../../LocationStatus/domain/repository/LocationStatusRepository'
import { type LocationRepository } from '../domain/LocationRepository'
import { type TypeOfSiteRepository } from '../../TypeOfSite/domain/repository/TypeOfSiteRepository'
import { type SiteRepository } from '../../Site/domain/repository/SiteRepository'
import { type LocationParams } from '../domain/Location.dto'
import { type LocationMonitoringRepository } from '../../LocationMonitoring/domain/repository/LocationMonitoringRepository'

/**
 * Service to create a new Location.
 */
export class LocationCreator {
	private readonly locationRepository: LocationRepository
	private readonly typeOfSiteRepository: TypeOfSiteRepository
	private readonly siteRepository: SiteRepository
	private readonly locationStatusRepository: LocationStatusRepository
	private readonly locationMonitoringRepository: LocationMonitoringRepository
	constructor({
		locationRepository,
		typeOfSiteRepository,
		siteRepository,
		locationStatusRepository,
		locationMonitoringRepository
	}: {
		locationRepository: LocationRepository
		typeOfSiteRepository: TypeOfSiteRepository
		siteRepository: SiteRepository
		locationStatusRepository: LocationStatusRepository
		locationMonitoringRepository: LocationMonitoringRepository
	}) {
		this.locationRepository = locationRepository
		this.typeOfSiteRepository = typeOfSiteRepository
		this.siteRepository = siteRepository
		this.locationStatusRepository = locationStatusRepository
		this.locationMonitoringRepository = locationMonitoringRepository
	}

	/**
	 * Runs the service to create a new location.
	 * It performs several validations before creating the location and its monitoring entry.
	 * @param {LocationParams} params - The parameters for creating the location.
	 * @returns {Promise<void>} A promise that resolves when the location and its monitoring are successfully created.
	 */
	async run(params: LocationParams): Promise<void> {
		const location = Location.create(params)

		await LocationName.ensureNameDoesNotExit({
			repository: this.locationRepository,
			name: params.name
		})
		await LocationTypeOfSite.ensureTypeOfSiteExit({
			repository: this.typeOfSiteRepository,
			typeOfSite: params.typeOfSiteId
		})
		await LocationSite.ensureSiteExit({
			repository: this.siteRepository,
			site: params.siteId
		})
		await LocationOperationalStatus.ensureOperationalStatusExit({
			repository: this.locationStatusRepository,
			operationalStatus: params.locationStatusId
		})
		const LocationPrimitives = location.toPrimitive()
		await this.locationRepository.save(LocationPrimitives)
		await new LocationMonitoringCreator({ locationMonitoringRepository: this.locationMonitoringRepository }).run({
			locationId: LocationPrimitives.id
		})
	}
}
