import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserPrimitivesOptional } from '../domain/User'
import { RoleId } from '../../Role/domain/RoleId'
import { UserRepository } from '../domain/UserRepository'

export class UserFinderAll {
	constructor(private readonly userRepository: UserRepository) {}

	async run({ user }: { user?: JwtPayloadUser }): Promise<UserPrimitivesOptional[]> {
		isSuperAdmin({ user })

		const users = await this.userRepository
			.searchAll()
			// Se bloquea exponer los datos del usuario admin
			.then(res => res.filter(user => user.roleId !== RoleId.Options.ADMIN))
			// Se elimina la propiedad password, por alguna razon con sequelize
			.then(res =>
				res.map(user => {
					const { password, ...rest } = user
					return rest
				})
			)

		return users
	}
}
