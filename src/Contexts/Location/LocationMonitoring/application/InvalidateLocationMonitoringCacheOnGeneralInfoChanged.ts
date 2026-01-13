import { LocationUpdatedDomainEvent } from '../../../Location/Location/domain/event/LocationUpdatedDomainEvent'
import { LocationRenamedDomainEvent } from '../../../Location/Location/domain/event/LocationRenamedDomainEvent'
import { SiteUpdatedDomainEvent } from '../../../Location/Site/domain/event/SiteUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../../Location/City/domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../../Location/Region/domain/events/RegionUpdatedDomainEvent'
import { LocationMonitoringCreatedDomainEvent } from '../domain/event/LocationMonitoringCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateLocationMonitoringCacheOnGeneralInfoChanged implements DomainEventSubscriber<
	| LocationUpdatedDomainEvent
	| LocationRenamedDomainEvent
	| LocationMonitoringCreatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ locationMonitoringRepository }: { locationMonitoringRepository: CacheInvalidator }) {
		this.invalidator = locationMonitoringRepository
	}

	async on(
		event:
			| LocationUpdatedDomainEvent
			| LocationRenamedDomainEvent
			| LocationMonitoringCreatedDomainEvent
			| SiteUpdatedDomainEvent
			| CityUpdatedDomainEvent
			| RegionUpdatedDomainEvent
	): Promise<void> {
		if (
			event instanceof LocationUpdatedDomainEvent ||
			event instanceof LocationRenamedDomainEvent ||
			event instanceof LocationMonitoringCreatedDomainEvent
		) {
			// Si cambia la ubicación específica o se crea el monitoreo, invalidamos listas y esa entrada.
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId
			})
		} else {
			// Para cambios en la jerarquía (Site, City, Region), invalidamos toda la caché de listas
			// ya que afecta a los filtros y agrupaciones del dashboard.
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [
			LocationUpdatedDomainEvent,
			LocationRenamedDomainEvent,
			LocationMonitoringCreatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent
		]
	}
}
