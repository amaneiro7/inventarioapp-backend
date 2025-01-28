import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type MemoryRamTypeDto } from './MemoryRam.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from './MemoryRamTypeId'

export abstract class MemoryRamTypeRepository {
	abstract searchAll(
		criteria: Criteria
	): Promise<ResponseDB<MemoryRamTypeDto>>

	abstract searchById(
		id: Primitives<MemoryRamTypeId>
	): Promise<MemoryRamTypeDto | null>
}
