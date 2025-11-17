import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyId } from '../domain/valueObject/AccessPolicyId'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

import { AccessPolicyParams } from '../domain/entity/AccessPolicy.dto'
import { AccessPolicyDoesNotExistError } from '../domain/errors/AccessPolicyDoesNotExistError'
import { EventBus } from '../../../Shared/domain/event/EventBus'

export class AccessPolicyUpdater {
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

	async run({ id, params }: { id: Primitives<AccessPolicyId>; params: AccessPolicyParams }): Promise<void> {
		const policy = await this.accessPolicyRepository.findById(id)

		if (!policy) {
			throw new AccessPolicyDoesNotExistError(id)
		}

		// Usamos los métodos de actualización de la entidad de dominio
		if (params.cargoId !== undefined) policy.updateCargo(params.cargoId)
		if (params.departamentoId !== undefined) policy.updateDepartamento(params.departamentoId)
		if (params.permissionGroupId !== undefined) policy.updatePermissionGroup(params.permissionGroupId)
		if (params.priority !== undefined) policy.updatePriority(params.priority)

		await this.accessPolicyRepository.save(policy)

		// Publicar eventos si la actualización generó alguno
		await this.eventBus.publish(policy.pullDomainEvents())
	}
}
