import { User } from '../domain/entity/User'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

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
	private readonly eventBus: EventBus

	constructor({ userRepository, eventBus }: { userRepository: UserRepository; eventBus: EventBus }) {
		this.userRepository = userRepository
		this.eventBus = eventBus
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

		const foundUser = await this.userRepository.findById(user.sub)

		if (!foundUser) {
			throw new UserDoesNotExistError()
		}

		const userEntity = User.fromPrimitives(foundUser)

		await userEntity.updatePassword(newPassword)

		await this.userRepository.save(userEntity.toPrimitives())
		await this.eventBus.publish(userEntity.pullDomainEvents())
	}
}
