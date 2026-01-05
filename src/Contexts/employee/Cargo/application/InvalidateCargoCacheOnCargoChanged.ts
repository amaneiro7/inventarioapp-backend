import { CargoCreatedDomainEvent } from '../domain/event/CargoCreatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../domain/event/CargoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../../Departamento/domain/event/DepartamentoUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CargoCacheInvalidator } from '../domain/repository/CargoCacheInvalidator'

export class InvalidateCargoCacheOnCargoChanged implements DomainEventSubscriber<
	| CargoCreatedDomainEvent
	| CargoUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| DepartamentoUpdatedDomainEvent
> {
	private readonly invalidator: CargoCacheInvalidator

	constructor({ cargoRepository }: { cargoRepository: CargoCacheInvalidator }) {
		this.invalidator = cargoRepository
	}

	async on(
		event:
			| CargoCreatedDomainEvent
			| CargoUpdatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| DepartamentoUpdatedDomainEvent
	): Promise<void> {
		const isCargoEvent = event instanceof CargoCreatedDomainEvent || event instanceof CargoUpdatedDomainEvent
		await this.invalidator.invalidate(isCargoEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			CargoCreatedDomainEvent,
			CargoUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			DepartamentoUpdatedDomainEvent
		]
	}
}
