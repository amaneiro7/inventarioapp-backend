import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { type User } from './User'
import { UserAlreadyExistError } from './UserAlreadyExistError'
import { type UserRepository } from './UserRepository'

/**
 * @description Represents the email address of a user.
 */
export class UserEmail extends StringValueObject {
	private readonly VALID_EMAIL_REGEX =
		/^(?=.*[@](?:bnc\.com\.ve)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidEmail(value)
	}

	private ensureIsValidEmail(value: string): void {
		if (!this.VALID_EMAIL_REGEX.test(value)) {
			throw new InvalidArgumentError(`<${value}> no es un correo electrónico válido.`)
		}
	}

	/**
	 * @description Handles the logic for updating the email field of a user.
	 * @param {{ repository: UserRepository; email?: Primitives<UserEmail>; entity: User }} params The parameters for updating.
	 */
	static async updateEmailField({
		repository,
		email,
		entity
	}: {
		repository: UserRepository
		email?: Primitives<UserEmail>
		entity: User
	}): Promise<void> {
		if (email === undefined || entity.emailValue === email) {
			return
		}
		await UserEmail.ensureEmailDoesNotExit({ repository, email })
		entity.updateEmail(email)
	}

	/**
	 * @description Checks if an email already exists in the repository.
	 * @param {{ repository: UserRepository; email: Primitives<UserEmail> }} params The parameters for the check.
	 * @throws {UserAlreadyExistError} If the email already exists.
	 */
	static async ensureEmailDoesNotExit({
		repository,
		email
	}: {
		repository: UserRepository
		email: Primitives<UserEmail>
	}): Promise<void> {
		const userWithEmail = await repository.searchByEmail(email)
		if (userWithEmail) {
			throw new UserAlreadyExistError(email)
		}
	}
}
