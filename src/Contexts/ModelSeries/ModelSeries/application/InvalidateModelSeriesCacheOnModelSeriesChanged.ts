import { ModelSeriesCreatedDomainEvent } from '../domain/event/ModelSeriesCreatedDomainEvent'
import { ModelSeriesUpdatedDomainEvent } from '../domain/event/ModelSeriesUpdatedDomainEvent'
import { ProcessorUpdatedDomainEvent } from '../../../Features/Processor/domain/event/ProcessorUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type ModelSeriesCacheInvalidator } from '../domain/repository/ModelSeriesCacheInvalidator'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'

export class InvalidateModelSeriesCacheOnModelSeriesChanged implements DomainEventSubscriber<
	ModelSeriesCreatedDomainEvent | ModelSeriesUpdatedDomainEvent | ProcessorUpdatedDomainEvent
> {
	private readonly invalidator: ModelSeriesCacheInvalidator

	constructor({ modelSeriesRepository }: { modelSeriesRepository: ModelSeriesCacheInvalidator }) {
		this.invalidator = modelSeriesRepository
	}

	async on(
		event: ModelSeriesCreatedDomainEvent | ModelSeriesUpdatedDomainEvent | ProcessorUpdatedDomainEvent
	): Promise<void> {
		const isModelSeriesEvent =
			event instanceof ModelSeriesCreatedDomainEvent || event instanceof ModelSeriesUpdatedDomainEvent
		await this.invalidator.invalidate(isModelSeriesEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [ModelSeriesCreatedDomainEvent, ModelSeriesUpdatedDomainEvent]
	}
}
