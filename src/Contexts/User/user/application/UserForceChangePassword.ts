import { type UserRepository } from '../domain/Repository/UserRepository'
import { User } from '../domain/entity/User'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'

interface ForceChangePasswordParams {
	newPassword: string
	reTypePassword: string
	user: JwtPayloadUser
}

/**
 * @description Use case for forcing a user to change their expired password.
 * It uses a temporary token for authorization.
 */
export class UserForceChangePassword {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the password change process.
	 * @param {ForceChangePasswordParams} params The parameters for changing the password.
	 * @returns {Promise<void>}
	 * @throws {InvalidArgumentError} If passwords do not match.
	 * @throws {UserDoesNotExistError} If the user from the token is not found.
	 */
	async run({ newPassword, reTypePassword, user }: ForceChangePasswordParams): Promise<void> {
		if (newPassword !== reTypePassword) {
			throw new InvalidArgumentError('Las contraseñas no coinciden.')
		}

		const foundUser = await this.userRepository.searchById(user.sub)

		if (!foundUser) {
			throw new UserDoesNotExistError()
		}

		const userEntity = User.fromPrimitives(foundUser)

		userEntity.updatePassword(newPassword)

		await this.userRepository.save(userEntity.toPrimitives())
	}
}
