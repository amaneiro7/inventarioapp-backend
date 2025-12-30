import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type DirectivaChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type DirectivaUpdatedDomainEventAttributes = {
	readonly changes: DirectivaChange[]
}

export class DirectivaUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'directiva.updated'

	readonly changes: DirectivaChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: DirectivaChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DirectivaUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): DirectivaUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DirectivaUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DirectivaUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
