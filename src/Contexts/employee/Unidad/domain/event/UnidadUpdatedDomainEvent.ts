import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type UnidadChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type UnidadUpdatedDomainEventAttributes = {
	readonly changes: UnidadChange[]
}

export class UnidadUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'unidad.updated'

	readonly changes: UnidadChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: UnidadChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: UnidadUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): UnidadUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UnidadUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new UnidadUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
