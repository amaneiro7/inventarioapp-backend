import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type VicepresidenciaCreatedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a new Vicepresidencia is created.
 */
export class VicepresidenciaCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia.created'

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
		super({ eventName: VicepresidenciaCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): VicepresidenciaCreatedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaCreatedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
