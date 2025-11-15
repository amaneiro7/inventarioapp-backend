import { AwilixContainer } from 'awilix'
import { DomainEventSubscriber } from '../../domain/event/DomainEventSubscriber'
import { DomainEvent } from '../../domain/event/DomainEvent'
import { DomainEventDependencies } from '../../../../apps/di/domain-event-bus/domainEvent.di'

export class DomainEventSubscribers {
	constructor(public items: DomainEventSubscriber<DomainEvent>[]) {}

	static from(container: AwilixContainer): DomainEventSubscribers {
		const items = Object.values(DomainEventDependencies).map(value =>
			container.resolve<DomainEventSubscriber<DomainEvent>>(value)
		)
		return new DomainEventSubscribers(items)
	}
}
