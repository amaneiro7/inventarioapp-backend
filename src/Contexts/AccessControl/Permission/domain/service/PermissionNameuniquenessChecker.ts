import { PermissionAlreadyExistsError } from '../errors/PermissionAlreadyExistsError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionRepository } from '../repository/PermissionRepository'
import { type PermissionId } from '../valueObject/PermissionId'

/**
 * Domain service responsible for verifying that a Permission name is unique within the system.
 */
export class PermissionNameUniquenessChecker {
	/**
	 * Creates an instance of PermissionNameUniquenessChecker.
	 * @param {PermissionRepository} repository - The repository used to check for existing Permissions.
	 */
	constructor(private readonly repository: PermissionRepository) {}

	/**
	 * Ensures that the provided Permission name is unique.
	 * If an ID is provided in excludeId, it ignores that Permission (useful for updates).
	 *
	 * @param {string} name - The Permission name to check.
	 * @param {Primitives<PermissionId>} [excludeId] - The ID of the Permission to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {PermissionAlreadyExistError} If a Permission with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<PermissionId>): Promise<void> {
		const existingPermission = await this.repository.findByName(name)
		if (existingPermission && existingPermission.id !== excludeId) {
			throw new PermissionAlreadyExistsError(name)
		}
	}
}
