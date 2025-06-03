import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type LocationStatusDto } from './LocationStatus.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationStatusId } from './LocationStatusId'

export abstract class LocationStatusRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<LocationStatusDto>>

	abstract searchById(id: Primitives<LocationStatusId>): Promise<LocationStatusDto | null>
}
