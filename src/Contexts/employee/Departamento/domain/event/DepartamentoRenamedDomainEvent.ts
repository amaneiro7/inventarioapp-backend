import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the DepartamentoRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type DepartamentoRenamedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a Departamento is renamed.
 */
export class DepartamentoRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'departamento.renamed'

	readonly name: string

	constructor({
		aggregateId,
		name,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		name: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DepartamentoRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): DepartamentoRenamedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DepartamentoRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DepartamentoRenamedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
