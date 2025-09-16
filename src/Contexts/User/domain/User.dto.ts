import { type EmployeeId } from '../../employee/Employee/domain/valueObject/EmployeeId'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type LastLoginAt } from './LastLoginAt'
import { type UserId } from './UserId'
import { type UserPassword } from './UserPassword'
import { type UserStatus } from './UserStatus'

/**
 * @interface User
 * @description Defines the core properties of a User entity.
 */
export interface User {
	id: Primitives<UserId>
	lastLoginAt?: Primitives<LastLoginAt>
	status: Primitives<UserStatus>
	password: Primitives<UserPassword>
	employeeId?: Primitives<EmployeeId>
}

/**
 * @type UserPrimitives
 * @description Represents the primitive, serializable state of a User entity.
 */
export type UserPrimitives = User

/**
 * @type UserDto
 * @description Represents a Data Transfer Object (DTO) for the User entity.
 */
export type UserDto = User
