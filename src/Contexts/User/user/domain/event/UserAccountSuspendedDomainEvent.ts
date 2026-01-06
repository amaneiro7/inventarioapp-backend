import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type UserAccountSuspendedDomainEventAttributes = Record<string, never>

export class UserAccountSuspendedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.account_suspended'

	constructor({ aggregateId, eventId, occurredOn }: { aggregateId: string; eventId?: string; occurredOn?: Date }) {
		super({ eventName: UserAccountSuspendedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
	}

	toPrimitives(): UserAccountSuspendedDomainEventAttributes {
		return {}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserAccountSuspendedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, eventId, occurredOn } = params
		return new UserAccountSuspendedDomainEvent({
			aggregateId,
			eventId,
			occurredOn
		})
	}
}
