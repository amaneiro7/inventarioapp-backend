import { UserId } from '../domain/UserId'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'

import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserPrimitives } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'

export class UserFinder {
	private readonly userRepository: UserRepository
	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	async run({
		id,
		user
	}: {
		user?: JwtPayloadUser
		id: Primitives<UserId>
	}): Promise<Omit<UserPrimitives, 'password'>> {
		isSuperAdmin({ user })
		const userId = new UserId(id).value
		const findUser = await this.userRepository.searchById(userId)

		if (findUser === null) {
			throw new UserDoesNotExistError(userId)
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
