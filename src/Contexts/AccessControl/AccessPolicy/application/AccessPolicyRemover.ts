import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { AccessPolicyDoesNotExistError } from '../domain/errors/AccessPolicyDoesNotExistError'
import { AccessPolicyId } from '../domain/valueObject/AccessPolicyId'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

/**
 * @description Use case for removing a AccessPolicy entity.
 */
export class AccessPolicyRemover {
	private readonly accessPolicyRepository: AccessPolicyRepository
	private readonly eventBus: EventBus
	constructor({
		accessPolicyRepository,
		eventBus
	}: {
		accessPolicyRepository: AccessPolicyRepository
		eventBus: EventBus
	}) {
		this.accessPolicyRepository = accessPolicyRepository
		this.eventBus = eventBus
	}
	/**
	 * @description Executes the AccessPolicy removal process.
	 * @param {{ id: Primitives<AccessPolicyId> }} params The parameters for removing the AccessPolicy.
	 * @returns {Promise<void>} A promise that resolves when the AccessPolicy is successfully removed.
	 * @throws {AccessPolicyDoesNotExistError} If no AccessPolicy with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<AccessPolicyId> }): Promise<void> {
		const accessPolicyId = new AccessPolicyId(id)

		const accessPolicy = await this.accessPolicyRepository.findById(accessPolicyId.value)

		if (!accessPolicy) {
			throw new AccessPolicyDoesNotExistError(accessPolicyId.value)
		}

		const accessPolicyEntity = AccessPolicy.fromPrimitives(accessPolicy)
		accessPolicyEntity.remove()

		await this.accessPolicyRepository.remove(accessPolicyId.value)
		await this.eventBus.publish(accessPolicyEntity.pullDomainEvents())
	}
}
