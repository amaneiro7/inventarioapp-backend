import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type HardDriveTypeDto } from './HardDriveType.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeId } from './HardDriveTypeId'

export abstract class HardDriveTypeRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveTypeDto>>

	abstract searchById(id: Primitives<HardDriveTypeId>): Promise<HardDriveTypeDto | null>
}
