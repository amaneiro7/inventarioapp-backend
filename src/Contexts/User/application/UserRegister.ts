import { User, type UserPrimitives } from '../domain/User'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { UserEmail } from '../domain/UserEmail'
import { UserRole } from '../domain/UserRole'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserRepository } from '../domain/UserRepository'
import { type RoleRepository } from '../../Role/domain/RoleRepository'

/**
 * @description Use case for registering a new user.
 */
export class UserRegister {
	private readonly userRepository: UserRepository
	private readonly roleRepository: RoleRepository

	constructor({
		userRepository,
		roleRepository
	}: {
		userRepository: UserRepository
		roleRepository: RoleRepository
	}) {
		this.userRepository = userRepository
		this.roleRepository = roleRepository
	}

	/**
	 * @description Executes the user registration process.
	 * @param {{ payload: UserPrimitives; user?: JwtPayloadUser }} data The data for registering the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully registered.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges, or if the email/role is invalid.
	 * @throws {UserAlreadyExistError} If a user with the provided email already exists.
	 * @throws {RoleDoesNotExistError} If the provided role ID does not exist.
	 */
	async run({ payload, user }: { payload: UserPrimitives; user?: JwtPayloadUser }): Promise<void> {
		isSuperAdmin({ user })

		await UserEmail.ensureEmailDoesNotExit({ repository: this.userRepository, email: payload.email })
		await UserRole.ensureRoleExit({ repository: this.roleRepository, role: payload.roleId })

		const userEntity = User.create(payload)
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
