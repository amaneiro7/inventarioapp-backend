import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type RegionParams, type RegionDto } from './Region.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RegionId } from './RegionId'

export abstract class RegionRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<RegionDto>>

	abstract searchById(id: Primitives<RegionId>): Promise<RegionDto | null>

	abstract save(payload: RegionParams): Promise<void>
}
