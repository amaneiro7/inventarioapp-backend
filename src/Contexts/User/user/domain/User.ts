import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { RoleId } from '../../Role/domain/RoleId'
import { type UserParams, type UserPrimitives } from './User.dto'
import { UserId } from './valueObject/UserId' // Corrected path for UserId
import { UserPassword } from './valueObject/UserPassword' // Corrected path for UserPassword
import { EmployeeId } from '../../../employee/Employee/domain/valueObject/EmployeeId'
import { UserStatus, UserStatusEnum } from './valueObject/UserStatus'
import { PasswordChangeAt } from './valueObject/PasswordChangeAt'
import { LastLoginAt } from './valueObject/LastLoginAt'
import { FailedAttemps } from './valueObject/FailedAttemps'
import { LockoutUntil } from './valueObject/LockoutUntil'

/**
 * @class User
 * @description Represents the User domain entity. Encapsulates user-specific business logic
 * and ensures the integrity of user data using Value Objects.
 */
export class User {
	constructor(
		private readonly id: UserId, // The unique identifier for the user.
		private employeeId: EmployeeId, // The ID of the associated employee.
		private roleId: RoleId, // The ID of the user's role.
		private status: UserStatus, // The current status of the user (e.g., ACTIVE, LOCKED).
		private password: UserPassword, // The user's hashed password.
		private passwordChangeAt: PasswordChangeAt, // The timestamp of the last password change.
		private lastLoginAt: LastLoginAt, // The timestamp of the last successful login.
		private failedAttemps: FailedAttemps, // The number of consecutive failed login attempts.
		private lockoutUntil: LockoutUntil // The timestamp until which the user is locked out.
	) {}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new User instance with a randomly generated ID and default password.
	 * @param {object} params The parameters required to create a user.
	 * @returns {User} A new User instance.
	 */
	static create(params: UserParams): User {
		const id = UserId.random()
		const password = new UserPassword(UserPassword.defaultPassword)
		const now = new Date()
		return new User(
			id,
			new EmployeeId(params.employeeId),
			new RoleId(params.roleId),
			new UserStatus(UserStatusEnum.ACTIVE),
			password,
			new PasswordChangeAt(now),
			new LastLoginAt(null),
			new FailedAttemps(0),
			new LockoutUntil(null)
		)
	}

	/**
	 * @static
	 * @method isSuperAdmin
	 * @description Checks if a user has super admin privileges based on their role ID.
	 * @param {{ roleId: Primitives<RoleId> }} params The role ID to check.
	 * @returns {boolean} True if the user is a super admin, false otherwise.
	 */
	static isSuperAdmin({ roleId }: { roleId: Primitives<RoleId> }): boolean {
		const stringRoleId = String(roleId)
		const acceptedAdminRoles = [String(RoleId.Options.ADMIN), String(RoleId.Options.COORD)]
		return acceptedAdminRoles.includes(stringRoleId)
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a User instance from its primitive representation.
	 * @param {UserPrimitives} primitives The primitive representation of the user.
	 * @returns {User} A User instance.
	 */
	static fromPrimitives(primitives: UserPrimitives): User {
		return new User(
			new UserId(primitives.id),
			new EmployeeId(primitives.employeeId),
			new RoleId(primitives.roleId),
			new UserStatus(primitives.status),
			new UserPassword(primitives.password, true), // Assume password from DB is already hashed
			new PasswordChangeAt(primitives.passwordChangeAt),
			new LastLoginAt(primitives.lastLoginAt),
			new FailedAttemps(primitives.failedAttemps),
			new LockoutUntil(primitives.lockoutUntil)
		)
	}

	/**
	 * @method toPrimitives
	 * @description Converts the User instance to its primitive representation.
	 * @returns {UserPrimitives} The primitive representation of the user.
	 */
	toPrimitives(): UserPrimitives {
		return {
			id: this.idValue,
			employeeId: this.employeeIdValue,
			roleId: this.roleValue,
			status: this.statusValue,
			password: this.passwordValue,
			passwordChangeAt: this.passwordChangeAtValue,
			lastLoginAt: this.lastLoginAtValue,
			failedAttemps: this.failedAttempsValue,
			lockoutUntil: this.lockoutUntilValue
		}
	}

	/**
	 * @description Increments the failed login attempts counter.
	 */
	incrementFailedLoginAttempts(): void {
		this.failedAttemps = new FailedAttemps(this.failedAttemps.value + 1)
	}

	/**
	 * @description Locks the user account and sets the lockout period.
	 */
	lockAccount(): void {
		this.status = new UserStatus(UserStatusEnum.LOCKED)
		const lockoutTime = new Date()
		lockoutTime.setMinutes(lockoutTime.getMinutes() + 15) // Lock for 15 minutes
		this.lockoutUntil = new LockoutUntil(lockoutTime)
	}

	/**
	 * @description Resets login attempts and updates last login time on successful authentication.
	 */
	resetLoginAttempts(): void {
		this.failedAttemps = new FailedAttemps(0)
		this.lastLoginAt = new LastLoginAt(new Date())
		this.lockoutUntil = new LockoutUntil(null)
		if (this.statusValue === UserStatusEnum.LOCKED) {
			this.status = new UserStatus(UserStatusEnum.ACTIVE)
		}
	}

	/**
	 * @description Checks if the user account is currently locked.
	 * @returns {boolean} True if the account is locked and the lockout period has not expired.
	 */
	isLocked(): boolean {
		if (this.statusValue !== UserStatusEnum.LOCKED || this.lockoutUntil.value === null) {
			return false
		}
		const isStillLocked = new Date() < this.lockoutUntil.value
		if (!isStillLocked) {
			// If lockout time has passed, unlock the user automatically
			this.status = new UserStatus(UserStatusEnum.ACTIVE)
			this.lockoutUntil = new LockoutUntil(null)
			this.failedAttemps = new FailedAttemps(0)
			return false
		}
		return true
	}

	/**
	 * @method updateRole
	 * @description Updates the role of the user.
	 * @param {Primitives<RoleId>} newRoleId The new role ID for the user.
	 */
	updateRole(newRoleId: Primitives<RoleId>): void {
		this.roleId = new RoleId(newRoleId)
	}

	/**
	 * @method updateStatus
	 * @description Updates the status of the user.
	 * @param {UserStatusEnum} newStatus The new status for the user.
	 */
	updateStatus(newStatus: UserStatusEnum): void {
		this.status = new UserStatus(newStatus)
	}

	/**
	 * @method updatePassword
	 * @description Updates the password of the user.
	 * @param {string} newPassword The new password for the user.
	 */
	updatePassword(newPassword: string): void {
		this.password = new UserPassword(newPassword)
		this.passwordChangeAt = new PasswordChangeAt(new Date())
	}

	/**
	 * @property {string} idValue
	 * @description Getter for the primitive value of the user's ID.
	 */
	get idValue(): Primitives<UserId> {
		return this.id.value
	}

	/**
	 * @property {string} employeeIdValue
	 * @description Getter for the primitive value of the user's associated employee ID.
	 */
	get employeeIdValue(): Primitives<EmployeeId> {
		return this.employeeId.value
	}

	/**
	 * @property {string} roleValue
	 * @description Getter for the primitive value of the user's role ID.
	 */
	get roleValue(): Primitives<RoleId> {
		return this.roleId.value // Corrected type to Primitives<RoleId>
	}

	/**
	 * @property {UserStatusEnum} statusValue
	 * @description Getter for the primitive value of the user's status.
	 */
	get statusValue(): UserStatusEnum {
		return this.status.value
	}

	/**
	 * @property {string} passwordValue
	 * @description Getter for the primitive value of the user's password.
	 */
	get passwordValue(): Primitives<UserPassword> {
		return this.password.value
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
