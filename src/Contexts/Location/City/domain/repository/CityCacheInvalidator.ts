import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityId } from '../valueObject/CityId'

export interface CityCacheInvalidator {
	invalidateCityCache(id?: Primitives<CityId>): Promise<void>
}
