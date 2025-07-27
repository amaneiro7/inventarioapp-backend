import { RoleId } from '../../Role/domain/RoleId'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { RoleDoesNotExistError } from '../../Role/domain/RoleDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type User } from './User'
import { type RoleRepository } from '../../Role/domain/RoleRepository'

/**
 * @description Represents the role of a user.
 */
export class UserRole extends RoleId {
	constructor(value: Primitives<RoleId>) {
		super(value)
		this.ensureIsNotAdminRole(value)
	}

	private ensureIsNotAdminRole(value: Primitives<RoleId>): void {
		if (value === RoleId.Options.ADMIN) {
			throw new InvalidArgumentError('No se puede asignar un rol de administrador directamente.')
		}
	}

	/**
	 * @description Handles the logic for updating the role field of a user.
	 * @param {{ repository: RoleRepository; role?: Primitives<RoleId>; entity: User }} params The parameters for updating.
	 */
	static async updateStatusField({
		repository,
		role,
		entity
	}: {
		repository: RoleRepository
		role?: Primitives<RoleId>
		entity: User
	}): Promise<void> {
		if (role === undefined || entity.roleValue === role) {
			return
		}
		await UserRole.ensureRoleExit({ repository, role })
		entity.updateRole(role)
	}

	/**
	 * @description Ensures that the specified role exists in the repository.
	 * @param repository The repository to search in.
	 * @param role The ID of the role to check.
	 * @throws {RoleDoesNotExistError} If the role does not exist.
	 */
	static async ensureRoleExit({
		repository,
		role
	}: {
		repository: RoleRepository
		role: Primitives<RoleId>
	}): Promise<void> {
		const foundRole = await repository.searchById(role)
		if (!foundRole) {
			throw new RoleDoesNotExistError()
		}
	}
}
