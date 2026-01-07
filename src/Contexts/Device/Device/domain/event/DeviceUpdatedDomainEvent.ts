import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type DeviceChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type DeviceUpdatedDomainEventAttributes = {
	readonly changes: DeviceChange[]
}

export class DeviceUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'device.updated'

	readonly changes: DeviceChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: DeviceChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DeviceUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): DeviceUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DeviceUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DeviceUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
