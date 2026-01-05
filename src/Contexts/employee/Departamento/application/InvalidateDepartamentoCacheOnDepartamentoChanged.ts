import { DepartamentoCreatedDomainEvent } from '../domain/event/DepartamentoCreatedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../domain/event/DepartamentoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../Cargo/domain/event/CargoUpdatedDomainEvent'
import { type DepartamentoCacheInvalidator } from '../domain/repository/DepartamentoCacheInvalidator'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'

export class InvalidateDepartamentoCacheOnDepartamentoChanged implements DomainEventSubscriber<
	| DepartamentoCreatedDomainEvent
	| DepartamentoUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| CargoUpdatedDomainEvent
> {
	private readonly invalidator: DepartamentoCacheInvalidator

	constructor({ departamentoRepository }: { departamentoRepository: DepartamentoCacheInvalidator }) {
		this.invalidator = departamentoRepository
	}

	async on(
		event:
			| DepartamentoCreatedDomainEvent
			| DepartamentoUpdatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| CargoUpdatedDomainEvent
	): Promise<void> {
		const isDepartamentoEvent =
			event instanceof DepartamentoCreatedDomainEvent || event instanceof DepartamentoUpdatedDomainEvent
		await this.invalidator.invalidate(isDepartamentoEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			DepartamentoCreatedDomainEvent,
			DepartamentoUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			CargoUpdatedDomainEvent
		]
	}
}
