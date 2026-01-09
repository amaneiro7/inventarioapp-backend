import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { DevicePrimitives } from '../dto/Device.dto'

type DeviceChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type DeviceUpdatedDomainEventAttributes = {
	readonly newEntity: DevicePrimitives
	readonly oldEntity: DevicePrimitives
	readonly changes: DeviceChange[]
}

export class DeviceUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'device.updated'

	readonly newEntity: DevicePrimitives
	readonly oldEntity: DevicePrimitives
	readonly changes: DeviceChange[]

	constructor({
		aggregateId,
		newEntity,
		oldEntity,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		newEntity: DevicePrimitives
		oldEntity: DevicePrimitives
		changes: DeviceChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DeviceUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.newEntity = newEntity
		this.oldEntity = oldEntity
		this.changes = changes
	}

	toPrimitives(): DeviceUpdatedDomainEventAttributes {
		return {
			newEntity: this.newEntity,
			oldEntity: this.oldEntity,
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
			...attributes,
			eventId,
			occurredOn
		})
	}
}
