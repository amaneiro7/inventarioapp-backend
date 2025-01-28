import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type CityDto } from './City.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CityId } from './CityId'

export abstract class CityRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<CityDto>>

	abstract searchById(id: Primitives<CityId>): Promise<CityDto | null>
}
