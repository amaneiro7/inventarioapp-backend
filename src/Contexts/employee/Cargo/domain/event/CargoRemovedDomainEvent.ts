import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the CargoRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type CargoRemovedDomainEventAttributes = {
	readonly name: string
}

export class CargoRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'cargo.removed'

	readonly name: string

	constructor({
		aggregateId,
		name,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		name: string
		occurredOn?: Date
	}) {
		super({ eventName: CargoRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): CargoRemovedDomainEventAttributes {
		return { name: this.name }
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: CargoRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new CargoRemovedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
