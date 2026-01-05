import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaEjecutivaRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type VicepresidenciaEjecutivaRemovedDomainEventAttributes = {
	readonly name: string
}

export class VicepresidenciaEjecutivaRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia_ejecutiva.removed'

	readonly name: string

	constructor({
		aggregateId,
		name,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		name: string
		occurredOn?: Date
	}) {
		super({ eventName: VicepresidenciaEjecutivaRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): VicepresidenciaEjecutivaRemovedDomainEventAttributes {
		return { name: this.name }
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaEjecutivaRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaEjecutivaRemovedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
