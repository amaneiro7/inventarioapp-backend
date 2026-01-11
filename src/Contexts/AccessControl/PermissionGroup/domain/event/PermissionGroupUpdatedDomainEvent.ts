import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type PermissionGroupChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type PermissionGroupUpdatedDomainEventAttributes = {
	readonly changes: PermissionGroupChange[]
}

export class PermissionGroupUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.permission_group.updated'

	readonly changes: PermissionGroupChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: PermissionGroupChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: PermissionGroupUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): PermissionGroupUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: PermissionGroupUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new PermissionGroupUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
