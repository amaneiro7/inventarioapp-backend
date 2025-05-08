import { generateAceessToken, generateRefreshToken } from '../domain/GenerateToken'
import { SendUserWithoutPassowrd } from '../domain/SendUserWithoutPassword'
import { type RolePrimitives } from '../../User/Role/domain/Role.dto'
import { type UserPrimitives } from '../../User/user/domain/User'

type ReqUser = UserPrimitives & {
	role: RolePrimitives
}

export class AuthUseCase {
	public static async authenticaUser(user: ReqUser) {
		const accessToken = generateAceessToken(user)
		const refreshToken = generateRefreshToken(user)
		const infoUser = SendUserWithoutPassowrd(user, accessToken)

		return {
			refreshToken,
			infoUser
		}
	}
}
