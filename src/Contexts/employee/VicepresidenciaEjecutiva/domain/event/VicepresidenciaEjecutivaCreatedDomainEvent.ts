import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaEjecutivaCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type VicepresidenciaEjecutivaCreatedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a new VicepresidenciaEjecutiva is created.
 */
export class VicepresidenciaEjecutivaCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia_ejecutiva.created'

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
		super({ eventName: VicepresidenciaEjecutivaCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): VicepresidenciaEjecutivaCreatedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaEjecutivaCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaEjecutivaCreatedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
