import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionId } from '../valueObject/RegionId'

export interface RegionCacheInvalidator {
	invalidateRegionCache(id?: Primitives<RegionId>): Promise<void>
}
