import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationStatusDto } from '../../LocationStatus/domain/LocationStatus.dto'
import { type LocationStatusId } from '../../LocationStatus/domain/LocationStatusId'
import { type SiteDto } from '../../Site/domain/Site.dto'
import { type TypeOfSiteDto } from '../../TypeOfSite/domain/entity/TypeOfSite.dto'
import { type LocationId } from './LocationId'
import { type LocationName } from './LocationName'
import { type LocationSite } from './LocationSite'
import { type LocationSubnet } from './LocationSubnet'
import { type LocationTypeOfSite } from './LocationTypeOfSite'

/**
 * Represents the core properties of a Location.
 */
export interface Location {
	id: Primitives<LocationId>
	name: Primitives<LocationName>
	typeOfSiteId: Primitives<LocationTypeOfSite>
	siteId: Primitives<LocationSite>
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
