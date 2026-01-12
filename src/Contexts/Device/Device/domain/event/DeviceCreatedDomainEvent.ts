import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { type DeviceComputerPrimitives } from '../dto/Computer.dto'
import { type DevicePrimitives } from '../dto/Device.dto'
import { type DeviceHardDrivePrimitives } from '../dto/HardDrive.dto'
import { type DevicePrinterPrimitives } from '../dto/Printer.dto'

type DeviceCreatedDomainEventAttributes = {
	readonly device: DevicePrimitives | DeviceComputerPrimitives | DeviceHardDrivePrimitives | DevicePrinterPrimitives
	readonly serial: DevicePrimitives['serial']
	readonly activo: DevicePrimitives['activo']
}

export class DeviceCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'device.created'

	readonly device: DevicePrimitives | DeviceComputerPrimitives | DeviceHardDrivePrimitives | DevicePrinterPrimitives
	readonly serial: DevicePrimitives['serial']
	readonly activo: DevicePrimitives['activo']

	constructor({
		aggregateId,
		serial,
		activo,
		device,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		device: DevicePrimitives | DeviceComputerPrimitives | DeviceHardDrivePrimitives | DevicePrinterPrimitives
		serial: DevicePrimitives['serial']
		activo: DevicePrimitives['activo']
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DeviceCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.device = device
		this.serial = serial
		this.activo = activo
	}

	toPrimitives(): DeviceCreatedDomainEventAttributes {
		return {
			device: this.device,
			serial: this.serial,
			activo: this.activo
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
			...attributes,
			eventId,
			occurredOn
		})
	}
}
