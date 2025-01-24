import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { RegionId } from './RegionId'
import { RegionName } from './RegionName'

export interface Region {
	id: Primitives<RegionId>
	name: Primitives<RegionName>
}
export type RegionPrimitives = Region

export type RegionDto = Region
