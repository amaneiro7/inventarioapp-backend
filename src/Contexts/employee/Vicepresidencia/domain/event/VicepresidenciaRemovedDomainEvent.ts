import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type VicepresidenciaRemovedDomainEventAttributes = {
	readonly name: string
}

export class VicepresidenciaRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia.removed'

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
		super({ eventName: VicepresidenciaRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): VicepresidenciaRemovedDomainEventAttributes {
		return { name: this.name }
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaRemovedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
