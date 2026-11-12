import { AwilixContainer } from 'awilix'
import { DomainEventSubscriber } from '../../domain/event/DomainEventSubscriber'
import { DomainEvent } from '../../domain/event/DomainEvent'
import { DomainEventDependencies } from '../../../../apps/di/domain-event-bus/domainEvent.di'

export class DomainEventSubscribers {
	constructor(public items: DomainEventSubscriber<DomainEvent>[]) {}

	static from(container: AwilixContainer, specificDependecies?: string[]): DomainEventSubscribers {
		const targetKeys = specificDependecies ?? Object.values(DomainEventDependencies)

		// const items = Object.values(DomainEventDependencies).map(value =>
		// 	container.resolve<DomainEventSubscriber<DomainEvent>>(value)
		// )
		const items: DomainEventSubscriber<DomainEvent>[] = []
		for (const key of targetKeys) {
			// Si el contenedor tiene registrada esa dependencia, la resuelve
			if (container.hasRegistration(key)) {
				items.push(container.resolve<DomainEventSubscriber<DomainEvent>>(key))
			}
		}
		return new DomainEventSubscribers(items)
	}
}
