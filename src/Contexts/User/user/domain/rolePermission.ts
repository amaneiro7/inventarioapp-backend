import { RoleTypes } from './Role'

/**
 * @constant PERMISSION
 * @description Defines the available permission types.
 */
export const PERMISSION = {
	FULL: 'full',
	READ: 'read',
	WRITE: 'write'
} as const

/**
 * @constant RolePermission
 * @description Maps each role type to an array of permissions it possesses.
 */
export const RolePermission = {
	[RoleTypes.ADMIN]: [PERMISSION.FULL],
	[RoleTypes.COORD]: [PERMISSION.FULL, PERMISSION.READ, PERMISSION.WRITE],
	[RoleTypes.GERENTE]: [PERMISSION.READ],
	[RoleTypes.SPECIALIST]: [PERMISSION.READ, PERMISSION.WRITE]
} as const

/**
 * @type PermissionValue
 * @description A union type representing all possible permission values.
 */
export type PermissionValue = (typeof PERMISSION)[keyof typeof PERMISSION]
