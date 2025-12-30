import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the DirectivaCargoAddedDomainEvent.
 */
type DirectivaCargoAddedDomainEventAttributes = {
	readonly cargoId: string
}

/**
 * @description Represents the domain event triggered when a cargo is added to a Directiva.
 */
export class DirectivaCargoAddedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'directiva.cargo_added'

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
		super({ eventName: DirectivaCargoAddedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.cargoId = cargoId
	}

	toPrimitives(): DirectivaCargoAddedDomainEventAttributes {
		return {
			cargoId: this.cargoId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DirectivaCargoAddedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DirectivaCargoAddedDomainEvent({
			aggregateId,
			cargoId: attributes.cargoId,
			eventId,
			occurredOn
		})
	}
}
