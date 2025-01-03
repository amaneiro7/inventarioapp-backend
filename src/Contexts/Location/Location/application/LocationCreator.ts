
import { Location, type LocationPrimitives } from '../domain/Location'
import { LocationName } from '../domain/LocationName'
import { LocationSite } from '../domain/LocationSite'
import { LocationTypeOfSite } from '../domain/LocationTypeOfSite'
import { type LocationRepository } from '../domain/LocationRepository'
import { type TypeOfSiteRepository } from '../../TypeOfSite/domain/TypeOfSiteRepository'
import { type SiteRepository } from '../../Site/domain/SiteRepository'

export class LocationCreator {
  constructor(
    private readonly locationRepository: LocationRepository,
    private readonly typeOfSiteRepository: TypeOfSiteRepository,
    private readonly siteRepository: SiteRepository

  ) { }

  async run(params: Omit<LocationPrimitives, 'id'>): Promise<void> {

    const location = Location.create(params)

    await LocationName.ensureNameDoesNotExit({ repository: this.locationRepository, name: params.name })
    await LocationTypeOfSite.ensureTypeOfSiteExit({ repository: this.typeOfSiteRepository, typeOfSite: params.typeOfSiteId })
    await LocationSite.ensureSiteExit({ repository: this.siteRepository, site: params.siteId })

    await this.locationRepository.save(location.toPrimitive())
  }

}
