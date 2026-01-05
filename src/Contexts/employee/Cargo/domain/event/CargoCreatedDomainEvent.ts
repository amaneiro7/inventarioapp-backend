import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the CargoCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type CargoCreatedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a new Cargo is created.
 */
export class CargoCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'cargo.created'

	readonly name: string

	constructor({
		aggregateId,
		name,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		name: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: CargoCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): CargoCreatedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: CargoCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new CargoCreatedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
