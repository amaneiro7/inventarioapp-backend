import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the DepartamentoCargoAddedDomainEvent.
 */
type DepartamentoCargoAddedDomainEventAttributes = {
	readonly cargoId: string
}

/**
 * @description Represents the domain event triggered when a cargo is added to a Departamento.
 */
export class DepartamentoCargoAddedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'departamento.cargo_added'

	readonly cargoId: string

	constructor({
		aggregateId,
		cargoId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		cargoId: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DepartamentoCargoAddedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.cargoId = cargoId
	}

	toPrimitives(): DepartamentoCargoAddedDomainEventAttributes {
		return {
			cargoId: this.cargoId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DepartamentoCargoAddedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DepartamentoCargoAddedDomainEvent({
			aggregateId,
			cargoId: attributes.cargoId,
			eventId,
			occurredOn
		})
	}
}
