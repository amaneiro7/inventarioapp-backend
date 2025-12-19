import { DomainEvent } from '../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the BrandRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type BrandRemovedDomainEventAttributes = {
	readonly name: string
}

export class BrandRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'brand.removed'

	readonly name: string

	constructor({
		aggregateId,
		name,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		name: string
		occurredOn?: Date
	}) {
		super({ eventName: BrandRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): BrandRemovedDomainEventAttributes {
		return { name: this.name }
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: BrandRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new BrandRemovedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
