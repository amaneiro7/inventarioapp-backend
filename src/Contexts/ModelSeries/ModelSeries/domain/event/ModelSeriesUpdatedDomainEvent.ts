import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ModelSeriesChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type ModelSeriesUpdatedDomainEventAttributes = {
	readonly changes: ModelSeriesChange[]
}

export class ModelSeriesUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'modelSeries.updated'

	readonly changes: ModelSeriesChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: ModelSeriesChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: ModelSeriesUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): ModelSeriesUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ModelSeriesUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ModelSeriesUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
