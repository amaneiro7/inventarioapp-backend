import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaEjecutivaCargoAddedDomainEvent.
 */
type VicepresidenciaEjecutivaCargoAddedDomainEventAttributes = {
	readonly cargoId: string
}

/**
 * @description Represents the domain event triggered when a cargo is added to a VicepresidenciaEjecutiva.
 */
export class VicepresidenciaEjecutivaCargoAddedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia_ejecutiva.cargo_added'

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
		super({ eventName: VicepresidenciaEjecutivaCargoAddedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.cargoId = cargoId
	}

	toPrimitives(): VicepresidenciaEjecutivaCargoAddedDomainEventAttributes {
		return {
			cargoId: this.cargoId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaEjecutivaCargoAddedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaEjecutivaCargoAddedDomainEvent({
			aggregateId,
			cargoId: attributes.cargoId,
			eventId,
			occurredOn
		})
	}
}
