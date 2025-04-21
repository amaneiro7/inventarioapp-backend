import { type RolePrimitives } from '../../User/Role/domain/Role'
import { type UserPrimitives } from '../../User/user/domain/User'
import { generateAceessToken, generateRefreshToken } from '../domain/GenerateToken'
import { SendUserWithoutPassowrd } from '../domain/SendUserWithoutPassword'

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
