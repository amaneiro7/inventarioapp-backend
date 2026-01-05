import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaEjecutivaCargoRemovedDomainEvent.
 */
type VicepresidenciaEjecutivaCargoRemovedDomainEventAttributes = {
	readonly cargoId: string
}

/**
 * @description Represents the domain event triggered when a cargo is removed from a VicepresidenciaEjecutiva.
 */
export class VicepresidenciaEjecutivaCargoRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia_ejecutiva.cargo_removed'

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
			eventName: VicepresidenciaEjecutivaCargoRemovedDomainEvent.EVENT_NAME,
			aggregateId,
			eventId,
			occurredOn
		})
		this.cargoId = cargoId
	}

	toPrimitives(): VicepresidenciaEjecutivaCargoRemovedDomainEventAttributes {
		return {
			cargoId: this.cargoId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaEjecutivaCargoRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaEjecutivaCargoRemovedDomainEvent({
			aggregateId,
			cargoId: attributes.cargoId,
			eventId,
			occurredOn
		})
	}
}
