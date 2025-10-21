import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserId } from './valueObject/UserId'
import { type EmployeeId } from '../../../employee/Employee/domain/valueObject/EmployeeId'
import { type UserStatus } from './valueObject/UserStatus'
import { type UserPassword } from './valueObject/UserPassword'
import { type PasswordChangeAt } from './valueObject/PasswordChangeAt'
import { type LastLoginAt } from './valueObject/LastLoginAt'
import { type FailedAttemps } from './valueObject/FailedAttemps'
import { type LockoutUntil } from './valueObject/LockoutUntil'
import { type RoleId } from '../../Role/domain/RoleId'
import { type RoleDto } from '../../Role/domain/Role.dto'
import { type EmployeeDto } from '../../../employee/Employee/domain/entity/Employee.dto'

/**
 * @interface User
 * @description Defines the core properties of a User entity.
 */
export interface User {
	id: Primitives<UserId>
	employeeId: Primitives<EmployeeId>
	roleId: Primitives<RoleId> // Temporal
	status: Primitives<UserStatus>
	password: Primitives<UserPassword>
	passwordChangeAt: Primitives<PasswordChangeAt>
	lastLoginAt: Primitives<LastLoginAt>
	failedAttemps: Primitives<FailedAttemps>
	lockoutUntil: Primitives<LockoutUntil>
}
// export interface User {
// 	id: Primitives<UserId>
// 	email: Primitives<UserEmail>
// 	name: Primitives<UserName>
// 	lastName: Primitives<UserLastName>
// 	password: Primitives<UserPassword>
// 	employeeId: Primitives<EmployeeId>[]
// }

/**
 * @type UserPrimitives
 * @description Represents the primitive, serializable state of a User entity.
 */
export type UserPrimitives = User
export type UserParams = Omit<User, 'id'>

/**
 * @type UserDto
 * @description Represents a Data Transfer Object (DTO) for the User entity.
 */
export type UserDto = User & {
	role: RoleDto
	employee: EmployeeDto
}
