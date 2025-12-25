import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../valueObject/LocationId'

export interface LocationCacheInvalidator {
	invalidateLocationCache(id?: Primitives<LocationId>): Promise<void>
}
