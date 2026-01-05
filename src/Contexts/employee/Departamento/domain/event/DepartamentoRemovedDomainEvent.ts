import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the DepartamentoRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type DepartamentoRemovedDomainEventAttributes = {
	readonly name: string
}

export class DepartamentoRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'departamento.removed'

	readonly name: string

	constructor({
		aggregateId,
		name,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		name: string
		occurredOn?: Date
	}) {
		super({ eventName: DepartamentoRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): DepartamentoRemovedDomainEventAttributes {
		return { name: this.name }
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DepartamentoRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DepartamentoRemovedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
