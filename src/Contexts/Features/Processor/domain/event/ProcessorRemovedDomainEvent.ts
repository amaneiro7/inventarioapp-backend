import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the ProcessorRemovedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type ProcessorRemovedDomainEventAttributes = {
	readonly numberModel: string
}

/**
 * @description Represents the domain event that is triggered when a Processor is removed.
 */
export class ProcessorRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'processor.removed'

	readonly numberModel: string

	constructor({
		aggregateId,
		numberModel,

		eventId,
		occurredOn
	}: {
		aggregateId: string
		numberModel: string

		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: ProcessorRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.numberModel = numberModel
	}

	toPrimitives(): ProcessorRemovedDomainEventAttributes {
		return {
			numberModel: this.numberModel
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ProcessorRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ProcessorRemovedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
