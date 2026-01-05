import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaCargoAddedDomainEvent.
 */
type VicepresidenciaCargoAddedDomainEventAttributes = {
	readonly cargoId: string
}

/**
 * @description Represents the domain event triggered when a cargo is added to a Vicepresidencia.
 */
export class VicepresidenciaCargoAddedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia.cargo_added'

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
		super({ eventName: VicepresidenciaCargoAddedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.cargoId = cargoId
	}

	toPrimitives(): VicepresidenciaCargoAddedDomainEventAttributes {
		return {
			cargoId: this.cargoId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaCargoAddedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaCargoAddedDomainEvent({
			aggregateId,
			cargoId: attributes.cargoId,
			eventId,
			occurredOn
		})
	}
}
