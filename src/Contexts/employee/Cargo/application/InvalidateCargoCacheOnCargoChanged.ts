import { CargoCreatedDomainEvent } from '../domain/event/CargoCreatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../domain/event/CargoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../../Departamento/domain/event/DepartamentoUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateCargoCacheOnCargoChanged implements DomainEventSubscriber<
	| CargoCreatedDomainEvent
	| CargoUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| DepartamentoUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ cargoRepository }: { cargoRepository: CacheInvalidator }) {
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
