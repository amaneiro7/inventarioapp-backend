import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the ProcessorCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type ProcessorCreatedDomainEventAttributes = {
	readonly numberModel: string
}

/**
 * @description Represents the domain event that is triggered when a new Processor is created.
 */
export class ProcessorCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'processor.created'

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
		super({ eventName: ProcessorCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.numberModel = numberModel
	}

	toPrimitives(): ProcessorCreatedDomainEventAttributes {
		return {
			numberModel: this.numberModel
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ProcessorCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ProcessorCreatedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
