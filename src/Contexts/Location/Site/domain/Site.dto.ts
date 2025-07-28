import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CityDto } from '../../City/domain/City.dto'
import { type CityId } from '../../City/domain/CityId'
import { type SiteAddress } from './SiteAddress'
import { type SiteId } from './SiteId'
import { type SiteName } from './SiteName'

/**
 * Represents the core properties of a Site.
 */
export interface Site {
	id: Primitives<SiteId>
	name: Primitives<SiteName>
	address: Primitives<SiteAddress>
	cityId: Primitives<CityId>
}

/**
 * Represents the primitive type of a Site, suitable for data transfer.
 */
export type SitePrimitives = Site

/**
 * Represents the parameters required to create a new Site, excluding the ID.
 */
export type SiteParams = Omit<Site, 'id'>

/**
 * Represents the Data Transfer Object (DTO) for a Site, including its associated City.
 */
export type SiteDto = Site & {
	city: CityDto
}
