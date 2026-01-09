import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { type DeviceComputerPrimitives } from '../dto/Computer.dto'
import { type DevicePrimitives } from '../dto/Device.dto'
import { type DeviceHardDrivePrimitives } from '../dto/HardDrive.dto'
import { type DeviceMFPPrimitives } from '../dto/MFP.dto'

type DeviceCreatedDomainEventAttributes = {
	readonly device: DevicePrimitives | DeviceComputerPrimitives | DeviceHardDrivePrimitives | DeviceMFPPrimitives
}

export class DeviceCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'device.created'

	readonly device: DevicePrimitives | DeviceComputerPrimitives | DeviceHardDrivePrimitives | DeviceMFPPrimitives

	constructor({
		aggregateId,
		device,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		device: DevicePrimitives | DeviceComputerPrimitives | DeviceHardDrivePrimitives | DeviceMFPPrimitives
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DeviceCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.device = device
	}

	toPrimitives(): DeviceCreatedDomainEventAttributes {
		return {
			device: this.device
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DeviceCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DeviceCreatedDomainEvent({
			aggregateId,
			device: attributes.device,
			eventId,
			occurredOn
		})
	}
}
