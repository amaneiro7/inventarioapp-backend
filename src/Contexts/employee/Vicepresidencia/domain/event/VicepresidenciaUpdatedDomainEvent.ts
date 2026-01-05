import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type VicepresidenciaChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type VicepresidenciaUpdatedDomainEventAttributes = {
	readonly changes: VicepresidenciaChange[]
}

export class VicepresidenciaUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'vicepresidencia.updated'

	readonly changes: VicepresidenciaChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: VicepresidenciaChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: VicepresidenciaUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): VicepresidenciaUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: VicepresidenciaUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new VicepresidenciaUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
