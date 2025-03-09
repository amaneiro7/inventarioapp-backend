import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type InputTypeDto } from './InputType.dto'
import { type InputTypeId } from './InputTypeId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export abstract class InputTypeRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<InputTypeDto>>

	abstract searchById(id: Primitives<InputTypeId>): Promise<InputTypeDto | null>
}
