import { UserId } from '../valueObject/UserId'
import { EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { RoleId } from '../../../Role/domain/RoleId'
import { UserPassword } from '../valueObject/UserPassword'
import { UserStatus, UserStatusEnum } from '../valueObject/UserStatus'
import { PasswordChangeAt } from '../valueObject/PasswordChangeAt'
import { LastLoginIp } from '../valueObject/LastLoginIp'
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
		private lastLoginIp: LastLoginIp,
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
			new LastLoginIp(plainData.lastLoginIp),
			new FailedAttemps(plainData.failedAttemps),
			new LockoutUntil(plainData.lockoutUntil)
		)
	}

	static createFromEmployee(params: Pick<UserParams, 'employeeId' | 'roleId' | 'password'>): User {
		const id = UserId.random().value
		const { employeeId, roleId, password } = params
		return new User(
			new UserId(id),
			new EmployeeId(employeeId),
			new RoleId(roleId),
			UserPassword.create(password),
			new UserStatus(UserStatusEnum.ACTIVE),
			new PasswordChangeAt(new Date()),
			new LastLoginAt(null),
			new LastLoginIp(null),
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

	successLogin(ipAddress?: Primitives<LastLoginIp>): void {
		this.failedAttemps = new FailedAttemps(0)
		this.lockoutUntil = new LockoutUntil(null)
		this.status = new UserStatus(UserStatusEnum.ACTIVE)
		this.lastLoginAt = new LastLoginAt(new Date())
		this.lastLoginIp = new LastLoginIp(ipAddress ?? null)
	}

	increaseFailedAttepns({
		lockoutTimeInMinutes,
		maxAttempts
	}: {
		lockoutTimeInMinutes: number
		maxAttempts: number
	}): void {
		this.failedAttemps = new FailedAttemps(this.failedAttemps.value + 1)
		if (this.failedAttemps.value >= maxAttempts) {
			this.lockAccount({ lockoutTimeInMinutes })
		}
	}

	updatePassword(password: string): void {
		this.password = UserPassword.create(password)
		this.passwordChangeAt = new PasswordChangeAt(new Date())
	}

	/**
	 * @description Restablece la contraseña del usuario utilizando un hash preexistente.
	 * No realiza validación de complejidad ni hasheo.
	 * @param {string} hashedPassword - La contraseña ya hasheada.
	 */
	resetPasswordFromHash(hashedPassword: string): void {
		this.password = UserPassword.fromPrimitives(hashedPassword)
		this.passwordChangeAt = new PasswordChangeAt(new Date())
	}
	desactivateAccount(): void {
		this.status = new UserStatus(UserStatusEnum.SUSPENDED)
	}
	reactivateAccount(): void {
		this.status = new UserStatus(UserStatusEnum.ACTIVE)
	}

	private lockAccount({ lockoutTimeInMinutes }: { lockoutTimeInMinutes: number }): void {
		this.status = new UserStatus(UserStatusEnum.LOCKED)
		// Bloquea la cuenta por 5 minutos (300000 ms)
		this.lockoutUntil = new LockoutUntil(new Date(Date.now() + lockoutTimeInMinutes * 60 * 1000))
	}

	// Nuevo método para manejar el desbloqueo automático
	unlockIfTimeExpired(): void {
		// 1. Si no hay fecha de bloqueo, no hay nada que hacer
		if (!this.lockoutUntilValue) {
			return
		}

		// 2. Si la fecha de bloqueo ha expirado (es menor o igual a la fecha actual)
		if (this.lockoutUntilValue <= new Date()) {
			// Ejecutar la accion de desbloqueo:
			this.lockoutUntil = new LockoutUntil(null)
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
			lastLoginIp: this.lastLoginIpValue,
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
	get lastLoginIpValue(): Primitives<LastLoginIp> {
		return this.lastLoginIp.value
	}
	get failedAttempsValue(): Primitives<FailedAttemps> {
		return this.failedAttemps.value
	}
	get lockoutUntilValue(): Primitives<LockoutUntil> {
		return this.lockoutUntil.value
	}
}
