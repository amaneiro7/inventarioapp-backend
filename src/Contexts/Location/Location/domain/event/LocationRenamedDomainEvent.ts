import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the LocationRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type LocationRenamedDomainEventAttributes = {
	readonly oldName: string
	readonly newName: string
}

/**
 * @description Represents the domain event that is triggered when a Location is renamed.
 */
export class LocationRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'location.renamed'

	readonly oldName: string
	readonly newName: string

	constructor({
		aggregateId,
		oldName,
		newName,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		oldName: string
		newName: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: LocationRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldName = oldName
		this.newName = newName
	}

	toPrimitives(): LocationRenamedDomainEventAttributes {
		return {
			oldName: this.oldName,
			newName: this.newName
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: LocationRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new LocationRenamedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
