import { User } from '../domain/User'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { UserId } from '../domain/UserId'
import { PasswordService } from '../domain/PasswordService'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserRepository } from '../domain/UserRepository'

/**
 * @description Use case for changing a user's password.
 */
export class UserChangePassword {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the password change process.
	 * @param {{ payload: JwtPayloadUser; password: string; newPassword: string; reTypePassword: string }} data The data for changing the password.
	 * @returns {Promise<void>} A promise that resolves when the password is successfully changed.
	 * @throws {InvalidArgumentError} If the user payload is invalid, passwords do not match, or old password is incorrect.
	 * @throws {UserDoesNotExistError} If the user does not exist.
	 */
	async run({
		payload,
		password,
		newPassword,
		reTypePassword
	}: {
		payload: JwtPayloadUser
		password: string
		newPassword: string
		reTypePassword: string
	}): Promise<void> {
		if (!payload.sub) {
			throw new InvalidArgumentError('Invalid user payload.')
		}

		const userId = new UserId(payload.sub).value
		const user = await this.userRepository.searchById(userId)

		if (!user) {
			throw new UserDoesNotExistError(payload.sub)
		}

		PasswordService.compare(password, user.password)

		if (newPassword !== reTypePassword) {
			throw new InvalidArgumentError('Las contraseñas no coinciden.')
		}

		const userEntity = User.fromPrimitives(user)
		userEntity.updatePassword(newPassword)
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
