import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type PermissionDto, type PermissionPrimitives } from '../entity/Permission.dto'
import { type PermissionId } from '../valueObject/PermissionId'
import { type PermissionName } from '../valueObject/PermissionName'

export abstract class PermissionRepository {
	abstract save: (payload: PermissionPrimitives) => Promise<void>
	abstract searchAll: (criteria: Criteria) => Promise<ResponseDB<PermissionDto>>
	abstract search: () => Promise<PermissionDto[]>
	abstract findById: (id: Primitives<PermissionId>) => Promise<PermissionDto | null>
	abstract findByName: (name: Primitives<PermissionName>) => Promise<PermissionDto | null>
	abstract findByIds: (ids: Array<Primitives<PermissionId>>) => Promise<PermissionDto[]>
	abstract remove: (id: Primitives<PermissionId>) => Promise<void>
}
