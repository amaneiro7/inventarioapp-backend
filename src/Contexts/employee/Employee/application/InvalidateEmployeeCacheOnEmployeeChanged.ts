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
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type EmployeeCacheInvalidator } from '../domain/Repository/EmployeeCacheInvalidator'
import { SiteUpdatedDomainEvent } from '../../../Location/Site/domain/event/SiteUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../../Location/City/domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../../Location/Region/domain/events/RegionUpdatedDomainEvent'

export class InvalidateEmployeeCacheOnEmployeeChanged implements DomainEventSubscriber<
	| EmployeeCreatedDomainEvent
	| EmployeeUpdatedDomainEvent
	| EmployeeRemovedDomainEvent
	| EmployeeTypeChangedDomainEvent
	| EmployeeReactivatedDomainEvent
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
	private readonly invalidator: EmployeeCacheInvalidator

	constructor({ employeeRepository }: { employeeRepository: EmployeeCacheInvalidator }) {
		this.invalidator = employeeRepository
	}

	async on(
		event:
			| EmployeeCreatedDomainEvent
			| EmployeeUpdatedDomainEvent
			| EmployeeRemovedDomainEvent
			| EmployeeTypeChangedDomainEvent
			| EmployeeReactivatedDomainEvent
			| CargoUpdatedDomainEvent
			| DepartamentoUpdatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
			| LocationUpdatedDomainEvent
	): Promise<void> {
		const isEmployeeEvent =
			event instanceof EmployeeCreatedDomainEvent ||
			event instanceof EmployeeUpdatedDomainEvent ||
			event instanceof EmployeeRemovedDomainEvent ||
			event instanceof EmployeeReactivatedDomainEvent ||
			event instanceof EmployeeTypeChangedDomainEvent
		await this.invalidator.invalidate(isEmployeeEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			EmployeeCreatedDomainEvent,
			EmployeeUpdatedDomainEvent,
			EmployeeRemovedDomainEvent,
			EmployeeReactivatedDomainEvent,
			EmployeeTypeChangedDomainEvent,
			CargoUpdatedDomainEvent,
			DepartamentoUpdatedDomainEvent,
			LocationUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent
		]
	}
}
