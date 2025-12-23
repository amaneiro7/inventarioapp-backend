import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the CityCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type CityCreatedDomainEventAttributes = {
	readonly name: string
	readonly stateId: string
}

/**
 * @description Represents the domain event that is triggered when a new City is created.
 */
export class CityCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'city.created'

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
		super({ eventName: CityCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
		this.stateId = stateId
	}

	toPrimitives(): CityCreatedDomainEventAttributes {
		return {
			name: this.name,
			stateId: this.stateId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: CityCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new CityCreatedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
