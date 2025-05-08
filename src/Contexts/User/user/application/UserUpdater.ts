import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { User, type UserPrimitives } from '../domain/User'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { UserId } from '../domain/UserId'
import { UserEmail } from '../domain/UserEmail'
import { UserLastName } from '../domain/UserLastName'
import { UserName } from '../domain/UserName'
import { UserRole } from '../domain/UserRole'

import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type RoleRepository } from '../../Role/domain/RoleRepository'
import { type UserRepository } from '../domain/UserRepository'

interface Payload extends Omit<UserPrimitives, 'id' | 'password'> {}
export class UserUpdater {
	constructor(private readonly userRepository: UserRepository, private readonly roleRepository: RoleRepository) {}

	async run({ user, id, payload }: { user?: JwtPayloadUser; id: string; payload: Partial<Payload> }): Promise<void> {
		// se valida que el usuario que esta realizando esta operacion tiene privilegios
		isSuperAdmin({ user })

		// se busca el usuario al cual se le va a actualizar la contraseña
		const userId = new UserId(id).value
		const userToUpdated = await this.userRepository.searchById(userId)

		// Si no existe, arroja un error
		if (userToUpdated === null) {
			throw new UserDoesNotExistError(id)
		}
		// se instancia el usuario, se aplica la contraseña por defecto y se actualiza la contraseña
		const userEntity = User.fromPrimitives(userToUpdated)

		await UserName.updateNameField({
			entity: userEntity,
			name: payload.name
		})
		await UserLastName.updateLastNameField({
			entity: userEntity,
			lastName: payload.lastName
		})
		await UserEmail.updateEmailField({
			repository: this.userRepository,
			entity: userEntity,
			email: payload.email
		})
		await UserRole.updateStatusField({
			repository: this.roleRepository,
			entity: userEntity,
			role: payload.roleId
		})

		await this.userRepository.save(userEntity.toPrimitives())
	}
}
