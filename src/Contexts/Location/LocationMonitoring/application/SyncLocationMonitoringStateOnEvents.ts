import { LocationMonitoringCreatedDomainEvent } from '../domain/event/LocationMonitoringCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type LocationMonitoringService } from './LocationMonitoringService'

/**
 * Suscriptor encargado de mantener sincronizado el estado en memoria del servicio de monitoreo.
 * Cuando ocurre un evento relevante (creación), actualiza el mapa local del servicio.
 */
export class SyncLocationMonitoringStateOnEvents implements DomainEventSubscriber<LocationMonitoringCreatedDomainEvent> {
	private readonly service: LocationMonitoringService

	constructor({ locationMonitoringService }: { locationMonitoringService: LocationMonitoringService }) {
		this.service = locationMonitoringService
	}

	async on(event: LocationMonitoringCreatedDomainEvent): Promise<void> {
		const monitoringId = event.aggregateId
		// Llamamos al método que creamos en el servicio para actualizar la memoria local
		await this.service.upsertLocalItem(monitoringId)
	}

	subscribedTo(): DomainEventClass[] {
		return [LocationMonitoringCreatedDomainEvent]
	}
}
