import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RoleId } from './RoleId'
import { type RoleName } from './RoleName'

export interface Role {
	id: Primitives<RoleId>
	name: Primitives<RoleName>
}

export type RolePrimitives = Role

export type RoleDto = Role
