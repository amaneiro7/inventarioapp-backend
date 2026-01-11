import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type AccessPolicyChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type AccessPolicyUpdatedDomainEventAttributes = {
	readonly changes: AccessPolicyChange[]
}

export class AccessPolicyUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.access_policy.updated'

	readonly changes: AccessPolicyChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: AccessPolicyChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: AccessPolicyUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): AccessPolicyUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: AccessPolicyUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new AccessPolicyUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
