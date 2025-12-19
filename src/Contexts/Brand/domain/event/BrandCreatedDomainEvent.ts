import { DomainEvent } from '../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the BrandCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type BrandCreatedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a new brand is created.
 */
export class BrandCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'brand.created'

	readonly name: string

	constructor({
		aggregateId,
		name,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		name: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: BrandCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): BrandCreatedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: BrandCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new BrandCreatedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
