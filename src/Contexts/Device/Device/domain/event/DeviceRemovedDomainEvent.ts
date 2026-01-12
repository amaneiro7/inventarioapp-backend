import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceActivo } from '../valueObject/DeviceActivo'
import { type DeviceSerial } from '../valueObject/DeviceSerial'

/**
 * @description Defines the attributes for the DeviceRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type DeviceRemovedDomainEventAttributes = {
	readonly serial: Primitives<DeviceSerial>
	readonly activo: Primitives<DeviceActivo>
}

export class DeviceRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'device.removed'

	readonly serial: Primitives<DeviceSerial>
	readonly activo: Primitives<DeviceActivo>

	constructor({
		aggregateId,
		serial,
		activo,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		serial: Primitives<DeviceSerial>
		activo: Primitives<DeviceActivo>
		occurredOn?: Date
	}) {
		super({ eventName: DeviceRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.serial = serial
		this.activo = activo
	}

	toPrimitives(): DeviceRemovedDomainEventAttributes {
		return { serial: this.serial, activo: this.activo }
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DeviceRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DeviceRemovedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
