import { PasswordService } from '../../User/user/domain/PasswordService'
import { UserDoesNotExistError } from '../../User/user/domain/UserDoesNotExistError'
import { UserEmail } from '../../User/user/domain/UserEmail'
import { type UserPrimitives } from '../../User/user/domain/User'
import { type UserRepository } from '../../User/user/domain/UserRepository'

export class UserLoginLocal {
	constructor(private readonly userRepository: UserRepository) {}

	async run({
		email,
		password
	}: {
		email: string
		password: string
	}): Promise<UserPrimitives> {
		const userEmail = new UserEmail(email)

		const user = await this.userRepository.searchByEmail(userEmail.value)

		if (!user) {
			throw new UserDoesNotExistError(email)
		}

		PasswordService.compare(password, user.password)

		return user
	}
}
