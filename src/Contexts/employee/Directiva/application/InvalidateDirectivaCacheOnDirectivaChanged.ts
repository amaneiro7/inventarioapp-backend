import { DirectivaCreatedDomainEvent } from '../domain/event/DirectivaCreatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../domain/event/DirectivaUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../Cargo/domain/event/CargoUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateDirectivaCacheOnDirectivaChanged implements DomainEventSubscriber<
	DirectivaCreatedDomainEvent | DirectivaUpdatedDomainEvent | CargoUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ directivaRepository }: { directivaRepository: CacheInvalidator }) {
		this.invalidator = directivaRepository
	}

	async on(
		event: DirectivaCreatedDomainEvent | DirectivaUpdatedDomainEvent | CargoUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof DirectivaUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof DirectivaCreatedDomainEvent) {
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
		return [DirectivaCreatedDomainEvent, DirectivaUpdatedDomainEvent, CargoUpdatedDomainEvent]
	}
}
