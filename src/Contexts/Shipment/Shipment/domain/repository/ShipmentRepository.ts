import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type ShipmentDto } from '../entity/Shipment.dto'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Shipment } from '../entity/Shipment'

export abstract class ShipmentRepository {
	abstract findLast(): Promise<ShipmentDto | null>
	abstract save(shipment: Shipment): Promise<void>
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<ShipmentDto>>
	abstract searchById(id: ShipmentDto['id']): Promise<Nullable<ShipmentDto>>
	abstract remove(id: ShipmentDto['id']): Promise<void>
}
