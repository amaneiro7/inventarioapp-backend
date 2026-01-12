import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { DevicePrimitives } from '../dto/Device.dto'

type DeviceChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type DeviceUpdatedDomainEventAttributes = {
	readonly serial: DevicePrimitives['serial']
	readonly activo: DevicePrimitives['activo']
	readonly newEntity: DevicePrimitives
	readonly oldEntity: DevicePrimitives
	readonly changes: DeviceChange[]
}

export class DeviceUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'device.updated'

	readonly serial: DevicePrimitives['serial']
	readonly activo: DevicePrimitives['activo']
	readonly newEntity: DevicePrimitives
	readonly oldEntity: DevicePrimitives
	readonly changes: DeviceChange[]

	constructor({
		aggregateId,
		serial,
		activo,
		newEntity,
		oldEntity,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		serial: DevicePrimitives['serial']
		activo: DevicePrimitives['activo']
		newEntity: DevicePrimitives
		oldEntity: DevicePrimitives
		changes: DeviceChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DeviceUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.serial = serial
		this.activo = activo
		this.newEntity = newEntity
		this.oldEntity = oldEntity
		this.changes = changes
	}

	toPrimitives(): DeviceUpdatedDomainEventAttributes {
		return {
			serial: this.serial,
			activo: this.activo,
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
