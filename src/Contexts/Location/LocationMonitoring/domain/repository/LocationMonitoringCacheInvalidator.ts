import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../../Location/domain/valueObject/LocationId'

export interface LocationMonitoringCacheInvalidator {
	invalidateLocationMonitoringCache(id?: Primitives<LocationId>): Promise<void>
}
