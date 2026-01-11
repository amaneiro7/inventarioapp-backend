import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type PermissionGroupCreatedDomainEventBody = {
	readonly name: string
	readonly description: string
	readonly permissions: string[]
}

export class PermissionGroupCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.permission_group.created'

	readonly body: PermissionGroupCreatedDomainEventBody

	constructor({
		aggregateId,
		body,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		body: PermissionGroupCreatedDomainEventBody
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: PermissionGroupCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.body = body
	}

	toPrimitives(): PermissionGroupCreatedDomainEventBody {
		return this.body
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: PermissionGroupCreatedDomainEventBody
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new PermissionGroupCreatedDomainEvent({
			aggregateId,
			body: attributes,
			eventId,
			occurredOn
		})
	}
}
