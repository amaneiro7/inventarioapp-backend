import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RoleId } from './RoleId'
import { type RoleName } from './RoleName'

/**
 * @interface Role
 * @description Defines the core properties of a Role entity.
 */
export interface Role {
	/**
	 * @property {Primitives<RoleId>} id The unique identifier of the role.
	 */
	id: Primitives<RoleId>
	/**
	 * @property {Primitives<RoleName>} name The name of the role.
	 */
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
