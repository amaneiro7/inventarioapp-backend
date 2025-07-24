import { PasswordService } from '../../User/user/domain/PasswordService'
import { InvalidCredentialsError } from '../domain/InvalidCredentialsError'
import { UserEmail } from '../../User/user/domain/UserEmail'
import { type UserPrimitives } from '../../User/user/domain/User'
import { type UserRepository } from '../../User/user/domain/UserRepository'

/**
 * @class UserLoginLocal
 * @description Handles the local authentication strategy for users. It validates user credentials
 * by checking the email and password against the stored user data.
 */
export class UserLoginLocal {
	private readonly userRepository: UserRepository
	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @method run
	 * @description Executes the user login process.
	 * @param {object} params - The user's login credentials.
	 * @param {string} params.email - The user's email address.
	 * @param {string} params.password - The user's password.
	 * @returns {Promise<UserPrimitives>} A promise that resolves to the user's data if authentication is successful.
	 * @throws {InvalidCredentialsError} If the email does not exist or the password does not match.
	 */
	async run({ email, password }: { email: string; password: string }): Promise<UserPrimitives> {
		const userEmail = new UserEmail(email)

		const user = await this.userRepository.searchByEmail(userEmail.value)

		if (!user) {
			throw new InvalidCredentialsError()
		}

		PasswordService.compare(password, user.password)

		return user
	}
}
