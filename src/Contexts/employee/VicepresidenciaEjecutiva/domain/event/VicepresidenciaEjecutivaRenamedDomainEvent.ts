import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the VicepresidenciaEjecutivaRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type VicepresidenciaEjecutivaRenamedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a VicepresidenciaEjecutiva is renamed.
 */
export class VicepresidenciaEjecutivaRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia_ejecutiva.renamed'

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
		super({ eventName: VicepresidenciaEjecutivaRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): VicepresidenciaEjecutivaRenamedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaEjecutivaRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaEjecutivaRenamedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
