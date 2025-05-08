import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type RoleDto } from './Role.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RoleId } from './RoleId'

export abstract class RoleRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<RoleDto>>

	abstract searchById(id: Primitives<RoleId>): Promise<RoleDto | null>
}
