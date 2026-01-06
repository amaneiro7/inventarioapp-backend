import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type UserLoggedInDomainEventAttributes = {
	readonly ipAddress: string | null
}

export class UserLoggedInDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.logged_in'
	readonly ipAddress: string | null

	constructor({
		aggregateId,
		ipAddress,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		ipAddress: string | null
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: UserLoggedInDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.ipAddress = ipAddress
	}

	toPrimitives(): UserLoggedInDomainEventAttributes {
		return {
			ipAddress: this.ipAddress
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserLoggedInDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new UserLoggedInDomainEvent({
			aggregateId,
			ipAddress: attributes.ipAddress,
			eventId,
			occurredOn
		})
	}
}
