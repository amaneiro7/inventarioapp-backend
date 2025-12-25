import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the LocationCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type LocationCreatedDomainEventAttributes = {
	readonly name: string
	readonly stateId: string
}

/**
 * @description Represents the domain event that is triggered when a new Location is created.
 */
export class LocationCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'location.created'

	readonly name: string
	readonly stateId: string

	constructor({
		aggregateId,
		name,
		stateId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		name: string
		stateId: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: LocationCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
		this.stateId = stateId
	}

	toPrimitives(): LocationCreatedDomainEventAttributes {
		return {
			name: this.name,
			stateId: this.stateId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: LocationCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new LocationCreatedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
