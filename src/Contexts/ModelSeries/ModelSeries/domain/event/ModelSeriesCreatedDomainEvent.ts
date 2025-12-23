import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ModelSeriesCreatedDomainEventAttributes = {
	readonly name: string
	readonly categoryId: string
	readonly brandId: string
}

export class ModelSeriesCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'modelSeries.created'

	readonly name: string
	readonly categoryId: string
	readonly brandId: string

	constructor({
		aggregateId,
		name,
		categoryId,
		brandId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		name: string
		categoryId: string
		brandId: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: ModelSeriesCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
		this.categoryId = categoryId
		this.brandId = brandId
	}

	toPrimitives(): ModelSeriesCreatedDomainEventAttributes {
		return {
			name: this.name,
			categoryId: this.categoryId,
			brandId: this.brandId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ModelSeriesCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new ModelSeriesCreatedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
