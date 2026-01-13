import { DeviceUpdatedDomainEvent } from '../../Device/domain/event/DeviceUpdatedDomainEvent'
import { DeviceRemovedDomainEvent } from '../../Device/domain/event/DeviceRemovedDomainEvent'
import { DeviceMonitoringCreatedDomainEvent } from '../domain/event/DeviceMonitoringCreatedDomainEvent'
import { DeviceComputer } from '../../Device/domain/entity/Computer'
import { EmployeeUpdatedDomainEvent } from '../../../employee/Employee/domain/event/EmployeeUpdatedDomainEvent'
import { LocationUpdatedDomainEvent } from '../../../Location/Location/domain/event/LocationUpdatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../../../Location/Site/domain/event/SiteUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../../Location/City/domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../../Location/Region/domain/events/RegionUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../../employee/Cargo/domain/event/CargoUpdatedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../../../employee/Departamento/domain/event/DepartamentoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../../employee/Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../../employee/Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../../employee/VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateDeviceMonitoringCacheOnGeneralInfoChanged implements DomainEventSubscriber<
	| DeviceUpdatedDomainEvent
	| DeviceRemovedDomainEvent
	| DeviceMonitoringCreatedDomainEvent
	| EmployeeUpdatedDomainEvent
	| LocationUpdatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
	| CargoUpdatedDomainEvent
	| DepartamentoUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ deviceMonitoringRepository }: { deviceMonitoringRepository: CacheInvalidator }) {
		this.invalidator = deviceMonitoringRepository
	}

	async on(
		event:
			| DeviceUpdatedDomainEvent
			| DeviceRemovedDomainEvent
			| DeviceMonitoringCreatedDomainEvent
			| EmployeeUpdatedDomainEvent
			| LocationUpdatedDomainEvent
			| SiteUpdatedDomainEvent
			| CityUpdatedDomainEvent
			| RegionUpdatedDomainEvent
			| CargoUpdatedDomainEvent
			| DepartamentoUpdatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof DeviceUpdatedDomainEvent) {
			// Solo invalidamos si el dispositivo es una computadora, ya que son los únicos monitoreados
			if (DeviceComputer.isComputerCategory({ categoryId: event.newEntity.categoryId })) {
				await this.invalidator.invalidate({
					id: event.aggregateId,
					key: event.aggregateId
				})
			}
		} else if (event instanceof DeviceRemovedDomainEvent || event instanceof DeviceMonitoringCreatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId
			})
		} else {
			// Para cambios en entidades relacionadas (Empleado, Ubicación, etc.), invalidamos toda la caché de listas
			// ya que estos cambios afectan a múltiples dispositivos en los dashboards y listados.
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [
			DeviceUpdatedDomainEvent,
			DeviceRemovedDomainEvent,
			DeviceMonitoringCreatedDomainEvent,
			EmployeeUpdatedDomainEvent,
			LocationUpdatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent,
			CargoUpdatedDomainEvent,
			DepartamentoUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent
		]
	}
}
