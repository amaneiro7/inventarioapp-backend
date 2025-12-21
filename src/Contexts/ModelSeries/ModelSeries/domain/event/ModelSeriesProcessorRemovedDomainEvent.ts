import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ModelSeriesProcessorRemovedDomainEventAttributes = {
	readonly processorId: string
}

export class ModelSeriesProcessorRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'modelSeries.processor.removed'

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
		super({ eventName: ModelSeriesProcessorRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.processorId = processorId
	}

	toPrimitives(): ModelSeriesProcessorRemovedDomainEventAttributes {
		return {
			processorId: this.processorId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ModelSeriesProcessorRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ModelSeriesProcessorRemovedDomainEvent({
			aggregateId,
			processorId: attributes.processorId,
			eventId,
			occurredOn
		})
	}
}
