import { DeviceMonitoringCreatedDomainEvent } from '../domain/event/DeviceMonitoringCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type DeviceMonitoringService } from './DeviceMonitoringService'

/**
 * Suscriptor encargado de mantener sincronizado el estado en memoria del servicio de monitoreo.
 * Cuando ocurre un evento relevante (creación), actualiza el mapa local del servicio.
 */
export class SyncDeviceMonitoringStateOnEvents implements DomainEventSubscriber<DeviceMonitoringCreatedDomainEvent> {
	private readonly service: DeviceMonitoringService

	constructor({ deviceMonitoringService }: { deviceMonitoringService: DeviceMonitoringService }) {
		this.service = deviceMonitoringService
	}

	async on(event: DeviceMonitoringCreatedDomainEvent): Promise<void> {
		const monitoringId = event.aggregateId
		// Llamamos al método que creamos en el servicio para actualizar la memoria local
		await this.service.upsertLocalItem(monitoringId)
	}

	subscribedTo(): DomainEventClass[] {
		return [DeviceMonitoringCreatedDomainEvent]
	}
}
