import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceSerial } from '../valueObject/DeviceSerial'

/**
 * @description Defines the attributes for the DeviceRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type DeviceRemovedDomainEventAttributes = {
	readonly serial: Primitives<DeviceSerial>
}

export class DeviceRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'device.removed'

	readonly serial: Primitives<DeviceSerial>

	constructor({
		aggregateId,
		serial,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		serial: Primitives<DeviceSerial>
		occurredOn?: Date
	}) {
		super({ eventName: DeviceRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.serial = serial
	}

	toPrimitives(): DeviceRemovedDomainEventAttributes {
		return { serial: this.serial }
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
