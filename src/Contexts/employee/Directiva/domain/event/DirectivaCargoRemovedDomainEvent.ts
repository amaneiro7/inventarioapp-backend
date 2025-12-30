import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the DirectivaCargoRemovedDomainEvent.
 */
type DirectivaCargoRemovedDomainEventAttributes = {
	readonly cargoId: string
}

/**
 * @description Represents the domain event triggered when a cargo is removed from a Directiva.
 */
export class DirectivaCargoRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'directiva.cargo_removed'

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
		super({ eventName: DirectivaCargoRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.cargoId = cargoId
	}

	toPrimitives(): DirectivaCargoRemovedDomainEventAttributes {
		return {
			cargoId: this.cargoId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DirectivaCargoRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DirectivaCargoRemovedDomainEvent({
			aggregateId,
			cargoId: attributes.cargoId,
			eventId,
			occurredOn
		})
	}
}
