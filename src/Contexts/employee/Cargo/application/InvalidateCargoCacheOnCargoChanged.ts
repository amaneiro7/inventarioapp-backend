import { CargoCreatedDomainEvent } from '../domain/event/CargoCreatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../domain/event/CargoUpdatedDomainEvent'
import { UnidadUpdatedDomainEvent } from '../../Unidad/domain/event/UnidadUpdatedDomainEvent'
import { CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'

export class InvalidateCargoCacheOnCargoChanged implements DomainEventSubscriber<
	CargoCreatedDomainEvent | CargoUpdatedDomainEvent | UnidadUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ cargoRepository }: { cargoRepository: CacheInvalidator }) {
		this.invalidator = cargoRepository
	}

	async on(event: CargoCreatedDomainEvent | CargoUpdatedDomainEvent | UnidadUpdatedDomainEvent): Promise<void> {
		if (event instanceof CargoUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof CargoCreatedDomainEvent) {
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
		return [CargoCreatedDomainEvent, CargoUpdatedDomainEvent, UnidadUpdatedDomainEvent]
	}
}
