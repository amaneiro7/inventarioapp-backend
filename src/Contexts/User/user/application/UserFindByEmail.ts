import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'
import { UserEmail } from '../domain/UserEmail'

import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserPrimitives } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'

export class UserFinderByEmail {
	constructor(private readonly userRepository: UserRepository) {}

	async run({
		user,
		email
	}: {
		user?: JwtPayloadUser
		email: string
	}): Promise<Omit<UserPrimitives, 'password'>> {
		isSuperAdmin({ user })
		const userEmail = new UserEmail(email)
		const findUser = await this.userRepository.searchByEmail(
			userEmail.value
		)

		if (findUser === null) {
			throw new UserDoesNotExistError(userEmail.value)
		}

		if (findUser.roleId === RoleId.Options.ADMIN) {
			throw new UserDoesNotExistError('')
		}
		const { password, ...res } = findUser
		return res
	}
}
