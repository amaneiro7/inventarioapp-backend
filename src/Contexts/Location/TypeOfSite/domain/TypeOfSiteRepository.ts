import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type TypeOfSiteDto } from './TypeOfSite.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteId } from './TypeOfSiteId'

export abstract class TypeOfSiteRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<TypeOfSiteDto>>

	abstract searchById(
		id: Primitives<TypeOfSiteId>
	): Promise<TypeOfSiteDto | null>
}
