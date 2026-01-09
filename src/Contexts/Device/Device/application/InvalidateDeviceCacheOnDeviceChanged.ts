import { CityCreatedDomainEvent } from '../../../Location/City/domain/event/CityCreatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../../Location/City/domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../../Location/Region/domain/events/RegionUpdatedDomainEvent'
import { SiteCreatedDomainEvent } from '../../../Location/Site/domain/event/SiteCreatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../../../Location/Site/domain/event/SiteUpdatedDomainEvent'
import { DeviceCreatedDomainEvent } from '../domain/event/DeviceCreatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../domain/event/DeviceUpdatedDomainEvent'
import { DeviceCacheInvalidator } from '../domain/repository/DeviceCacheInvalidator'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'

export class InvalidateDeviceCacheOnDeviceChanged implements DomainEventSubscriber<
	| DeviceCreatedDomainEvent
	| DeviceUpdatedDomainEvent
	| SiteCreatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityCreatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
> {
	private readonly invalidator: DeviceCacheInvalidator

	constructor({ deviceRepository }: { deviceRepository: DeviceCacheInvalidator }) {
		this.invalidator = deviceRepository
	}

	async on(
		event:
			| DeviceCreatedDomainEvent
			| DeviceUpdatedDomainEvent
			| SiteCreatedDomainEvent
			| SiteUpdatedDomainEvent
			| CityCreatedDomainEvent
			| CityUpdatedDomainEvent
			| RegionUpdatedDomainEvent
	): Promise<void> {
		const isDeviceEvent = event instanceof DeviceCreatedDomainEvent || event instanceof DeviceUpdatedDomainEvent

		// Si es Device, invalidamos específico
		await this.invalidator.invalidate(isDeviceEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			DeviceCreatedDomainEvent,
			DeviceUpdatedDomainEvent,
			SiteCreatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityCreatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent
		]
	}
}
