import { Location } from '../domain/Location'
import { LocationDoesNotExistError } from '../domain/LocationDoesNotExistError'
import { LocationId } from '../domain/LocationId'
import { LocationName } from '../domain/LocationName'
import { LocationSite } from '../domain/LocationSite'
import { LocationSubnet } from '../domain/LocationSubnet'
import { LocationTypeOfSite } from '../domain/LocationTypeOfSite'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationRepository } from '../domain/LocationRepository'
import { type TypeOfSiteRepository } from '../../TypeOfSite/domain/TypeOfSiteRepository'
import { type SiteRepository } from '../../Site/domain/SiteRepository'
import { type LocationParams } from '../domain/Location.dto'

export class LocationUpdater {
	constructor(
		private readonly locationRepository: LocationRepository,
		private readonly typeOfSiteRepository: TypeOfSiteRepository,
		private readonly siteRepository: SiteRepository
	) {}

	async run({ id, params }: { id: Primitives<LocationId>; params: Partial<LocationParams> }): Promise<void> {
		const locationId = new LocationId(id).value
		const location = await this.locationRepository.searchById(locationId)
		if (location === null) {
			throw new LocationDoesNotExistError(id)
		}

		const locationEntity = Location.fromPrimitives(location)

		await LocationName.updateNameField({
			repository: this.locationRepository,
			name: params.name,
			entity: locationEntity
		})
		await LocationSite.updateSiteField({
			repository: this.siteRepository,
			entity: locationEntity,
			site: params.siteId
		})
		await LocationTypeOfSite.updateTypeOfSiteField({
			repository: this.typeOfSiteRepository,
			entity: locationEntity,
			typeOfSite: params.typeOfSiteId
		})
		await LocationSubnet.updateSubnetField({
			subnet: params.subnet,
			entity: locationEntity
		})

		await this.locationRepository.save(locationEntity.toPrimitive())
	}
}
