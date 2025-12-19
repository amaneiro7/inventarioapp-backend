import { DomainEvent } from '../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the BrandCategoryAddedDomainEvent.
 */
type BrandCategoryAddedDomainEventAttributes = {
	readonly categoryId: string
}

/**
 * @description Represents the domain event triggered when a category is added to a brand.
 */
export class BrandCategoryAddedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'brand.category_added'

	readonly categoryId: string

	constructor({
		aggregateId,
		categoryId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		categoryId: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: BrandCategoryAddedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.categoryId = categoryId
	}

	toPrimitives(): BrandCategoryAddedDomainEventAttributes {
		return {
			categoryId: this.categoryId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: BrandCategoryAddedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new BrandCategoryAddedDomainEvent({
			aggregateId,
			categoryId: attributes.categoryId,
			eventId,
			occurredOn
		})
	}
}
