import { HistoryCreatedDomainEvent } from '../domain/event/HistoryCreatedDomainEvent'
import { HistoryCacheInvalidator } from '../domain/repository/HistoryCacheInvalidator'
import { type DomainEventClass } from '../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../Shared/domain/event/DomainEventSubscriber'

export class InvalidateHistoryCacheOnHistoryChanged implements DomainEventSubscriber<HistoryCreatedDomainEvent> {
	private readonly invalidator: HistoryCacheInvalidator

	constructor({ historyRepository }: { historyRepository: HistoryCacheInvalidator }) {
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
