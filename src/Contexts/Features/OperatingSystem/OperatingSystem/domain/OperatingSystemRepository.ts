import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type OperatingSystemDto } from './OperatingSystem.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemId } from './OperatingSystemId'

export abstract class OperatingSystemRepository {
	abstract searchAll(
		criteria: Criteria
	): Promise<ResponseDB<OperatingSystemDto>>

	abstract searchById(
		id: Primitives<OperatingSystemId>
	): Promise<OperatingSystemDto | null>
}
