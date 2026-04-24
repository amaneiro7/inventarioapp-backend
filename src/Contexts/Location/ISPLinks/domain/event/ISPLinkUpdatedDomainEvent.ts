import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ISPLinkChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type ISPLinkUpdatedDomainEventAttributes = {
	readonly changes: ISPLinkChange[]
}

export class ISPLinkUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'isp_link.updated'

	readonly changes: ISPLinkChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: ISPLinkChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: ISPLinkUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): ISPLinkUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ISPLinkUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ISPLinkUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
