import { User, type UserPrimitives } from '../domain/User'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { UserEmail } from '../domain/UserEmail'
import { UserRole } from '../domain/UserRole'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserRepository } from '../domain/UserRepository'
import { type RoleRepository } from '../../Role/domain/RoleRepository'

export class UserRegister {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly roleRepository: RoleRepository
	) {}

	async run({ payload, user }: { payload: UserPrimitives; user?: JwtPayloadUser }): Promise<void> {
		// Primero se valida si el usuario que esta realizando esta accion tiene permisos
		isSuperAdmin({ user })

		// se valida que el correo no exista
		await UserEmail.ensureEmailDoesNotExit({
			repository: this.userRepository,
			email: payload.email
		})
		// se valida que el roleId exista
		await UserRole.ensureRoleExit({
			repository: this.roleRepository,
			role: payload.roleId
		})

		// se instancia el usuario
		const userEntity = User.create(payload)

		// se persiste el usuario en el repositorio
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
