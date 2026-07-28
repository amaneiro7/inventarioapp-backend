import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { UserId } from '../valueObject/UserId'
import type { EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import type { UserStatus } from '../valueObject/UserStatus'
import type { UserPassword } from '../valueObject/UserPassword'
import type { PasswordChangeAt } from '../valueObject/PasswordChangeAt'
import type { LastLoginAt } from '../valueObject/LastLoginAt'
import type { FailedAttemps } from '../valueObject/FailedAttemps'
import type { LockoutUntil } from '../valueObject/LockoutUntil'
import type { RoleDto } from '../../../Role/domain/entity/Role.dto'
import type { EmployeeDto } from '../../../../employee/Employee/domain/entity/Employee.dto'
import type { LastLoginIp } from '../valueObject/LastLoginIp'
import type { PasswordNeverExpires } from '../valueObject/PasswordNeverExpires'
import type { PasswordHistory } from '../valueObject/PasswordHistory'
import type { CargoDto } from '../../../../employee/Cargo/domain/entity/Cargo.dto'
import type { UnidadDto } from '../../../../employee/Unidad/domain/entity/Unidad.dto'
import type { LocationDto } from '../../../../Location/Location/domain/entity/Location.dto'
import type { HistoryDto } from '../../../../History/domain/entity/History.dto'

/**
 * @interface UserAuth
 * @description Defines the core properties of a User entity for internal use (e.g., authentication).
 * This interface includes sensitive data.
 */
export interface UserAuth {
	id: Primitives<UserId>
	employeeId: Primitives<EmployeeId>
	roleId: string // por un error al crear la base de datos, se creo como number o no he podido convetirlo a string
	status: Primitives<UserStatus>
	password: Primitives<UserPassword>
	passwordChangeAt: Primitives<PasswordChangeAt>
	passwordNeverExpires: Primitives<PasswordNeverExpires>
	lastLoginAt: Primitives<LastLoginAt>
	lastLoginIp: Primitives<LastLoginIp>
	failedAttemps: Primitives<FailedAttemps>
	lockoutUntil: Primitives<LockoutUntil>
	passwordHistory: Primitives<PasswordHistory>
}

/**
 *type  @ UserPrimitives
 * @description Represents the primitive, serializable state of a User entity.
 */
export type UserPrimitives = UserAuth
export type UserParams = Omit<UserAuth, 'id'>

/**
 * @interface User
 * @description Represents the public-facing User entity, safe to expose via API.
 * It omits sensitive data like the password.
 */

interface EmployeeWithOptionalRelations extends Omit<EmployeeDto, 'location' | 'unidad' | 'cargo' | 'history'> {
	location?: LocationDto
	unidad?: Omit<UnidadDto, 'cargos'>
	cargo?: Omit<CargoDto, 'unidades'>
	history?: HistoryDto[] | null
}
export interface User extends UserAuth {
	role: RoleDto
	passwordExpired?: boolean
	employee: EmployeeWithOptionalRelations
}

export type UserDto = Omit<
	User & { userName: EmployeeDto['userName'] },
	'password' | 'failedAttemps' | 'lockoutUntil' | 'passwordHistory'
>
