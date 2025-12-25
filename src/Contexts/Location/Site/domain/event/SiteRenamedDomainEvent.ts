import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the SiteRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type SiteRenamedDomainEventAttributes = {
	readonly oldName: string
	readonly newName: string
}

/**
 * @description Represents the domain event that is triggered when a Site is renamed.
 */
export class SiteRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'site.renamed'

	readonly oldName: string
	readonly newName: string

	constructor({
		aggregateId,
		oldName,
		newName,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		oldName: string
		newName: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: SiteRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldName = oldName
		this.newName = newName
	}

	toPrimitives(): SiteRenamedDomainEventAttributes {
		return {
			oldName: this.oldName,
			newName: this.newName
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: SiteRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new SiteRenamedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
