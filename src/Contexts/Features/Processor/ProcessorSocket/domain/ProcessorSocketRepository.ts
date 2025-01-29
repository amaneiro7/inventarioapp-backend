import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorId } from '../../Processor/domain/ProcessorId'
import { type ProcessorSocketDto } from './ProcessorSocket.dto'

export abstract class ProcessorSocketRepository {
	abstract searchAll(
		criteria: Criteria
	): Promise<ResponseDB<ProcessorSocketDto>>

	abstract searchById(
		id: Primitives<ProcessorId>
	): Promise<ProcessorSocketDto | null>
}
