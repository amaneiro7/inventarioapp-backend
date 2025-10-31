import { UserId } from '../valueObject/UserId'
import { EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { RoleId } from '../../../Role/domain/RoleId'
import { UserPassword } from '../valueObject/UserPassword'
import { UserStatus, UserStatusEnum } from '../valueObject/UserStatus'
import { PasswordChangeAt } from '../valueObject/PasswordChangeAt'
import { LastLoginAt } from '../valueObject/LastLoginAt'
import { FailedAttemps } from '../valueObject/FailedAttemps'
import { LockoutUntil } from '../valueObject/LockoutUntil'
import { type UserAuth, type UserParams, type UserPrimitives } from './User.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

export class User {
	constructor(
		private readonly id: UserId,
		private readonly employeeId: EmployeeId,
		private roleId: RoleId,
		private password: UserPassword,
		private status: UserStatus,
		private passwordChangeAt: PasswordChangeAt,
		private lastLoginAt: LastLoginAt,
		private failedAttemps: FailedAttemps,
		private lockoutUntil: LockoutUntil
	) {}

	static fromPrimitives(plainData: UserAuth): User {
		return new User(
			new UserId(plainData.id),
			new EmployeeId(plainData.employeeId),
			new RoleId(plainData.roleId),
			UserPassword.fromPrimitives(plainData.password),
			new UserStatus(plainData.status),
			new PasswordChangeAt(plainData.passwordChangeAt),
			new LastLoginAt(plainData.lastLoginAt),
			new FailedAttemps(plainData.failedAttemps),
			new LockoutUntil(plainData.lockoutUntil)
		)
	}

	static createFromEmployee(params: Pick<UserParams, 'employeeId' | 'roleId'>): User {
		const id = UserId.random().value
		const { employeeId, roleId } = params
		const password = UserPassword.defaultPassword
		return new User(
			new UserId(id),
			new EmployeeId(employeeId),
			new RoleId(roleId),
			UserPassword.create(password),
			new UserStatus(UserStatusEnum.ACTIVE),
			new PasswordChangeAt(new Date()),
			new LastLoginAt(null),
			new FailedAttemps(0),
			new LockoutUntil(null)
		)
	}

	static isSuperAdmin({ roleId }: { roleId: Primitives<RoleId> }): boolean {
		const parseToStringRole = String(roleId)
		const acceptedAdminRoles = [RoleId.Options.ADMIN, RoleId.Options.COORD]
		return acceptedAdminRoles.includes(parseToStringRole)
	}

	isLocked(): boolean {
		if (this.status.value === UserStatusEnum.SUSPENDED) {
			return true
		}
		if (this.status.value === UserStatusEnum.LOCKED) {
			return this.lockoutUntil.value !== null && this.lockoutUntil.value > new Date()
		}
		return false
	}

	successLogin(): void {
		this.failedAttemps = new FailedAttemps(0)
		this.lockoutUntil = new LockoutUntil(null)
		this.status = new UserStatus(UserStatusEnum.ACTIVE)
		this.lastLoginAt = new LastLoginAt(new Date())
	}

	increaseFailedAttepns(): void {
		this.failedAttemps = new FailedAttemps(this.failedAttemps.value + 1)
		if (this.failedAttemps.value >= 5) {
			this.lockAccount()
		}
	}

	updatePassword(password: string): void {
		this.password = UserPassword.create(password)
		this.passwordChangeAt = new PasswordChangeAt(new Date())
	}

	desactivateAccount(): void {
		this.status = new UserStatus(UserStatusEnum.SUSPENDED)
	}
	reactivateAccount(): void {
		this.status = new UserStatus(UserStatusEnum.ACTIVE)
	}

	private lockAccount(): void {
		this.status = new UserStatus(UserStatusEnum.LOCKED)
		// Bloquea la cuenta por 5 minutos (300000 ms)
		this.lockoutUntil = new LockoutUntil(new Date(Date.now() + 5 * 60 * 1000))
	}

	// Nuevo método para manejar el desbloqueo automático
	unlockIfTimeExpired(): void {
		if (this.status.value === UserStatusEnum.LOCKED && !this.isLocked()) {
			this.status = new UserStatus(UserStatusEnum.ACTIVE)
			this.failedAttemps = new FailedAttemps(0)
		}
	}

	unlockAccount(): void {
		this.status = new UserStatus(UserStatusEnum.ACTIVE)
		this.failedAttemps = new FailedAttemps(0)
		this.lockoutUntil = new LockoutUntil(null)
	}

	isPasswordExpired(daysToExpire: number = 90): boolean {
		if (!this.passwordChangeAtValue) {
			return true
		}
		const expirationDate = new Date(this.passwordChangeAtValue)
		expirationDate.setDate(expirationDate.getDate() + daysToExpire)
		return expirationDate < new Date()
	}
	toPrimitives(): UserPrimitives {
		return {
			id: this.idValue,
			employeeId: this.employeeValue,
			roleId: this.roleValue,
			password: this.passwordValue,
			status: this.statusValue,
			passwordChangeAt: this.passwordChangeAtValue,
			lastLoginAt: this.lastLoginAtValue,
			failedAttemps: this.failedAttempsValue,
			lockoutUntil: this.lockoutUntilValue
		}
	}

	get idValue(): Primitives<UserId> {
		return this.id.value
	}
	get employeeValue(): Primitives<EmployeeId> {
		return this.employeeId.value
	}
	get roleValue(): Primitives<RoleId> {
		return this.roleId.value
	}
	get passwordValue(): Primitives<UserPassword> {
		return this.password.value
	}
	get statusValue(): Primitives<UserStatus> {
		return this.status.value
	}
	get passwordChangeAtValue(): Primitives<PasswordChangeAt> {
		return this.passwordChangeAt.value
	}
	get lastLoginAtValue(): Primitives<LastLoginAt> {
		return this.lastLoginAt.value
	}
	get failedAttempsValue(): Primitives<FailedAttemps> {
		return this.failedAttemps.value
	}
	get lockoutUntilValue(): Primitives<LockoutUntil> {
		return this.lockoutUntil.value
	}
}
