import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type ModelSeriesCacheInvalidator } from '../domain/repository/ModelSeriesCacheInvalidator'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { ModelSeriesCreatedDomainEvent } from '../domain/event/ModelSeriesCreatedDomainEvent'
import { ModelSeriesUpdatedDomainEvent } from '../domain/event/ModelSeriesUpdatedDomainEvent'

export class InvalidateModelSeriesCacheOnModelSeriesChanged implements DomainEventSubscriber<
	ModelSeriesCreatedDomainEvent | ModelSeriesUpdatedDomainEvent
> {
	private readonly invalidator: ModelSeriesCacheInvalidator

	constructor({ modelSeriesRepository }: { modelSeriesRepository: ModelSeriesCacheInvalidator }) {
		this.invalidator = modelSeriesRepository
	}

	async on(): Promise<void> {
		await this.invalidator.invalidateModelSeriesCache()
	}

	subscribedTo(): DomainEventClass[] {
		return [ModelSeriesCreatedDomainEvent, ModelSeriesUpdatedDomainEvent]
	}
}
