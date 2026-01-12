import { CityUpdatedDomainEvent } from '../../../Location/City/domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../../Location/Region/domain/events/RegionUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../../employee/Cargo/domain/event/CargoUpdatedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../../../employee/Departamento/domain/event/DepartamentoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../../employee/Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../../employee/Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../../employee/VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { BrandUpdatedDomainEvent } from '../../../Brand/domain/event/BrandUpdatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../../../Location/Site/domain/event/SiteUpdatedDomainEvent'
import { DeviceCreatedDomainEvent } from '../domain/event/DeviceCreatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../domain/event/DeviceUpdatedDomainEvent'
import { DeviceRemovedDomainEvent } from '../domain/event/DeviceRemovedDomainEvent'
import { EmployeeUpdatedDomainEvent } from '../../../employee/Employee/domain/event/EmployeeUpdatedDomainEvent'
import { LocationUpdatedDomainEvent } from '../../../Location/Location/domain/event/LocationUpdatedDomainEvent'
import { ProcessorUpdatedDomainEvent } from '../../../Features/Processor/domain/event/ProcessorUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateDeviceCacheOnDeviceChanged implements DomainEventSubscriber<
	| DeviceCreatedDomainEvent
	| DeviceUpdatedDomainEvent
	| DeviceRemovedDomainEvent
	| BrandUpdatedDomainEvent
	| ProcessorUpdatedDomainEvent
	| EmployeeUpdatedDomainEvent
	| CargoUpdatedDomainEvent
	| DepartamentoUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
	| LocationUpdatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ deviceRepository }: { deviceRepository: CacheInvalidator }) {
		this.invalidator = deviceRepository
	}

	async on(
		event:
			| DeviceCreatedDomainEvent
			| DeviceUpdatedDomainEvent
			| DeviceRemovedDomainEvent
			| BrandUpdatedDomainEvent
			| ProcessorUpdatedDomainEvent
			| EmployeeUpdatedDomainEvent
			| CargoUpdatedDomainEvent
			| DepartamentoUpdatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
			| LocationUpdatedDomainEvent
			| SiteUpdatedDomainEvent
			| CityUpdatedDomainEvent
			| RegionUpdatedDomainEvent
	): Promise<void> {
		const isDeviceEvent =
			event instanceof DeviceCreatedDomainEvent ||
			event instanceof DeviceUpdatedDomainEvent ||
			event instanceof DeviceRemovedDomainEvent

		if (isDeviceEvent) {
			const { serial, activo } = event as DeviceCreatedDomainEvent | DeviceUpdatedDomainEvent

			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				serial,
				activo
			})
		} else {
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [
			DeviceCreatedDomainEvent,
			DeviceUpdatedDomainEvent,
			DeviceRemovedDomainEvent,
			BrandUpdatedDomainEvent,
			ProcessorUpdatedDomainEvent,
			EmployeeUpdatedDomainEvent,
			CargoUpdatedDomainEvent,
			DepartamentoUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent,
			LocationUpdatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent
		]
	}
}
