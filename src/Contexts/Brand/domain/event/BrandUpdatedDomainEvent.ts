import { DomainEvent } from '../../../Shared/domain/event/DomainEvent'

type BrandChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type BrandUpdatedDomainEventAttributes = {
	readonly changes: BrandChange[]
}

export class BrandUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'brand.updated'

	readonly changes: BrandChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: BrandChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: BrandUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): BrandUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: BrandUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new BrandUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
