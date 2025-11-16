import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserDto } from '../domain/entity/User.dto' // Use User.dto
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserId } from '../domain/valueObject/UserId'

/**
 * @description Use case for finding a user by their email address.
 */
export class UserFinder {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the user finding process by email.
	 * @param {{ user?: JwtPayloadUser; email: Primitives<EmployeeEmail> }} params The parameters for finding the user.
	 * @returns {Promise<UserDto>} A promise that resolves to the found user's primitive data (excluding password).
	 * @throws {UserDoesNotExistError} If the user is not found or if the user is an admin (to prevent exposing admin data).
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 */
	async run({
		user,
		id
	}: {
		user?: JwtPayloadUser // User performing the action
		id: Primitives<UserId> // Id to search for
	}): Promise<UserDto> {
		// Return UserDto
		isSuperAdmin({ user })

		// 1. Find the employee by email
		const foundUser = await this.userRepository.findById(id)

		if (!foundUser) {
			throw new UserDoesNotExistError(`No se encontró un usuario asociado al empleado con ID '${id}'.`)
		}

		if (foundUser.roleId === RoleId.Options.ADMIN) {
			throw new UserDoesNotExistError('Usuario no encontrado.') // Generic error to hide admin existence
		}

		return {
			id: foundUser.id,
			userName: foundUser.employee.userName,
			employeeId: foundUser.employeeId,
			roleId: foundUser.roleId,
			status: foundUser.status,
			passwordChangeAt: foundUser.passwordChangeAt,
			passwordNeverExpires: foundUser.passwordNeverExpires,
			lastLoginAt: foundUser.lastLoginAt,
			lastLoginIp: foundUser.lastLoginIp,
			employee: foundUser.employee,
			role: foundUser.role
		}
	}
}
