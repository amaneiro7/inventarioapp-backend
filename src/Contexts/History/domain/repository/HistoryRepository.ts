import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type HistoryDto, type HistoryPrimitives } from '../entity/History.dto'

export abstract class HistoryRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<HistoryDto>>

	abstract save(payload: HistoryPrimitives): Promise<void>
}
