import { DeviceUpdatedDomainEvent } from '../../Device/domain/event/DeviceUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type DeviceMonitoringService } from './DeviceMonitoringService'

export class InvalidateDeviceMonitoringCacheOnDeviceChanged implements DomainEventSubscriber<DeviceUpdatedDomainEvent> {
	private readonly service: DeviceMonitoringService

	constructor({ deviceMonitoringService }: { deviceMonitoringService: DeviceMonitoringService }) {
		this.service = deviceMonitoringService
	}

	async on(event: DeviceUpdatedDomainEvent): Promise<void> {
		await this.service.syncFromDeviceChange(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [DeviceUpdatedDomainEvent]
	}
}
