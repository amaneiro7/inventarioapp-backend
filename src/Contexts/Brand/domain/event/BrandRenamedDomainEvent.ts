import { DomainEvent } from '../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the BrandRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type BrandRenamedDomainEventAttributes = {
	readonly name: string
}

/**
 * @description Represents the domain event that is triggered when a brand is renamed.
 */
export class BrandRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'brand.renamed'

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
		super({ eventName: BrandRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
	}

	toPrimitives(): BrandRenamedDomainEventAttributes {
		return {
			name: this.name
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: BrandRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new BrandRenamedDomainEvent({
			aggregateId,
			name: attributes.name,
			eventId,
			occurredOn
		})
	}
}
