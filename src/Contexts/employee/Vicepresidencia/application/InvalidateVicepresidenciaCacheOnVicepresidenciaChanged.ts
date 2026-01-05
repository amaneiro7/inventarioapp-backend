import { VicepresidenciaCreatedDomainEvent } from '../domain/event/VicepresidenciaCreatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../domain/event/VicepresidenciaUpdatedDomainEvent'
import { DirectivaCreatedDomainEvent } from '../../Directiva/domain/event/DirectivaCreatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaCreatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type VicepresidenciaCacheInvalidator } from '../domain/repository/VicepresidenciaCacheInvalidator'

export class InvalidateVicepresidenciaCacheOnVicepresidenciaChanged implements DomainEventSubscriber<
	| VicepresidenciaCreatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| DirectivaCreatedDomainEvent
	| VicepresidenciaEjecutivaCreatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
> {
	private readonly invalidator: VicepresidenciaCacheInvalidator

	constructor({ vicepresidenciaRepository }: { vicepresidenciaRepository: VicepresidenciaCacheInvalidator }) {
		this.invalidator = vicepresidenciaRepository
	}

	async on(
		event:
			| VicepresidenciaCreatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| DirectivaCreatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaEjecutivaCreatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
	): Promise<void> {
		const isVicepresidenciaEvent =
			event instanceof VicepresidenciaCreatedDomainEvent || event instanceof VicepresidenciaUpdatedDomainEvent
		await this.invalidator.invalidate(isVicepresidenciaEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			VicepresidenciaCreatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			DirectivaCreatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaEjecutivaCreatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent
		]
	}
}
