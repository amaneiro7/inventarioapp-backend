import { PermissionGroupDoesNotExistError } from '../errors/PermissionGroupDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupRepository } from '../repository/PermissionGroupRepository'
import { type PermissionGroupId } from '../valueObject/PermissionGroupId'

export class PermissionGroupExistenceChecker {
	constructor(private readonly repository: PermissionGroupRepository) {}

	/**
	 * Ensures that one or more PermissionGroups exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<PermissionGroupId> | null | undefined | (Primitives<PermissionGroupId> | null | undefined)[]} permissionGroupIds - The PermissionGroup ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all provided non-null PermissionGroups exist.
	 * @throws {PermissionGroupDoesNotExistError} If any of the PermissionGroups do not exist.
	 */
	async ensureExist(
		permissionGroupIds:
			| Primitives<PermissionGroupId>
			| null
			| undefined
			| (Primitives<PermissionGroupId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(permissionGroupIds) ? permissionGroupIds : [permissionGroupIds]
		const uniquePermissionGroupIds = [
			...new Set(ids.filter(id => id !== null && id !== undefined))
		] as Primitives<PermissionGroupId>[]
		if (uniquePermissionGroupIds.length === 0) {
			return
		}

		const foundPermissionGroups = await this.repository.findByIds(uniquePermissionGroupIds)
		if (foundPermissionGroups.length !== uniquePermissionGroupIds.length) {
			const foundNames = new Set(foundPermissionGroups.map(c => c.name))
			const missingNames = uniquePermissionGroupIds.filter(name => !foundNames.has(name))
			throw new PermissionGroupDoesNotExistError(missingNames.join(', '))
		}
	}
}
