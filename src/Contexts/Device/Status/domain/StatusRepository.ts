import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StatusDto } from './Status.dto'
import { type StatusId } from './StatusId'

export abstract class StatusRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<StatusDto>>

	abstract searchById(id: Primitives<StatusId>): Promise<StatusDto | null>
}
