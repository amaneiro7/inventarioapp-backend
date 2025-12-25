import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type SiteChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type SiteUpdatedDomainEventAttributes = {
	readonly changes: SiteChange[]
}

export class SiteUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'site.updated'

	readonly changes: SiteChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: SiteChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: SiteUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): SiteUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: SiteUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new SiteUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
