import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionId } from '../../AdministrativeRegion/domain/AdministrativeRegionId'
import { type RegionId } from './RegionId'
import { type RegionName } from './RegionName'

export interface Region {
	id: Primitives<RegionId>
	name: Primitives<RegionName>
	administrativeRegionId: Primitives<AdministrativeRegionId>
}
export type RegionPrimitives = Region

export type RegionDto = Region
