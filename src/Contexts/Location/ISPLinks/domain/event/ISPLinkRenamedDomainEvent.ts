import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the ISPLinkRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type ISPLinkRenamedDomainEventAttributes = {
	readonly oldName: string
	readonly newName: string
}

/**
 * @description Represents the domain event that is triggered when a City is renamed.
 */
export class ISPLinkRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'isp_link.renamed'

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
		super({ eventName: ISPLinkRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldName = oldName
		this.newName = newName
	}

	toPrimitives(): ISPLinkRenamedDomainEventAttributes {
		return {
			oldName: this.oldName,
			newName: this.newName
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ISPLinkRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ISPLinkRenamedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
