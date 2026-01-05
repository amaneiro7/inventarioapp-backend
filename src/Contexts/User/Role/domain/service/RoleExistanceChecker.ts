import { RoleDoesNotExistError } from '../../../Role/domain/errors/RoleDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RoleRepository } from '../../../Role/domain/repository/RoleRepository'
import { type RoleId } from '../../../Role/domain/valueObject/RoleId'

export class RoleExistenceChecker {
	constructor(private readonly repository: RoleRepository) {}

	/**
	 * Ensures that a role exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<RoleId>} roleId - The role ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the role exists.
	 * @throws {RoleDoesNotExistError} If the role does not exist.
	 */
	async ensureExist(roleId: Primitives<RoleId> | null | undefined): Promise<void> {
		if (roleId === null || roleId === undefined) {
			return
		}

		const isRoleExist = await this.repository.findById(roleId)
		if (!isRoleExist) {
			throw new RoleDoesNotExistError()
		}
	}
}
