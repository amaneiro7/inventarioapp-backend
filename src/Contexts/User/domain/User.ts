import { EmployeeId } from '../../employee/Employee/domain/valueObject/EmployeeId'
import { UserEmail } from './UserEmail'
import { UserId } from './UserId'
import { UserLastName } from './UserLastName'
import { UserName } from './UserName'
import { UserPassword } from './UserPassword'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'

/**
 * @interface UserPrimitives
 * @description Represents the primitive data types of a User entity.
 */
export interface UserPrimitives {
	id: Primitives<UserId>
	email: Primitives<UserEmail>
	name: Primitives<UserName>
	lastName: Primitives<UserLastName>
	password: Primitives<UserPassword>
	employeeId?: Primitives<EmployeeId>
}

/**
 * @type UserPrimitivesOptional
 * @description Represents optional primitive data types for updating a User entity.
 */
export type UserPrimitivesOptional = Partial<UserPrimitives>

/**
 * @class User
 * @description Represents the User domain entity. Encapsulates user-specific business logic
 * and ensures the integrity of user data using Value Objects.
 */
export class User {
	constructor(
		private readonly id: UserId,
		private email: UserEmail,
		private name: UserName,
		private lastName: UserLastName,
		private password: UserPassword,
		private employeeId?: EmployeeId
	) {}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new User instance with a randomly generated ID and default password.
	 * @param {object} params The parameters required to create a user.
	 * @returns {User} A new User instance.
	 */
	static create({
		email,
		name,
		lastName,
		employeeId
	}: Omit<UserPrimitives, 'id' | 'password' | 'userSecret' | 'roleId'>): User {
		const id = UserId.random()
		const password = UserPassword.defaultPassword
		return new User(
			id,
			new UserEmail(email),
			new UserName(name),
			new UserLastName(lastName),
			new UserPassword(password),
			employeeId ? new EmployeeId(employeeId) : undefined
		)
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
			new UserEmail(primitives.email),
			new UserName(primitives.name),
			new UserLastName(primitives.lastName),
			new UserPassword(primitives.password),
			primitives.employeeId ? new EmployeeId(primitives.employeeId) : undefined
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
			password: this.passwordValue,
			employeeId: this.employeeIdValue
		}
	}

	/**
	 * @method updateEmail
	 * @description Updates the email of the user.
	 * @param {Primitives<UserEmail>} newEmail The new email for the user.
	 */
	updateEmail(newEmail: Primitives<UserEmail>): void {
		this.email = new UserEmail(newEmail)
	}

	/**
	 * @method updateName
	 * @description Updates the first name of the user.
	 * @param {Primitives<UserName>} newName The new first name for the user.
	 */
	updateName(newName: Primitives<UserName>): void {
		this.name = new UserName(newName)
	}

	/**
	 * @method updateLastName
	 * @description Updates the last name of the user.
	 * @param {Primitives<UserLastName>} newLastName The new last name for the user.
	 */
	updateLastName(newLastName: Primitives<UserLastName>): void {
		this.lastName = new UserLastName(newLastName)
	}

	/**
	 * @method updatePassword
	 * @description Updates the password of the user.
	 * @param {Primitives<UserPassword>} newPassword The new password for the user.
	 */
	updatePassword(newPassword: Primitives<UserPassword>): void {
		this.password = new UserPassword(newPassword)
	}

	updateEmployeeId(newEmployeeId: Primitives<EmployeeId>): void {
		this.employeeId = new EmployeeId(newEmployeeId)
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
	 * @property {string} passwordValue
	 * @description Getter for the primitive value of the user's password.
	 */
	get passwordValue(): Primitives<UserPassword> {
		return this.password.value
	}

	get employeeIdValue(): Primitives<EmployeeId> | undefined {
		return this.employeeId?.value
	}
}
