import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { TypeOfSiteId } from './TypeOfSiteId'
import { TypeOfSiteName } from './TypeOfSiteName'

export interface TypeOfSite {
	id: Primitives<TypeOfSiteId>
	name: Primitives<TypeOfSiteName>
}
export type TypeOfSitePrimitives = TypeOfSite

export type TypeOfSiteDto = TypeOfSite
