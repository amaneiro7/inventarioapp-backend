import { DepartamentoUpdatedDomainEvent } from '../../Departamento/domain/event/DepartamentoUpdatedDomainEvent'
import { DepartamentoCreatedDomainEvent } from '../../Departamento/domain/event/DepartamentoCreatedDomainEvent'
import { CargoCreatedDomainEvent } from '../domain/event/CargoCreatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../domain/event/CargoUpdatedDomainEvent'
import { DirectivaCreatedDomainEvent } from '../../Directiva/domain/event/DirectivaCreatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaCreatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaCreatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaCreatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaCreatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CargoCacheInvalidator } from '../domain/repository/CargoCacheInvalidator'

export class InvalidateCargoCacheOnCargoChanged implements DomainEventSubscriber<
	| CargoCreatedDomainEvent
	| CargoUpdatedDomainEvent
	| DepartamentoCreatedDomainEvent
	| DepartamentoUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| DirectivaCreatedDomainEvent
	| VicepresidenciaCreatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| VicepresidenciaEjecutivaCreatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
> {
	private readonly invalidator: CargoCacheInvalidator

	constructor({ cargoRepository }: { cargoRepository: CargoCacheInvalidator }) {
		this.invalidator = cargoRepository
	}

	async on(
		event:
			| CargoCreatedDomainEvent
			| CargoUpdatedDomainEvent
			| DepartamentoCreatedDomainEvent
			| DepartamentoUpdatedDomainEvent
			| DirectivaCreatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaCreatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| VicepresidenciaEjecutivaCreatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
	): Promise<void> {
		const isCargoEvent = event instanceof CargoCreatedDomainEvent || event instanceof CargoUpdatedDomainEvent
		await this.invalidator.invalidate(isCargoEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			CargoCreatedDomainEvent,
			CargoUpdatedDomainEvent,
			DepartamentoCreatedDomainEvent,
			DepartamentoUpdatedDomainEvent,
			DirectivaCreatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaCreatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			VicepresidenciaEjecutivaCreatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent
		]
	}
}
