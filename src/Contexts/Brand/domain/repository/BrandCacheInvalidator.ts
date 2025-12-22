import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../valueObject/BrandId'

export interface BrandCacheInvalidator {
	invalidateBrandCache(id: Primitives<BrandId>): Promise<void>
}
