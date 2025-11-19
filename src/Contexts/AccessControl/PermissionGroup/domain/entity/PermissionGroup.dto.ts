import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupId } from '../valueObject/PermissionGroupId'
import { type PermissionGroupName } from '../valueObject/PermissionGroupName'
import { type PermissionId } from '../../../Permission/domain/valueObject/PermissionId'
import { type PermissionDto } from '../../../Permission/domain/entity/Permission.dto'

export type PermissionGroup = {
	id: Primitives<PermissionGroupId>
	name: Primitives<PermissionGroupName>
}

export type PermissionGroupParams = Omit<PermissionGroup, 'id'> & {
	permissions?: Primitives<PermissionId>[]
}

export type PermissionGroupPrimitives = PermissionGroup & {
	permissions: Primitives<PermissionId>[]
}

export type PermissionGroupDto = Omit<PermissionGroup, 'permissions'> & {
	permissions: PermissionDto[]
}
