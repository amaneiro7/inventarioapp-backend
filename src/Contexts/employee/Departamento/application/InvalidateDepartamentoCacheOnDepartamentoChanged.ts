import { DepartamentoCreatedDomainEvent } from '../domain/event/DepartamentoCreatedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../domain/event/DepartamentoUpdatedDomainEvent'
import { DirectivaCreatedDomainEvent } from '../../Directiva/domain/event/DirectivaCreatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaCreatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaCreatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaCreatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaCreatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { type DepartamentoCacheInvalidator } from '../domain/repository/DepartamentoCacheInvalidator'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'

export class InvalidateDepartamentoCacheOnDepartamentoChanged implements DomainEventSubscriber<
	| DepartamentoCreatedDomainEvent
	| DepartamentoUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| DirectivaCreatedDomainEvent
	| VicepresidenciaCreatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| VicepresidenciaEjecutivaCreatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
> {
	private readonly invalidator: DepartamentoCacheInvalidator

	constructor({ departamentoRepository }: { departamentoRepository: DepartamentoCacheInvalidator }) {
		this.invalidator = departamentoRepository
	}

	async on(
		event:
			| DepartamentoCreatedDomainEvent
			| DepartamentoUpdatedDomainEvent
			| DirectivaCreatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaCreatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| VicepresidenciaEjecutivaCreatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
	): Promise<void> {
		const isDepartamentoEvent =
			event instanceof DepartamentoCreatedDomainEvent || event instanceof DepartamentoUpdatedDomainEvent
		await this.invalidator.invalidate(isDepartamentoEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
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
