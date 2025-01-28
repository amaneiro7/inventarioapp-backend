import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationDto, type LocationPrimitives } from './Location.dto'
import { type LocationId } from './LocationId'
import { type LocationName } from './LocationName'

export abstract class LocationRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<LocationDto>>

	abstract matching(criteria: Criteria): Promise<ResponseDB<LocationDto>>

	abstract save(payload: LocationPrimitives): Promise<void>

	abstract searchById(id: Primitives<LocationId>): Promise<LocationDto | null>

	abstract searchByName(
		name: Primitives<LocationName>
	): Promise<LocationDto | null>
}
