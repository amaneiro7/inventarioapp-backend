import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the ISPLinkCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type ISPLinkCreatedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a new ISPLink is created.
 */
export class ISPLinkCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'isp_link.created'

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
		super({ eventName: ISPLinkCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): ISPLinkCreatedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ISPLinkCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ISPLinkCreatedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
