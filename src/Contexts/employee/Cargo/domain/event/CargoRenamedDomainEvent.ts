import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the CargoRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type CargoRenamedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a Cargo is renamed.
 */
export class CargoRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'cargo.renamed'

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
		super({ eventName: CargoRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): CargoRenamedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: CargoRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new CargoRenamedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
