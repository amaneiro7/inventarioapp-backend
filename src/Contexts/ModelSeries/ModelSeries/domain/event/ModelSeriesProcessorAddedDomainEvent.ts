import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ModelSeriesProcessorAddedDomainEventAttributes = {
	readonly processorId: string
}

export class ModelSeriesProcessorAddedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'modelSeries.processor.added'

	readonly processorId: string

	constructor({
		aggregateId,
		processorId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		processorId: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: ModelSeriesProcessorAddedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.processorId = processorId
	}

	toPrimitives(): ModelSeriesProcessorAddedDomainEventAttributes {
		return {
			processorId: this.processorId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ModelSeriesProcessorAddedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ModelSeriesProcessorAddedDomainEvent({
			aggregateId,
			processorId: attributes.processorId,
			eventId,
			occurredOn
		})
	}
}
