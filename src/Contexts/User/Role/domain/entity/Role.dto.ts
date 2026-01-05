import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../valueObject/RoleId'
import { type RoleName } from '../valueObject/RoleName'

/**
 * @interface Role
 * @description Defines the core properties of a Role entity.
 */
export interface Role {
	id: Primitives<RoleId>
	name: Primitives<RoleName>
}

/**
 * @type RolePrimitives
 * @description Represents the primitive, serializable state of a Role entity.
 */
export type RolePrimitives = Role

/**
 * @type RoleDto
 * @description Represents a Data Transfer Object (DTO) for the Role entity.
 */
export type RoleDto = Role
