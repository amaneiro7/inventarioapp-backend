import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CityDto } from '../../City/domain/City.dto'
import { type CityId } from '../../City/domain/CityId'
import { type SiteAddress } from './SiteAddress'
import { type SiteId } from './SiteId'
import { type SiteName } from './SiteName'

export interface Site {
	id: Primitives<SiteId>
	name: Primitives<SiteName>
	address: Primitives<SiteAddress>
	cityId: Primitives<CityId>
}
export type SitePrimitives = Site

export type SiteParams = Omit<Site, 'id'>

export type SiteDto = Site & {
	city: CityDto
}
