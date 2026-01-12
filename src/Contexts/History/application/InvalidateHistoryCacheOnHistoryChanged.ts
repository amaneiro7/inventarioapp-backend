import { HistoryCreatedDomainEvent } from '../domain/event/HistoryCreatedDomainEvent'
import { type DomainEventClass } from '../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../Shared/domain/repository/CacheInvalidator'

export class InvalidateHistoryCacheOnHistoryChanged implements DomainEventSubscriber<HistoryCreatedDomainEvent> {
	private readonly invalidator: CacheInvalidator

	constructor({ historyRepository }: { historyRepository: CacheInvalidator }) {
		this.invalidator = historyRepository
	}

	async on(event: HistoryCreatedDomainEvent): Promise<void> {
		const isHistoryEvent = event instanceof HistoryCreatedDomainEvent
		// Si es History, invalidamos específico
		await this.invalidator.invalidate(isHistoryEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [HistoryCreatedDomainEvent]
	}
}
