import { Location } from '../domain/Location'
import { LocationDoesNotExistError } from '../domain/LocationDoesNotExistError'
import { LocationId } from '../domain/LocationId'
import { LocationName } from '../domain/LocationName'
import { LocationSite } from '../domain/LocationSite'
import { LocationSubnet } from '../domain/LocationSubnet'
import { LocationTypeOfSite } from '../domain/LocationTypeOfSite'
import { LocationOperationalStatus } from '../domain/LocationOperationalStatus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationRepository } from '../domain/LocationRepository'
import { type TypeOfSiteRepository } from '../../TypeOfSite/domain/TypeOfSiteRepository'
import { type SiteRepository } from '../../Site/domain/SiteRepository'
import { type LocationParams } from '../domain/Location.dto'
import { type LocationStatusRepository } from '../../LocationStatus/domain/LocationStatusRepository'

export class LocationUpdater {
	private readonly locationRepository: LocationRepository
	private readonly typeOfSiteRepository: TypeOfSiteRepository
	private readonly siteRepository: SiteRepository
	private readonly locationStatusRepository: LocationStatusRepository
	constructor({
		locationRepository,
		typeOfSiteRepository,
		siteRepository,
		locationStatusRepository
	}: {
		locationRepository: LocationRepository
		typeOfSiteRepository: TypeOfSiteRepository
		siteRepository: SiteRepository
		locationStatusRepository: LocationStatusRepository
	}) {
		this.locationRepository = locationRepository
		this.typeOfSiteRepository = typeOfSiteRepository
		this.siteRepository = siteRepository
		this.locationStatusRepository = locationStatusRepository
	}

	async run({ id, params }: { id: Primitives<LocationId>; params: Partial<LocationParams> }): Promise<void> {
		const locationId = new LocationId(id).value
		const location = await this.locationRepository.searchById(locationId)
		if (location === null) {
			throw new LocationDoesNotExistError(id)
		}

		const locationEntity = Location.fromPrimitives(location)

		await Promise.all([
			LocationName.updateNameField({
				repository: this.locationRepository,
				name: params.name,
				entity: locationEntity
			}),
			LocationSite.updateSiteField({
				repository: this.siteRepository,
				entity: locationEntity,
				site: params.siteId
			}),
			LocationTypeOfSite.updateTypeOfSiteField({
				repository: this.typeOfSiteRepository,
				entity: locationEntity,
				typeOfSite: params.typeOfSiteId
			}),
			LocationSubnet.updateSubnetField({
				subnet: params.subnet,
				entity: locationEntity
			}),
			LocationOperationalStatus.updateOperationalStatusField({
				repository: this.locationStatusRepository,
				entity: locationEntity,
				operationalStatus: params.locationStatusId
			})
		])

		await this.locationRepository.save(locationEntity.toPrimitive())
	}
}
