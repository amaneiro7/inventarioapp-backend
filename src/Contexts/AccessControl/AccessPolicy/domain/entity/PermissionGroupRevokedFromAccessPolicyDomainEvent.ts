import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type PermissionGroupRevokedFromAccessPolicyDomainEventBody = {
	readonly permissionGroupId: string
}

export class PermissionGroupRevokedFromAccessPolicyDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.access-policy.permission_group_revoked'

	readonly body: PermissionGroupRevokedFromAccessPolicyDomainEventBody

	constructor({
		aggregateId,
		body,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		body: PermissionGroupRevokedFromAccessPolicyDomainEventBody
		eventId?: string
		occurredOn?: Date
	}) {
		super({
			eventName: PermissionGroupRevokedFromAccessPolicyDomainEvent.EVENT_NAME,
			aggregateId,
			eventId,
			occurredOn
		})
		this.body = body
	}

	toPrimitives(): PermissionGroupRevokedFromAccessPolicyDomainEventBody {
		return this.body
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: PermissionGroupRevokedFromAccessPolicyDomainEventBody
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new PermissionGroupRevokedFromAccessPolicyDomainEvent({
			aggregateId,
			body: attributes,
			eventId,
			occurredOn
		})
	}
}
