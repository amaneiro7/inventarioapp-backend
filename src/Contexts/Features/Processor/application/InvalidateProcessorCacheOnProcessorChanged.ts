import { ProcessorCreatedDomainEvent } from '../domain/event/ProcessorCreatedDomainEvent'
import { ProcessorUpdatedDomainEvent } from '../domain/event/ProcessorUpdatedDomainEvent'
import { ProcessorRemovedDomainEvent } from '../domain/event/ProcessorRemovedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateProcessorCacheOnProcessorChanged implements DomainEventSubscriber<
	ProcessorCreatedDomainEvent | ProcessorUpdatedDomainEvent | ProcessorRemovedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ processorRepository }: { processorRepository: CacheInvalidator }) {
		this.invalidator = processorRepository
	}

	async on(
		event: ProcessorCreatedDomainEvent | ProcessorUpdatedDomainEvent | ProcessorRemovedDomainEvent
	): Promise<void> {
		if (event instanceof ProcessorUpdatedDomainEvent) {
			const { changes } = event
			const numberModel = changes.find(change => change.field === 'numberModel')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				numberModel
			})
		} else if (event instanceof ProcessorCreatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				numberModel: event.numberModel
			})
		} else {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId
			})
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [ProcessorCreatedDomainEvent, ProcessorUpdatedDomainEvent, ProcessorRemovedDomainEvent]
	}
}
