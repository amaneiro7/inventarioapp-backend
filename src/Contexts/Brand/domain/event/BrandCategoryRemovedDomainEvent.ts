import { DomainEvent } from '../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the BrandCategoryRemovedDomainEvent.
 */
type BrandCategoryRemovedDomainEventAttributes = {
	readonly categoryId: string
}

/**
 * @description Represents the domain event triggered when a category is removed from a brand.
 */
export class BrandCategoryRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'brand.category_removed'

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
		super({ eventName: BrandCategoryRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.categoryId = categoryId
	}

	toPrimitives(): BrandCategoryRemovedDomainEventAttributes {
		return {
			categoryId: this.categoryId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: BrandCategoryRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new BrandCategoryRemovedDomainEvent({
			aggregateId,
			categoryId: attributes.categoryId,
			eventId,
			occurredOn
		})
	}
}
