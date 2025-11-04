import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UserId } from '../valueObject/UserId'
import { type EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { type UserStatus } from '../valueObject/UserStatus'
import { type UserPassword } from '../valueObject/UserPassword'
import { type PasswordChangeAt } from '../valueObject/PasswordChangeAt'
import { type LastLoginAt } from '../valueObject/LastLoginAt'
import { type FailedAttemps } from '../valueObject/FailedAttemps'
import { type LockoutUntil } from '../valueObject/LockoutUntil'
import { type RoleId } from '../../../Role/domain/RoleId'
import { type RoleDto } from '../../../Role/domain/Role.dto'
import { type EmployeeDto } from '../../../../employee/Employee/domain/entity/Employee.dto'
import { type LastLoginIp } from '../valueObject/LastLoginIp'

/**
 * @interface UserAuth
 * @description Defines the core properties of a User entity for internal use (e.g., authentication).
 * This interface includes sensitive data.
 */
export interface UserAuth {
	id: Primitives<UserId>
	employeeId: Primitives<EmployeeId>
	roleId: Primitives<RoleId> // Temporal
	status: Primitives<UserStatus>
	password: Primitives<UserPassword>
	passwordChangeAt: Primitives<PasswordChangeAt>
	lastLoginAt: Primitives<LastLoginAt>
	lastLoginIp: Primitives<LastLoginIp>
	failedAttemps: Primitives<FailedAttemps>
	lockoutUntil: Primitives<LockoutUntil>
}

/**
 * @type UserPrimitives
 * @description Represents the primitive, serializable state of a User entity.
 */
export type UserPrimitives = UserAuth
export type UserParams = Omit<UserAuth, 'id'>

/**
 * @interface User
 * @description Represents the public-facing User entity, safe to expose via API.
 * It omits sensitive data like the password.
 */
export interface User extends UserAuth {
	role: RoleDto
	passwordExpired?: boolean
	employee: Omit<
		EmployeeDto,
		'location' | 'directiva' | 'vicepresidenciaEjecutiva' | 'vicepresidencia' | 'departamento' | 'cargo'
	>
}

export type UserDto = Omit<User & { userName: EmployeeDto['userName'] }, 'password' | 'failedAttemps' | 'lockoutUntil'>
