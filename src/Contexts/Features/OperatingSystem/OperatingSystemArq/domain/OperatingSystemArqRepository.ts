import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqDto } from './OperatingSystemArq.dto'
import { type OperatingSystemArqId } from './OperatingSystemArqID'

export abstract class OperatingSystemArqRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<OperatingSystemArqDto>>

	abstract searchById(id: Primitives<OperatingSystemArqId>): Promise<OperatingSystemArqDto | null>
}
