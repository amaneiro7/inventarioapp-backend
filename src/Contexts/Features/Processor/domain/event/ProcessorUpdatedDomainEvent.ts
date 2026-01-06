import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ProcessorChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type ProcessorUpdatedDomainEventAttributes = {
	readonly changes: ProcessorChange[]
}

export class ProcessorUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'processor.updated'

	readonly changes: ProcessorChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: ProcessorChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: ProcessorUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): ProcessorUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ProcessorUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ProcessorUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
