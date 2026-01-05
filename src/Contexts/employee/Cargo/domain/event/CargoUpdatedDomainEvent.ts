import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type CargoChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type CargoUpdatedDomainEventAttributes = {
	readonly changes: CargoChange[]
}

export class CargoUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'cargo.updated'

	readonly changes: CargoChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: CargoChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: CargoUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): CargoUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: CargoUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new CargoUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
