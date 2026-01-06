import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type UserRoleUpdatedDomainEventAttributes = {
	readonly roleId: number
}

export class UserRoleUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.role_updated'
	readonly roleId: number

	constructor({
		aggregateId,
		roleId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		roleId: number
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: UserRoleUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.roleId = roleId
	}

	toPrimitives(): UserRoleUpdatedDomainEventAttributes {
		return {
			roleId: this.roleId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserRoleUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new UserRoleUpdatedDomainEvent({
			aggregateId,
			roleId: attributes.roleId,
			eventId,
			occurredOn
		})
	}
}
