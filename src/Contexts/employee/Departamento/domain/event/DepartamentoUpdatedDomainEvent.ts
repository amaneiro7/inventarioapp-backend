import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type DepartamentoChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type DepartamentoUpdatedDomainEventAttributes = {
	readonly changes: DepartamentoChange[]
}

export class DepartamentoUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'departamento.updated'

	readonly changes: DepartamentoChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: DepartamentoChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DepartamentoUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): DepartamentoUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DepartamentoUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DepartamentoUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
