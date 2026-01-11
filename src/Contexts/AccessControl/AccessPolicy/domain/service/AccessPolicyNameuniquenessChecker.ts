import { AccessPolicyAlreadyExistsError } from '../errors/AccessPolicyAlreadyExistsError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyRepository } from '../repository/AccessPolicyRepository'
import { type AccessPolicyId } from '../valueObject/AccessPolicyId'

/**
 * Domain service responsible for verifying that a AccessPolicy name is unique within the system.
 */
export class AccessPolicyNameUniquenessChecker {
	/**
	 * Creates an instance of AccessPolicyNameUniquenessChecker.
	 * @param {AccessPolicyRepository} repository - The repository used to check for existing AccessPolicys.
	 */
	constructor(private readonly repository: AccessPolicyRepository) {}

	/**
	 * Ensures that the provided AccessPolicy name is unique.
	 * If an ID is provided in excludeId, it ignores that AccessPolicy (useful for updates).
	 *
	 * @param {string} name - The AccessPolicy name to check.
	 * @param {Primitives<AccessPolicyId>} [excludeId] - The ID of the AccessPolicy to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {AccessPolicyAlreadyExistError} If a AccessPolicy with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<AccessPolicyId>): Promise<void> {
		const existingAccessPolicy = await this.repository.findByName(name)
		if (existingAccessPolicy && existingAccessPolicy.id !== excludeId) {
			throw new AccessPolicyAlreadyExistsError(name)
		}
	}
}
