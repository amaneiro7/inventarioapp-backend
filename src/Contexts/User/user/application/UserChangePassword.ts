import { User } from '../domain/User'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'

import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { UserId } from '../domain/UserId'
import { PasswordService } from '../domain/PasswordService'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserRepository } from '../domain/UserRepository'

export class UserChangePassword {
	private readonly userRepository: UserRepository
	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

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
		if (payload.sub === undefined) {
			throw new InvalidArgumentError('wrong payload')
		}
		const userId = new UserId(payload.sub).value
		const user = await this.userRepository.searchById(userId)
		if (user === null) {
			throw new UserDoesNotExistError(payload.sub)
		}

		PasswordService.compare(password.toString(), user.password)

		if (newPassword !== reTypePassword) {
			throw new InvalidArgumentError('Passwords do not match')
		}
		const userEntity = User.fromPrimitives(user)
		userEntity.updatePassword(newPassword)
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
