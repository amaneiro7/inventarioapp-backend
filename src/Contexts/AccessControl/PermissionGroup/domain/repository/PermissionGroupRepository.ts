import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type PermissionGroupDto, type PermissionGroupPrimitives } from '../entity/PermissionGroup.dto'
import { type PermissionGroupId } from '../valueObject/PermissionGroupId'
import { type PermissionGroupName } from '../valueObject/PermissionGroupName'

export abstract class PermissionGroupRepository {
	abstract save(payload: PermissionGroupPrimitives): Promise<void>
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<PermissionGroupDto>>
	abstract findById(id: Primitives<PermissionGroupId>): Promise<PermissionGroupDto | null>
	abstract findByName(name: Primitives<PermissionGroupName>): Promise<PermissionGroupDto | null>
	abstract findByIds: (ids: Array<Primitives<PermissionGroupId>>) => Promise<PermissionGroupDto[]>
	abstract remove(id: Primitives<PermissionGroupId>): Promise<void>
}
