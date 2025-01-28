import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { ProcessorDto, ProcessorPrimitives } from './Processor.dto'
import { type ProcessorId } from './ProcessorId'
import { type ProcessorNumberModel } from './ProcessorNumberModel'

export abstract class ProcessorRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorDto>>

	abstract save(payload: ProcessorPrimitives): Promise<void>

	abstract searchById(
		id: Primitives<ProcessorId>
	): Promise<ProcessorDto | null>

	abstract searchByNumberModel(
		numberModel: Primitives<ProcessorNumberModel>
	): Promise<ProcessorDto | null>

	abstract remove(id: Primitives<ProcessorId>): Promise<void>
}
