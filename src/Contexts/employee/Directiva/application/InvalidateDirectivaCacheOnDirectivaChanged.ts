import { DirectivaCreatedDomainEvent } from '../domain/event/DirectivaCreatedDomainEvent'
import { DirectivaUpdatedDomainEvent } from '../domain/event/DirectivaUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type DirectivaCacheInvalidator } from '../domain/repository/DirectivaCacheInvalidator'

export class InvalidateDirectivaCacheOnDirectivaChanged implements DomainEventSubscriber<
	DirectivaCreatedDomainEvent | DirectivaUpdatedDomainEvent
> {
	private readonly invalidator: DirectivaCacheInvalidator

	constructor({ directivaRepository }: { directivaRepository: DirectivaCacheInvalidator }) {
		this.invalidator = directivaRepository
	}

	async on(event: DirectivaCreatedDomainEvent | DirectivaUpdatedDomainEvent): Promise<void> {
		const isDirectivaEvent =
			event instanceof DirectivaCreatedDomainEvent || event instanceof DirectivaUpdatedDomainEvent
		await this.invalidator.invalidate(isDirectivaEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [DirectivaCreatedDomainEvent, DirectivaUpdatedDomainEvent]
	}
}
