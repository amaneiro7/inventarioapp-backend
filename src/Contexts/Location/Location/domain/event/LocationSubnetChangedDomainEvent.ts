import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the LocationSubnetChangedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type LocationSubnetChangedDomainEventAttributes = {
	readonly oldSubnet: string | null
	readonly newSubnet: string | null
}

/**
 * @description Represents the domain event that is triggered when a Location subnet is changed.
 */
export class LocationSubnetChangedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'location.subnet.changed'

	readonly oldSubnet: string | null
	readonly newSubnet: string | null

	constructor({
		aggregateId,
		oldSubnet,
		newSubnet,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		oldSubnet: string | null
		newSubnet: string | null
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: LocationSubnetChangedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldSubnet = oldSubnet
		this.newSubnet = newSubnet
	}

	toPrimitives(): LocationSubnetChangedDomainEventAttributes {
		return {
			oldSubnet: this.oldSubnet,
			newSubnet: this.newSubnet
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: LocationSubnetChangedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new LocationSubnetChangedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
