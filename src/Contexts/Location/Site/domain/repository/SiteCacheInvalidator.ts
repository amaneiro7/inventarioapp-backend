import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SiteId } from '../valueObject/SiteId'

export interface SiteCacheInvalidator {
	invalidateSiteCache(id?: Primitives<SiteId>): Promise<void>
}
