import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type PermissionGroupAssignedToAccessPolicyDomainEventBody = {
	readonly permissionGroupId: string
}

export class PermissionGroupAssignedToAccessPolicyDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.access-policy.permission_group_assigned'

	readonly body: PermissionGroupAssignedToAccessPolicyDomainEventBody

	constructor({
		aggregateId,
		body,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		body: PermissionGroupAssignedToAccessPolicyDomainEventBody
		eventId?: string
		occurredOn?: Date
	}) {
		super({
			eventName: PermissionGroupAssignedToAccessPolicyDomainEvent.EVENT_NAME,
			aggregateId,
			eventId,
			occurredOn
		})
		this.body = body
	}

	toPrimitives(): PermissionGroupAssignedToAccessPolicyDomainEventBody {
		return this.body
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: PermissionGroupAssignedToAccessPolicyDomainEventBody
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new PermissionGroupAssignedToAccessPolicyDomainEvent({
			aggregateId,
			body: attributes,
			eventId,
			occurredOn
		})
	}
}
