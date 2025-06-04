import { Location } from '../domain/Location'
import { LocationName } from '../domain/LocationName'
import { LocationSite } from '../domain/LocationSite'
import { LocationTypeOfSite } from '../domain/LocationTypeOfSite'
import { LocationOperationalStatus } from '../domain/LocationOperationalStatus'
import { type LocationRepository } from '../domain/LocationRepository'
import { type TypeOfSiteRepository } from '../../TypeOfSite/domain/TypeOfSiteRepository'
import { type SiteRepository } from '../../Site/domain/SiteRepository'
import { type LocationParams } from '../domain/Location.dto'
import { type LocationStatusRepository } from '../../LocationStatus/domain/LocationStatusRepository'
import { LocationMonitoringCreator } from '../../LocationMonitoring/application/LocationMonitoringCreator'
import { LocationMonitoringRepository } from '../../LocationMonitoring/domain/repository/LocationMonitoringRepository'

export class LocationCreator {
	constructor(
		private readonly locationRepository: LocationRepository,
		private readonly typeOfSiteRepository: TypeOfSiteRepository,
		private readonly siteRepository: SiteRepository,
		private readonly locationStatusRepository: LocationStatusRepository,
		private readonly locationMonitoringRepository: LocationMonitoringRepository
	) {}

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
		await new LocationMonitoringCreator(this.locationMonitoringRepository).run({
			locationId: LocationPrimitives.id
		})
	}
}
