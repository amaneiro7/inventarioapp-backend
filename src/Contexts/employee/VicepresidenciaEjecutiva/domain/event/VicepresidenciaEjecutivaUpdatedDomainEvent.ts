import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type VicepresidenciaEjecutivaChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type VicepresidenciaEjecutivaUpdatedDomainEventAttributes = {
	readonly changes: VicepresidenciaEjecutivaChange[]
}

export class VicepresidenciaEjecutivaUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia_ejecutiva.updated'

	readonly changes: VicepresidenciaEjecutivaChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: VicepresidenciaEjecutivaChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: VicepresidenciaEjecutivaUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): VicepresidenciaEjecutivaUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaEjecutivaUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaEjecutivaUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
