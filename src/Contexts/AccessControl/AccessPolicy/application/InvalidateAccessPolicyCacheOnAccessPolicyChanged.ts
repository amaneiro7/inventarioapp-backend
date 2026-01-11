import { AccessPolicyCreatedDomainEvent } from '../domain/event/AccessPolicyCreatedDomainEvent'
import { AccessPolicyUpdatedDomainEvent } from '../domain/event/AccessPolicyUpdatedDomainEvent'
import { PermissionGroupUpdatedDomainEvent } from '../../PermissionGroup/domain/event/PermissionGroupUpdatedDomainEvent'
import { AccessPolicyRemovedDomainEvent } from '../domain/event/AccessPolicyRemovedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateAccessPolicyCacheOnAccessPolicyChanged implements DomainEventSubscriber<
	| AccessPolicyCreatedDomainEvent
	| AccessPolicyUpdatedDomainEvent
	| AccessPolicyRemovedDomainEvent
	| PermissionGroupUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ permissionRepository }: { permissionRepository: CacheInvalidator }) {
		this.invalidator = permissionRepository
	}

	async on(
		event:
			| AccessPolicyCreatedDomainEvent
			| AccessPolicyUpdatedDomainEvent
			| AccessPolicyRemovedDomainEvent
			| PermissionGroupUpdatedDomainEvent
	): Promise<void> {
		const isAccessPolicyEvent =
			event instanceof AccessPolicyCreatedDomainEvent ||
			event instanceof AccessPolicyUpdatedDomainEvent ||
			event instanceof AccessPolicyRemovedDomainEvent

		// Si es AccessPolicy, invalidamos específico
		await this.invalidator.invalidate(isAccessPolicyEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			AccessPolicyCreatedDomainEvent,
			AccessPolicyUpdatedDomainEvent,
			AccessPolicyRemovedDomainEvent,
			PermissionGroupUpdatedDomainEvent
		]
	}
}
