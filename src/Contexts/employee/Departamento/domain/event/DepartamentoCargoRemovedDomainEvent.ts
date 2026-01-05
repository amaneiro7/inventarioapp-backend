import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the DepartamentoCargoRemovedDomainEvent.
 */
type DepartamentoCargoRemovedDomainEventAttributes = {
	readonly cargoId: string
}

/**
 * @description Represents the domain event triggered when a cargo is removed from a Departamento.
 */
export class DepartamentoCargoRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'departamento.cargo_removed'

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
		super({
			eventName: DepartamentoCargoRemovedDomainEvent.EVENT_NAME,
			aggregateId,
			eventId,
			occurredOn
		})
		this.cargoId = cargoId
	}

	toPrimitives(): DepartamentoCargoRemovedDomainEventAttributes {
		return {
			cargoId: this.cargoId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DepartamentoCargoRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DepartamentoCargoRemovedDomainEvent({
			aggregateId,
			cargoId: attributes.cargoId,
			eventId,
			occurredOn
		})
	}
}
