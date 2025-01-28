import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type SitePrimitives, type SiteDto } from './Site.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type SiteId } from './SiteId'

export abstract class SiteRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<SiteDto>>

	abstract save(payload: SitePrimitives): Promise<void>

	abstract searchById(id: Primitives<SiteId>): Promise<SiteDto | null>
}
