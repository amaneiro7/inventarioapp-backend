import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type UserPasswordChangedDomainEventAttributes = Record<string, never>

export class UserPasswordChangedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.password_changed'

	constructor({ aggregateId, eventId, occurredOn }: { aggregateId: string; eventId?: string; occurredOn?: Date }) {
		super({ eventName: UserPasswordChangedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
	}

	toPrimitives(): UserPasswordChangedDomainEventAttributes {
		return {}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserPasswordChangedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, eventId, occurredOn } = params
		return new UserPasswordChangedDomainEvent({
			aggregateId,
			eventId,
			occurredOn
		})
	}
}
