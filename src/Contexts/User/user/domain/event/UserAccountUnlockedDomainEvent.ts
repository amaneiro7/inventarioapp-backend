import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type UserAccountUnlockedDomainEventAttributes = Record<string, never>

export class UserAccountUnlockedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.account_unlocked'

	constructor({ aggregateId, eventId, occurredOn }: { aggregateId: string; eventId?: string; occurredOn?: Date }) {
		super({ eventName: UserAccountUnlockedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
	}

	toPrimitives(): UserAccountUnlockedDomainEventAttributes {
		return {}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserAccountUnlockedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, eventId, occurredOn } = params
		return new UserAccountUnlockedDomainEvent({
			aggregateId,
			eventId,
			occurredOn
		})
	}
}
