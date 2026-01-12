import { VicepresidenciaEjecutivaCreatedDomainEvent } from '../domain/event/VicepresidenciaEjecutivaCreatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../Cargo/domain/event/CargoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateVicepresidenciaEjecutivaCacheOnVicepresidenciaEjecutivaChanged implements DomainEventSubscriber<
	| VicepresidenciaEjecutivaCreatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| CargoUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ vicepresidenciaEjecutivaRepository }: { vicepresidenciaEjecutivaRepository: CacheInvalidator }) {
		this.invalidator = vicepresidenciaEjecutivaRepository
	}

	async on(
		event:
			| VicepresidenciaEjecutivaCreatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| CargoUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof VicepresidenciaEjecutivaUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof VicepresidenciaEjecutivaCreatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name: event.name
			})
		} else {
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [
			VicepresidenciaEjecutivaCreatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			CargoUpdatedDomainEvent
		]
	}
}
