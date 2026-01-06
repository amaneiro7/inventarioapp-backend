import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LockoutUntil } from '../valueObject/LockoutUntil'

type UserAccountLockedDomainEventAttributes = {
	readonly lockoutUntil: Primitives<LockoutUntil>
}

export class UserAccountLockedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.account_locked'
	readonly lockoutUntil: Primitives<LockoutUntil>

	constructor({
		aggregateId,
		lockoutUntil,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		lockoutUntil: Primitives<LockoutUntil>
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: UserAccountLockedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.lockoutUntil = lockoutUntil
	}

	toPrimitives(): UserAccountLockedDomainEventAttributes {
		return {
			lockoutUntil: this.lockoutUntil
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserAccountLockedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new UserAccountLockedDomainEvent({
			aggregateId,
			lockoutUntil: attributes.lockoutUntil,
			eventId,
			occurredOn
		})
	}
}
