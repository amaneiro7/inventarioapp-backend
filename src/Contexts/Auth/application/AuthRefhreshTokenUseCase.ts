import { UserDoesNotExistError } from '../../User/user/domain/UserDoesNotExistError'
import { UserId } from '../../User/user/domain/UserId'
import { generateAceessToken, type JwtPayloadUser } from '../domain/GenerateToken'
import { buildAuthResponse } from '../domain/buildAuthResponse'
import { type RolePrimitives } from '../../User/Role/domain/Role.dto'
import { type UserPrimitives } from '../../User/user/domain/User'
import { type UserRepository } from '../../User/user/domain/UserRepository'

export class AuthRefreshTokenUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async run(jwtToken: JwtPayloadUser) {
		const id = new UserId(jwtToken.sub)

		const user = (await this.userRepository.searchById(id.value)) as UserPrimitives & { role: RolePrimitives }

		if (!user) {
			throw new UserDoesNotExistError(id.value)
		}

		const accessToken = generateAceessToken(user)
		const authResponse = buildAuthResponse(user, accessToken)

		return authResponse
	}
}
