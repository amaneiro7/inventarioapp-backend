import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionId } from '../valueObject/PermissionId'
import { type PermissionName } from '../valueObject/PermissionName'

export type Permission = {
	id: Primitives<PermissionId>
	name: Primitives<PermissionName>
}

export type PermissionPrimitives = Permission

export type PermissionParams = Omit<Permission, 'id'>

export type PermissionDto = Permission
