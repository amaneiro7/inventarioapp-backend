import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ShipmentId } from '../valueObject/ShipmentId'

export interface ShipmentCacheInvalidator {
	invalidateShipmentCache(id?: Primitives<ShipmentId>): Promise<void>
}
