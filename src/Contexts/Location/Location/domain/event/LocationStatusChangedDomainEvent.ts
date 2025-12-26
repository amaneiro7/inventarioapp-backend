import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the LocationStatusChangedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type LocationStatusChangedDomainEventAttributes = {
	readonly oldStatusId: string
	readonly newStatusId: string
}

/**
 * @description Represents the domain event that is triggered when a Location status is changed.
 */
export class LocationStatusChangedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'location.status.changed'

	readonly oldStatusId: string
	readonly newStatusId: string

	constructor({
		aggregateId,
		oldStatusId,
		newStatusId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		oldStatusId: string
		newStatusId: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: LocationStatusChangedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldStatusId = oldStatusId
		this.newStatusId = newStatusId
	}

	toPrimitives(): LocationStatusChangedDomainEventAttributes {
		return {
			oldStatusId: this.oldStatusId,
			newStatusId: this.newStatusId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: LocationStatusChangedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new LocationStatusChangedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
