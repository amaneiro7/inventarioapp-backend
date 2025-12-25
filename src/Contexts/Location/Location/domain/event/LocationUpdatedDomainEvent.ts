import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type LocationChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type LocationUpdatedDomainEventAttributes = {
	readonly changes: LocationChange[]
}

export class LocationUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'location.updated'

	readonly changes: LocationChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: LocationChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: LocationUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): LocationUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: LocationUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new LocationUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
