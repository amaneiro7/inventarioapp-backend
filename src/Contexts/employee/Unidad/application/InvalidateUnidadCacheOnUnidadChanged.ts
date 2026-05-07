import { UnidadCreatedDomainEvent } from '../domain/event/UnidadCreatedDomainEvent'
import { UnidadUpdatedDomainEvent } from '../domain/event/UnidadUpdatedDomainEvent'
import { UnidadRemovedDomainEvent } from '../domain/event/UnidadRemovedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../Cargo/domain/event/CargoUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateUnidadCacheOnUnidadChanged implements DomainEventSubscriber<
	UnidadCreatedDomainEvent | UnidadUpdatedDomainEvent | UnidadRemovedDomainEvent | CargoUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ unidadRepository }: { unidadRepository: CacheInvalidator }) {
		this.invalidator = unidadRepository
	}

	async on(
		event: UnidadCreatedDomainEvent | UnidadUpdatedDomainEvent | UnidadRemovedDomainEvent | CargoUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof UnidadUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			const codigoInterno = changes.find(change => change.field === 'codigoInterno')?.oldValue as string
			const centroDeCosto = changes.find(change => change.field === 'centroDeCosto')?.oldValue as string

			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name,
				codigoInterno,
				centroDeCosto
			})
		} else if (event instanceof UnidadCreatedDomainEvent || event instanceof UnidadRemovedDomainEvent) {
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
		return [UnidadCreatedDomainEvent, UnidadUpdatedDomainEvent, UnidadRemovedDomainEvent, CargoUpdatedDomainEvent]
	}
}
