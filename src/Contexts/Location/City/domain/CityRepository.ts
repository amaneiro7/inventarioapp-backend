import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type CityParams, type CityDto } from './City.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CityId } from './CityId'
import { GenericRepository } from '../../../Shared/domain/GenericRepository'
import { type Nullable } from '../../../Shared/domain/Nullable'

export abstract class CityRepository implements GenericRepository<CityDto> {
	abstract save(payload: CityParams): Promise<void>

	abstract searchAll(criteria: Criteria): Promise<ResponseDB<CityDto>>

	abstract searchById(id: Primitives<CityId>): Promise<CityDto | null>

	abstract searchByName(name: CityDto['name']): Promise<Nullable<CityDto>>

	abstract remove(id: CityDto['id']): Promise<void>
}
