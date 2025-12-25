import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationStatusDto } from '../../../LocationStatus/domain/entity/LocationStatus.dto'
import { type LocationStatusId } from '../../../LocationStatus/domain/valueObject/LocationStatusId'
import { type SiteDto } from '../../../Site/domain/entity/Site.dto'
import { type SiteId } from '../../../Site/domain/valueObject/SiteId'
import { type TypeOfSiteDto } from '../../../TypeOfSite/domain/entity/TypeOfSite.dto'
import { type TypeOfSiteId } from '../../../TypeOfSite/domain/valueObject/TypeOfSiteId'
import { type LocationId } from '../valueObject/LocationId'
import { type LocationName } from '../valueObject/LocationName'
import { type LocationSubnet } from '../valueObject/LocationSubnet'

/**
 * Represents the core properties of a Location.
 */
export interface Location {
	id: Primitives<LocationId>
	name: Primitives<LocationName>
	typeOfSiteId: Primitives<TypeOfSiteId>
	siteId: Primitives<SiteId>
	subnet: Primitives<LocationSubnet>
	locationStatusId: Primitives<LocationStatusId>
}

/**
 * Represents the primitive type of a Location, suitable for data transfer.
 */
export type LocationPrimitives = Location

/**
 * Represents the parameters required to create a new Location, excluding the ID.
 */
export type LocationParams = Omit<Location, 'id'>

/**
 * Represents the Data Transfer Object (DTO) for a Location, including its associated TypeOfSite, Site, and OperationalStatus.
 */
export type LocationDto = Location & {
	typeOfSite: TypeOfSiteDto
	site: SiteDto
	operationalStatus: LocationStatusDto
}
