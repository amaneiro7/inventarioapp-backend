import { VicepresidenciaEjecutivaCreatedDomainEvent } from '../domain/event/VicepresidenciaEjecutivaCreatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { DirectivaCreatedDomainEvent } from '../../Directiva/domain/event/DirectivaCreatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type VicepresidenciaEjecutivaCacheInvalidator } from '../domain/repository/VicepresidenciaEjecutivaCacheInvalidator'

export class InvalidateVicepresidenciaEjecutivaCacheOnVicepresidenciaEjecutivaChanged implements DomainEventSubscriber<
	| VicepresidenciaEjecutivaCreatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| DirectivaCreatedDomainEvent
> {
	private readonly invalidator: VicepresidenciaEjecutivaCacheInvalidator

	constructor({
		vicepresidenciaEjecutivaRepository
	}: {
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaCacheInvalidator
	}) {
		this.invalidator = vicepresidenciaEjecutivaRepository
	}

	async on(
		event:
			| VicepresidenciaEjecutivaCreatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
			| DirectivaCreatedDomainEvent
			| DirectivaUpdatedDomainEvent
	): Promise<void> {
		const isVicepresidenciaEjecutivaEvent =
			event instanceof VicepresidenciaEjecutivaCreatedDomainEvent ||
			event instanceof VicepresidenciaEjecutivaUpdatedDomainEvent
		await this.invalidator.invalidate(isVicepresidenciaEjecutivaEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			VicepresidenciaEjecutivaCreatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent,
			DirectivaCreatedDomainEvent,
			DirectivaUpdatedDomainEvent
		]
	}
}
