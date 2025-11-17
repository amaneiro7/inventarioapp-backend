import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { AccessPolicyDto } from '../domain/entity/AccessPolicy.dto'
import { AccessPolicyDoesNotExistError } from '../domain/errors/AccessPolicyDoesNotExistError'
import { AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'
import { AccessPolicyId } from '../domain/valueObject/AccessPolicyId'

/**
 * @description Use case for finding an AccessPolicy entity by its unique identifier.
 */
export class AccessPolicyFinder {
	private readonly accessPolicyRepository: AccessPolicyRepository

	constructor({ accessPolicyRepository }: { accessPolicyRepository: AccessPolicyRepository }) {
		this.accessPolicyRepository = accessPolicyRepository
	}

	/**
	 * @description Executes the AccessPolicy finding process.
	 * @param {{ id: Primitives<AccessPolicyId> }} params The parameters for finding the AccessPolicy.
	 * @returns {Promise<AccessPolicyDto>} A promise that resolves to the found AccessPolicy DTO.
	 * @throws {AccessPolicyDoesNotExistError} If no AccessPolicy with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<AccessPolicyId> }): Promise<AccessPolicyDto> {
		const accessPolicyId = new AccessPolicyId(id).value
		const accessPolicy = await this.accessPolicyRepository.findById(accessPolicyId)

		if (!accessPolicy) {
			throw new AccessPolicyDoesNotExistError(id)
		}

		return accessPolicy
	}
}
