import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the CityRenamedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type CityRenamedDomainEventAttributes = {
	readonly oldName: string
	readonly newName: string
}

/**
 * @description Represents the domain event that is triggered when a City is renamed.
 */
export class CityRenamedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'city.renamed'

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
		super({ eventName: CityRenamedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldName = oldName
		this.newName = newName
	}

	toPrimitives(): CityRenamedDomainEventAttributes {
		return {
			oldName: this.oldName,
			newName: this.newName
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: CityRenamedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new CityRenamedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
