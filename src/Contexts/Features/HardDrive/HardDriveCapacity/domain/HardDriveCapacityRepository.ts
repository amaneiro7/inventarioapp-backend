import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityDto } from './HardDriveCapacity.dto'
import { type HardDriveCapacityId } from './HardDriveCapacityId'

export abstract class HardDriveCapacityRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveCapacityDto>>

	abstract searchById(id: Primitives<HardDriveCapacityId>): Promise<HardDriveCapacityDto | null>
}
