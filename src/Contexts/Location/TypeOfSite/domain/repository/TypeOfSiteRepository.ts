import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteDto } from '../entity/TypeOfSite.dto'
import { type TypeOfSiteId } from '../valueObject/TypeOfSiteId'

export abstract class TypeOfSiteRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<TypeOfSiteDto>>

	abstract findById(id: Primitives<TypeOfSiteId>): Promise<TypeOfSiteDto | null>
}
