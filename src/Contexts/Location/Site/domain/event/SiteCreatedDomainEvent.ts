import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the SiteCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type SiteCreatedDomainEventAttributes = {
	readonly cityId: string
	readonly name: string
	readonly address: string
}

/**
 * @description Represents the domain event that is triggered when a new Site is created.
 */
export class SiteCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'site.created'

	readonly cityId: string
	readonly name: string
	readonly address: string

	constructor({
		aggregateId,
		name,
		cityId,
		address,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		name: string
		cityId: string
		address: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: SiteCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
		this.cityId = cityId
		this.address = address
	}

	toPrimitives(): SiteCreatedDomainEventAttributes {
		return {
			name: this.name,
			cityId: this.cityId,
			address: this.address
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: SiteCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new SiteCreatedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
