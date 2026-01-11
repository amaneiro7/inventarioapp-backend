import { PermissionDoesNotExistError } from '../errors/PermissionDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionRepository } from '../repository/PermissionRepository'
import { type PermissionId } from '../valueObject/PermissionId'

export class PermissionExistenceChecker {
	constructor(private readonly repository: PermissionRepository) {}

	/**
	 * Ensures that one or more Permissions exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<PermissionId> | null | undefined | (Primitives<PermissionId> | null | undefined)[]} permissionIds - The Permission ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all provided non-null Permissions exist.
	 * @throws {PermissionDoesNotExistError} If any of the Permissions do not exist.
	 */
	async ensureExist(
		permissionIds: Primitives<PermissionId> | null | undefined | (Primitives<PermissionId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(permissionIds) ? permissionIds : [permissionIds]
		const uniquePermissionIds = [
			...new Set(ids.filter(id => id !== null && id !== undefined))
		] as Primitives<PermissionId>[]
		if (uniquePermissionIds.length === 0) {
			return
		}

		const foundPermissions = await this.repository.findByIds(uniquePermissionIds)
		if (foundPermissions.length !== uniquePermissionIds.length) {
			const foundNames = new Set(foundPermissions.map(c => c.name))
			const missingNames = uniquePermissionIds.filter(name => !foundNames.has(name))
			throw new PermissionDoesNotExistError({ permissionName: missingNames.join(', ') })
		}
	}
}
