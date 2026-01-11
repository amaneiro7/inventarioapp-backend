import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type PermissionAssignedToPermissionGroupDomainEventBody = {
	readonly permissionId: string
}

export class PermissionAssignedToPermissionGroupDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.permission_group.permission_assigned'

	readonly body: PermissionAssignedToPermissionGroupDomainEventBody

	constructor({
		aggregateId,
		body,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		body: PermissionAssignedToPermissionGroupDomainEventBody
		eventId?: string
		occurredOn?: Date
	}) {
		super({
			eventName: PermissionAssignedToPermissionGroupDomainEvent.EVENT_NAME,
			aggregateId,
			eventId,
			occurredOn
		})
		this.body = body
	}

	toPrimitives(): PermissionAssignedToPermissionGroupDomainEventBody {
		return this.body
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: PermissionAssignedToPermissionGroupDomainEventBody
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new PermissionAssignedToPermissionGroupDomainEvent({
			aggregateId,
			body: attributes,
			eventId,
			occurredOn
		})
	}
}
