import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type RegionChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type RegionUpdatedDomainEventAttributes = {
	readonly changes: RegionChange[]
}

export class RegionUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'region.updated'

	readonly changes: RegionChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: RegionChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: RegionUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): RegionUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: RegionUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new RegionUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
