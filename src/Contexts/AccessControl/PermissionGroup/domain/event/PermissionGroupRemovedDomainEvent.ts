import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type PermissionGroupRemovedDomainEventBody = {
	readonly name: string
}

export class PermissionGroupRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.permission_group.removed'

	readonly body: PermissionGroupRemovedDomainEventBody

	constructor({
		aggregateId,
		body,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		body: PermissionGroupRemovedDomainEventBody
		occurredOn?: Date
	}) {
		super({ eventName: PermissionGroupRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.body = body
	}

	toPrimitives(): PermissionGroupRemovedDomainEventBody {
		const { name } = this.body
		return { name }
	}
}
