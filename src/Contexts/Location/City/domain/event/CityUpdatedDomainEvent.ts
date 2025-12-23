import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type CityChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type CityUpdatedDomainEventAttributes = {
	readonly changes: CityChange[]
}

export class CityUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'city.updated'

	readonly changes: CityChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: CityChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: CityUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): CityUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: CityUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new CityUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
