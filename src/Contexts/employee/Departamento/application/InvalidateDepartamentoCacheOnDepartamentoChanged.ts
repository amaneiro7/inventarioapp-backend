import { DepartamentoCreatedDomainEvent } from '../domain/event/DepartamentoCreatedDomainEvent'
import { DepartamentoUpdatedDomainEvent } from '../domain/event/DepartamentoUpdatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../../Directiva/domain/event/DirectivaUpdatedDomainEvent'
import { VicepresidenciaUpdatedDomainEvent } from '../../Vicepresidencia/domain/event/VicepresidenciaUpdatedDomainEvent'
import { VicepresidenciaEjecutivaUpdatedDomainEvent } from '../../VicepresidenciaEjecutiva/domain/event/VicepresidenciaEjecutivaUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../Cargo/domain/event/CargoUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateDepartamentoCacheOnDepartamentoChanged implements DomainEventSubscriber<
	| DepartamentoCreatedDomainEvent
	| DepartamentoUpdatedDomainEvent
	| DirectivaUpdatedDomainEvent
	| VicepresidenciaEjecutivaUpdatedDomainEvent
	| VicepresidenciaUpdatedDomainEvent
	| CargoUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ departamentoRepository }: { departamentoRepository: CacheInvalidator }) {
		this.invalidator = departamentoRepository
	}

	async on(
		event:
			| DepartamentoCreatedDomainEvent
			| DepartamentoUpdatedDomainEvent
			| DirectivaUpdatedDomainEvent
			| VicepresidenciaEjecutivaUpdatedDomainEvent
			| VicepresidenciaUpdatedDomainEvent
			| CargoUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof DepartamentoUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof DepartamentoCreatedDomainEvent) {
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
			DepartamentoCreatedDomainEvent,
			DepartamentoUpdatedDomainEvent,
			DirectivaUpdatedDomainEvent,
			VicepresidenciaEjecutivaUpdatedDomainEvent,
			VicepresidenciaUpdatedDomainEvent,
			CargoUpdatedDomainEvent
		]
	}
}
