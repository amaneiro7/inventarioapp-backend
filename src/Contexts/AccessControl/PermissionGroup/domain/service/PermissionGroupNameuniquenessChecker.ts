import { PermissionGroupAlreadyExistsError } from '../errors/PermissionGroupAlreadyExistsError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupRepository } from '../repository/PermissionGroupRepository'
import { type PermissionGroupId } from '../valueObject/PermissionGroupId'

/**
 * Domain service responsible for verifying that a PermissionGroup name is unique within the system.
 */
export class PermissionGroupNameUniquenessChecker {
	/**
	 * Creates an instance of PermissionGroupNameUniquenessChecker.
	 * @param {PermissionGroupRepository} repository - The repository used to check for existing PermissionGroups.
	 */
	constructor(private readonly repository: PermissionGroupRepository) {}

	/**
	 * Ensures that the provided PermissionGroup name is unique.
	 * If an ID is provided in excludeId, it ignores that PermissionGroup (useful for updates).
	 *
	 * @param {string} name - The PermissionGroup name to check.
	 * @param {Primitives<PermissionGroupId>} [excludeId] - The ID of the PermissionGroup to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {PermissionGroupAlreadyExistError} If a PermissionGroup with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<PermissionGroupId>): Promise<void> {
		const existingPermissionGroup = await this.repository.findByName(name)
		if (existingPermissionGroup && existingPermissionGroup.id !== excludeId) {
			throw new PermissionGroupAlreadyExistsError(name)
		}
	}
}
