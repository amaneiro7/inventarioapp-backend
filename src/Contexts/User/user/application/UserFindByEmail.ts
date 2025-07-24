import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'
import { UserEmail } from '../domain/UserEmail'

import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserPrimitives } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export class UserFinderByEmail {
	private readonly userRepository: UserRepository
	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	async run({
		user,
		email
	}: {
		user?: JwtPayloadUser
		email: Primitives<UserEmail>
	}): Promise<Omit<UserPrimitives, 'password'>> {
		isSuperAdmin({ user })
		const userEmail = new UserEmail(email)
		const findUser = await this.userRepository.searchByEmail(userEmail.value)

		if (findUser === null) {
			throw new UserDoesNotExistError(userEmail.value)
		}

		if (findUser.roleId === RoleId.Options.ADMIN) {
			throw new UserDoesNotExistError('')
		}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...res } = findUser
		return {
			...res,
			roleId: `${res.roleId}`
		}
	}
}
