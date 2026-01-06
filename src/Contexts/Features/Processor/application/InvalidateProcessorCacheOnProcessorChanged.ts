import { ProcessorCreatedDomainEvent } from '../domain/event/ProcessorCreatedDomainEvent'
import { ProcessorUpdatedDomainEvent } from '../domain/event/ProcessorUpdatedDomainEvent'
import { ProcessorRemovedDomainEvent } from '../domain/event/ProcessorRemovedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type ProcessorCacheInvalidator } from '../domain/repository/ProcessorCacheInvalidator'

export class InvalidateProcessorCacheOnProcessorChanged implements DomainEventSubscriber<
	ProcessorCreatedDomainEvent | ProcessorUpdatedDomainEvent | ProcessorRemovedDomainEvent
> {
	private readonly invalidator: ProcessorCacheInvalidator

	constructor({ processorRepository }: { processorRepository: ProcessorCacheInvalidator }) {
		this.invalidator = processorRepository
	}

	async on(
		event: ProcessorCreatedDomainEvent | ProcessorUpdatedDomainEvent | ProcessorRemovedDomainEvent
	): Promise<void> {
		const isProcessorEvent =
			event instanceof ProcessorCreatedDomainEvent ||
			event instanceof ProcessorUpdatedDomainEvent ||
			event instanceof ProcessorRemovedDomainEvent

		await this.invalidator.invalidate(isProcessorEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [ProcessorCreatedDomainEvent, ProcessorUpdatedDomainEvent, ProcessorRemovedDomainEvent]
	}
}
