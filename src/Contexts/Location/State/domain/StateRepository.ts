import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type StateDto } from './State.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StateId } from './StateId'

export abstract class StateRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<StateDto>>

	abstract searchById(id: Primitives<StateId>): Promise<StateDto | null>
}
