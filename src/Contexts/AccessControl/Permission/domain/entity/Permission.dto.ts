import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionDescription } from '../valueObject/PermissionDescription'
import { type PermissionId } from '../valueObject/PermissionId'
import { type PermissionName } from '../valueObject/PermissionName'

export type Permission = {
	id: Primitives<PermissionId>
	name: Primitives<PermissionName>
	description: Primitives<PermissionDescription>
}

export type PermissionPrimitives = Permission

export type PermissionParams = Omit<Permission, 'id'>

export type PermissionDto = Permission
