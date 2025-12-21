import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ModelSeriesRenamedDomainEventAttributes = {
	readonly oldName: string
	readonly newName: string
}

export class ModelSeriesRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'modelSeries.renamed'

	readonly oldName: string
	readonly newName: string

	constructor({
		aggregateId,
		oldName,
		newName,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		oldName: string
		newName: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: ModelSeriesRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldName = oldName
		this.newName = newName
	}

	toPrimitives(): ModelSeriesRenamedDomainEventAttributes {
		return {
			oldName: this.oldName,
			newName: this.newName
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ModelSeriesRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ModelSeriesRenamedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
