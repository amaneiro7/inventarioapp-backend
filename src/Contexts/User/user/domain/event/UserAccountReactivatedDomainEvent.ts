import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type UserAccountReactivatedDomainEventAttributes = Record<string, never>

export class UserAccountReactivatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.account_reactivated'

	constructor({ aggregateId, eventId, occurredOn }: { aggregateId: string; eventId?: string; occurredOn?: Date }) {
		super({ eventName: UserAccountReactivatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
	}

	toPrimitives(): UserAccountReactivatedDomainEventAttributes {
		return {}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserAccountReactivatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, eventId, occurredOn } = params
		return new UserAccountReactivatedDomainEvent({
			aggregateId,
			eventId,
			occurredOn
		})
	}
}
