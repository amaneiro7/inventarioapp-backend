import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type UserLoginFailedDomainEventAttributes = {
	readonly failedAttempts: number
}

export class UserLoginFailedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.login_failed'
	readonly failedAttempts: number

	constructor({
		aggregateId,
		failedAttempts,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		failedAttempts: number
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: UserLoginFailedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.failedAttempts = failedAttempts
	}

	toPrimitives(): UserLoginFailedDomainEventAttributes {
		return {
			failedAttempts: this.failedAttempts
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserLoginFailedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new UserLoginFailedDomainEvent({
			aggregateId,
			failedAttempts: attributes.failedAttempts,
			eventId,
			occurredOn
		})
	}
}
