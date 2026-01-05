import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type VicepresidenciaRenamedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a Vicepresidencia is renamed.
 */
export class VicepresidenciaRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia.renamed'

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
		super({ eventName: VicepresidenciaRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): VicepresidenciaRenamedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaRenamedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
