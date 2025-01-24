import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type SiteDto } from '../../Site/domain/Site.dto'
import { type TypeOfSiteDto } from '../../TypeOfSite/domain/TypeOfSite.dto'
import { type LocationId } from './LocationId'
import { type LocationName } from './LocationName'
import { type LocationSite } from './LocationSite'
import { type LocationSubnet } from './LocationSubnet'
import { type LocationTypeOfSite } from './LocationTypeOfSite'

export interface Location {
	id: Primitives<LocationId>
	name: Primitives<LocationName>
	typeOfSiteId: Primitives<LocationTypeOfSite>
	siteId: Primitives<LocationSite>
	subnet: Primitives<LocationSubnet>
}
export type LocationPrimitives = Location
export type LocationParams = Omit<Location, 'id'>

export type LocationDto = Location & {
	typeOfSite: TypeOfSiteDto
	site: SiteDto
}
