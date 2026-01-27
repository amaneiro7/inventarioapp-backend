import { EmployeeTypeChangedDomainEvent } from '../domain/event/EmployeeTypeChangedDomainEvent'
import { EmployeeReactivatedDomainEvent } from '../domain/event/EmployeeReactivatedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../../Departamento/domain/event/DepartamentoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { EmployeeCreatedDomainEvent } from '../domain/event/EmployeeCreatedDomainEvent'
import { EmployeeUpdatedDomainEvent } from '../domain/event/EmployeeUpdatedDomainEvent'
import { EmployeeRemovedDomainEvent } from '../domain/event/EmployeeRemovedDomainEvent'
import { LocationUpdatedDomainEvent } from '../../../Location/Location/domain/event/LocationUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../Cargo/domain/event/CargoUpdatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../../../Location/Site/domain/event/SiteUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../../Location/City/domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../../Location/Region/domain/events/RegionUpdatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../../../Device/Device/domain/event/DeviceUpdatedDomainEvent'
import { DeviceCreatedDomainEvent } from '../../../Device/Device/domain/event/DeviceCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateEmployeeCacheOnEmployeeChanged implements DomainEventSubscriber<
	| EmployeeCreatedDomainEvent
	| EmployeeUpdatedDomainEvent
	| EmployeeRemovedDomainEvent
	| EmployeeTypeChangedDomainEvent
	| EmployeeReactivatedDomainEvent
	| DeviceUpdatedDomainEvent
	| DeviceCreatedDomainEvent
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

	constructor({ employeeRepository }: { employeeRepository: CacheInvalidator }) {
		this.invalidator = employeeRepository
	}

	async on(
		event:
			| EmployeeCreatedDomainEvent
			| EmployeeUpdatedDomainEvent
			| EmployeeRemovedDomainEvent
			| EmployeeTypeChangedDomainEvent
			| EmployeeReactivatedDomainEvent
			| DeviceUpdatedDomainEvent
			| DeviceCreatedDomainEvent
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
		if (event instanceof EmployeeUpdatedDomainEvent) {
			const { changes } = event
			const email = changes.find(change => change.field === 'email')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				email
			})
		} else if (event instanceof EmployeeCreatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				userName: event.userName,
				email: event.email
			})
		} else if (
			event instanceof EmployeeRemovedDomainEvent ||
			event instanceof EmployeeTypeChangedDomainEvent ||
			event instanceof EmployeeReactivatedDomainEvent
		) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId
			})
		} else {
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [
			EmployeeCreatedDomainEvent,
			EmployeeUpdatedDomainEvent,
			EmployeeRemovedDomainEvent,
			DeviceUpdatedDomainEvent,
			DeviceCreatedDomainEvent,
			EmployeeReactivatedDomainEvent,
			EmployeeTypeChangedDomainEvent,
			CargoUpdatedDomainEvent,
			DepartamentoUpdatedDomainEvent,
			LocationUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent
		]
	}
}
