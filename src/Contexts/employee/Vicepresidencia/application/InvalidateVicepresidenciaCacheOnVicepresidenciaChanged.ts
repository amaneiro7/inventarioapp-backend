import { VicepresidenciaCreatedDomainEvent } from '../domain/event/VicepresidenciaCreatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../domain/event/VicepresidenciaUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../Cargo/domain/event/CargoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateVicepresidenciaCacheOnVicepresidenciaChanged implements DomainEventSubscriber<
	| VicepresidenciaCreatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
	| CargoUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ vicepresidenciaRepository }: { vicepresidenciaRepository: CacheInvalidator }) {
		this.invalidator = vicepresidenciaRepository
	}

	async on(
		event:
			| VicepresidenciaCreatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
			| CargoUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof VicepresidenciaUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof VicepresidenciaCreatedDomainEvent) {
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
			VicepresidenciaCreatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent,
			CargoUpdatedDomainEvent
		]
	}
}
