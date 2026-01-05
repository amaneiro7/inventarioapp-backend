import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaCargoRemovedDomainEvent.
 */
type VicepresidenciaCargoRemovedDomainEventAttributes = {
	readonly cargoId: string
}

/**
 * @description Represents the domain event triggered when a cargo is removed from a Vicepresidencia.
 */
export class VicepresidenciaCargoRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia.cargo_removed'

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
			eventName: VicepresidenciaCargoRemovedDomainEvent.EVENT_NAME,
			aggregateId,
			eventId,
			occurredOn
		})
		this.cargoId = cargoId
	}

	toPrimitives(): VicepresidenciaCargoRemovedDomainEventAttributes {
		return {
			cargoId: this.cargoId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaCargoRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaCargoRemovedDomainEvent({
			aggregateId,
			cargoId: attributes.cargoId,
			eventId,
			occurredOn
		})
	}
}
