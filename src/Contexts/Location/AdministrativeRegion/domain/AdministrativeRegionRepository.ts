import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type AdministrativeRegionDto } from './AdministrativeRegion.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionId } from './AdministrativeRegionId'

export abstract class AdministrativeRegionRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<AdministrativeRegionDto>>

	abstract searchById(id: Primitives<AdministrativeRegionId>): Promise<AdministrativeRegionDto | null>
}
