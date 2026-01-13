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
		const { changes } = event
		// Solo nos importa si cambia el estatus (ej. de InUse a Deprecated) o la IP (si viene por update genérico)
		const statusChanged = changes.some(change => change.field === 'statusId')
		const ipChanged = changes.some(change => change.field === 'ipAddress')
		const computerName = changes.some(change => change.field === 'computerName')

		if (statusChanged || ipChanged || computerName) {
			await this.service.invalidateActiveIpList()
			await this.service.syncFromDeviceChange(event.aggregateId)
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [DeviceUpdatedDomainEvent]
	}
}
