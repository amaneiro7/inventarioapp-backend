import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { RoleId } from '../../Role/domain/RoleId'
import { UserEmail } from './UserEmail'
import { UserId } from './UserId'
import { UserLastName } from './UserLastName'
import { UserName } from './UserName'
import { UserPassword } from './UserPassword'

/**
 * @interface UserPrimitives
 * @description Represents the primitive data types of a User entity.
 * Includes `userSecret` for refresh token rotation and invalidation.
 */
export interface UserPrimitives {
	id: Primitives<UserId>
	email: Primitives<UserEmail>
	name: Primitives<UserName>
	roleId: Primitives<RoleId>
	lastName: Primitives<UserLastName>
	password: Primitives<UserPassword>
}

/**
 * @interface UserPrimitivesOptional
 * @description Represents optional primitive data types for updating a User entity.
 */
export type UserPrimitivesOptional = Partial<UserPrimitives>

/**
 * @class User
 * @description Represents the User domain entity. Encapsulates user-specific business logic
 * and ensures the integrity of user data using Value Objects.
 */
export class User {
	/**
	 * @private
	 * @param {UserId} id - The unique identifier of the user.
	 * @param {UserEmail} email - The email address of the user.
	 * @param {UserName} name - The first name of the user.
	 * @param {RoleId} roleId - The role ID of the user.
	 * @param {UserLastName} lastName - The last name of the user.
	 * @param {UserPassword} password - The hashed password of the user.
	 */
	constructor(
		private readonly id: UserId,
		private email: UserEmail,
		private name: UserName,
		private roleId: RoleId,
		private lastName: UserLastName,
		private password: UserPassword
	) {}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new User instance with a randomly generated ID and default password.
	 * @param {object} params - The parameters required to create a user.
	 * @param {Primitives<UserEmail>} params.email - The user's email.
	 * @param {Primitives<UserName>} params.name - The user's first name.
	 * @param {Primitives<UserLastName>} params.lastName - The user's last name.
	 * @param {Primitives<RoleId>} params.roleId - The user's role ID.
	 * @returns {User} A new User instance.
	 */
	static create({ email, name, lastName, roleId }: Omit<UserPrimitives, 'id' | 'password' | 'userSecret'>): User {
		const id = UserId.random().value
		const password = UserPassword.defaultPassword
		return new User(
			new UserId(id),
			new UserEmail(email),
			new UserName(name),
			new RoleId(roleId),
			new UserLastName(lastName),
			new UserPassword(password)
		)
	}

	/**
	 * @static
	 * @method isSuperAdmin
	 * @description Checks if a user has super admin privileges based on their role ID.
	 * @param {object} params - The parameters for the check.
	 * @param {Primitives<RoleId>} params.roleId - The role ID to check.
	 * @returns {boolean} True if the user is a super admin, false otherwise.
	 */
	static isSuperAdmin({ roleId }: { roleId: Primitives<RoleId> }): boolean {
		const acceptedAdminRoles = [RoleId.Options.ADMIN, RoleId.Options.COORD]
		return acceptedAdminRoles.includes(roleId)
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a User instance from its primitive representation.
	 * @param {UserPrimitives} primitives - The primitive representation of the user.
	 * @returns {User} A User instance.
	 */
	static fromPrimitives(primitives: UserPrimitives): User {
		return new User(
			new UserId(primitives.id),
			new UserEmail(primitives.email),
			new UserName(primitives.name),
			new RoleId(primitives.roleId),
			new UserLastName(primitives.lastName),
			new UserPassword(primitives.password)
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
			name: this.nameValue,
			lastName: this.lastNameValue,
			email: this.emailValue,
			roleId: this.roleValue,
			password: this.passwordValue
		}
	}

	/**
	 * @method updateEmail
	 * @description Updates the email of the user.
	 * @param {Primitives<UserEmail>} newEmail - The new email for the user.
	 */
	updateEmail(newEmail: Primitives<UserEmail>): void {
		this.email = new UserEmail(newEmail)
	}

	/**
	 * @method updateName
	 * @description Updates the first name of the user.
	 * @param {Primitives<UserName>} newName - The new first name for the user.
	 */
	updateName(newName: Primitives<UserName>): void {
		this.name = new UserName(newName)
	}

	/**
	 * @method updateLastName
	 * @description Updates the last name of the user.
	 * @param {Primitives<UserLastName>} newLastName - The new last name for the user.
	 */
	updateLastName(newLastName: Primitives<UserLastName>): void {
		this.lastName = new UserLastName(newLastName)
	}

	/**
	 * @method updateRole
	 * @description Updates the role of the user.
	 * @param {Primitives<RoleId>} newRole - The new role ID for the user.
	 */
	updateRole(newRole: Primitives<RoleId>): void {
		this.roleId = new RoleId(newRole)
	}

	/**
	 * @method updatePassword
	 * @description Updates the password of the user.
	 * @param {Primitives<UserPassword>} newPassword - The new password for the user.
	 */
	updatePassword(newPassword: Primitives<UserPassword>): void {
		this.password = new UserPassword(newPassword)
	}

	/**
	 * @property {string} idValue
	 * @description Getter for the primitive value of the user's ID.
	 */
	get idValue(): Primitives<UserId> {
		return this.id.value
	}

	/**
	 * @property {string} emailValue
	 * @description Getter for the primitive value of the user's email.
	 */
	get emailValue(): Primitives<UserEmail> {
		return this.email.value
	}

	/**
	 * @property {string} nameValue
	 * @description Getter for the primitive value of the user's first name.
	 */
	get nameValue(): Primitives<UserName> {
		return this.name.value
	}

	/**
	 * @property {string} lastNameValue
	 * @description Getter for the primitive value of the user's last name.
	 */
	get lastNameValue(): Primitives<UserLastName> {
		return this.lastName.value
	}

	/**
	 * @property {string} roleValue
	 * @description Getter for the primitive value of the user's role ID.
	 */
	get roleValue(): Primitives<RoleId> {
		return this.roleId.value
	}

	/**
	 * @property {string} passwordValue
	 * @description Getter for the primitive value of the user's password.
	 */
	get passwordValue(): Primitives<UserPassword> {
		return this.password.value
	}
}
