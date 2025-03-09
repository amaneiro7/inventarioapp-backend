import { User } from '../domain/User'
import { UserId } from '../domain/UserId'
import { UserPassword } from '../domain/UserPassword'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { type UserRepository } from '../domain/UserRepository'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export class UserResetPassword {
	constructor(private readonly userRepository: UserRepository) {}

	async run({ id, user }: { id: Primitives<UserId>; user?: JwtPayloadUser }): Promise<void> {
		// se valida que el usuario que esta realizando esta operacion tiene privilegios
		isSuperAdmin({ user })

		// se busca el usuario al cual se le va a actualizar la contraseña
		const userId = new UserId(id).value
		const userToResetPassword = await this.userRepository.searchById(userId)

		// Si no existe, arroja un error
		if (userToResetPassword === null) {
			throw new UserDoesNotExistError(id)
		}

		// se instancia el usuario, se aplica la contraseña por defecto y se actualiza la contraseña
		const userEntity = User.fromPrimitives(userToResetPassword)
		const newPassword = UserPassword.defaultPassword
		userEntity.updatePassword(newPassword)

		// se guarda en base de datos la nueva contraseña
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
