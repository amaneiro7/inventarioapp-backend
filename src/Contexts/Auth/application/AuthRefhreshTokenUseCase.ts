import { type RolePrimitives } from '../../User/Role/domain/Role'
import { type UserPrimitives } from '../../User/user/domain/User'
import { UserDoesNotExistError } from '../../User/user/domain/UserDoesNotExistError'
import { UserId } from '../../User/user/domain/UserId'
import { type UserRepository } from '../../User/user/domain/UserRepository'
import {
	generateAceessTokens,
	type JwtPayloadUser
} from '../domain/GenerateToken'
import { SendUserWithoutPassowrd } from '../domain/SendUserWithoutPassword'

export class AuthRefreshTokenUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async run(jwtToken: JwtPayloadUser) {
		const id = new UserId(jwtToken.sub)

		const user = (await this.userRepository.searchById(
			id.value
		)) as UserPrimitives & { role: RolePrimitives }

		if (!user) {
			throw new UserDoesNotExistError(id.value)
		}

		const accessToken = generateAceessTokens(user)
		const infoUser = SendUserWithoutPassowrd(user, accessToken)

		return {
			infoUser
		}
	}
}
