import { UserId } from './valueObject/UserId'
import { EmployeeId } from '../../../employee/Employee/domain/valueObject/EmployeeId'
import { RoleId } from '../../Role/domain/RoleId'
import { UserPassword } from './valueObject/UserPassword'
import { UserStatus, UserStatusEnum } from './valueObject/UserStatus'
import { PasswordChangeAt } from './valueObject/PasswordChangeAt'
import { LastLoginAt } from './valueObject/LastLoginAt'
import { FailedAttemps } from './valueObject/FailedAttemps'
import { LockoutUntil } from './valueObject/LockoutUntil'
import { type UserDto, type UserPrimitives } from './User.dto'

export class User {
	constructor(
		private readonly id: UserId,
		private readonly employeeId: EmployeeId,
		private readonly roleId: RoleId,
		private readonly password: UserPassword,
		private readonly status: UserStatus,
		private readonly passwordChangeAt: PasswordChangeAt,
		private readonly lastLoginAt: LastLoginAt,
		private readonly failedAttemps: FailedAttemps,
		private readonly lockoutUntil: LockoutUntil
	) {}

	static fromPrimitives(plainData: UserDto): User {
		return new User(
			new UserId(plainData.id),
			new EmployeeId(plainData.employeeId),
			new RoleId(plainData.roleId),
			new UserPassword(plainData.password),
			new UserStatus(plainData.status),
			new PasswordChangeAt(plainData.passwordChangeAt),
			new LastLoginAt(plainData.lastLoginAt),
			new FailedAttemps(plainData.failedAttemps),
			new LockoutUntil(plainData.lockoutUntil)
		)
	}

	isLocked(): boolean {
		return this.status.value === UserStatusEnum.LOCKED || this.status.value === UserStatusEnum.SUSPENDED
	}

	toPrimitives(): UserPrimitives {
		return {
			id: this.id.value,
			employeeId: this.employeeId.value,
			roleId: this.roleId.value,
			password: this.password.value,
			status: this.status.value,
			passwordChangeAt: this.passwordChangeAt.value,
			lastLoginAt: this.lastLoginAt?.value,
			failedAttemps: this.failedAttemps.value,
			lockoutUntil: this.lockoutUntil?.value
		}
	}
}
