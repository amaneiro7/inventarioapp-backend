import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type DeviceMonitoringCreatedDomainEventAttributes = {
	deviceId: string
	status: string
}

export class DeviceMonitoringCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'device_monitoring.created'

	readonly deviceId: string
	readonly status: string

	constructor({
		aggregateId,
		deviceId,
		status,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		deviceId: string
		status: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: DeviceMonitoringCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.deviceId = deviceId
		this.status = status
	}

	toPrimitives(): DeviceMonitoringCreatedDomainEventAttributes {
		return {
			deviceId: this.deviceId,
			status: this.status
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: DeviceMonitoringCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new DeviceMonitoringCreatedDomainEvent({
			aggregateId,
			deviceId: attributes.deviceId,
			status: attributes.status,
			eventId,
			occurredOn
		})
	}
}
