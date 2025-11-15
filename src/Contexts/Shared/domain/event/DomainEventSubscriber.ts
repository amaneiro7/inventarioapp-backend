import { DomainEventClass, type DomainEvent } from './DomainEvent'

export interface DomainEventSubscriber<T extends DomainEvent> {
	on: (domainEvent: T) => Promise<void>

	subscribedTo: () => DomainEventClass[]
	//subscribedTo: () => DomainEventName<T>[]
}
