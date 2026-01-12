import { ModelSeriesCreatedDomainEvent } from '../domain/event/ModelSeriesCreatedDomainEvent'
import { ModelSeriesUpdatedDomainEvent } from '../domain/event/ModelSeriesUpdatedDomainEvent'
import { ProcessorUpdatedDomainEvent } from '../../../Features/Processor/domain/event/ProcessorUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateModelSeriesCacheOnModelSeriesChanged implements DomainEventSubscriber<
	ModelSeriesCreatedDomainEvent | ModelSeriesUpdatedDomainEvent | ProcessorUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ modelSeriesRepository }: { modelSeriesRepository: CacheInvalidator }) {
		this.invalidator = modelSeriesRepository
	}

	async on(
		event: ModelSeriesCreatedDomainEvent | ModelSeriesUpdatedDomainEvent | ProcessorUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof ModelSeriesUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			const brandId = changes.find(change => change.field === 'brandId')?.oldValue as string
			const categoryId = changes.find(change => change.field === 'categoryId')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name,
				brandId,
				categoryId
			})
		} else if (event instanceof ModelSeriesCreatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name: event.name,
				brandId: event.brandId,
				categoryId: event.categoryId
			})
		} else {
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [ModelSeriesCreatedDomainEvent, ModelSeriesUpdatedDomainEvent, ProcessorUpdatedDomainEvent]
	}
}
