import { PasswordService } from '../../User/user/domain/PasswordService'
import { InvalidCredentialsError } from '../domain/InvalidCredentialsError'
import { UserEmail } from '../../User/user/domain/UserEmail'
import { type UserPrimitives } from '../../User/user/domain/User'
import { type UserRepository } from '../../User/user/domain/UserRepository'

export class UserLoginLocal {
	constructor(private readonly userRepository: UserRepository) {}

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
