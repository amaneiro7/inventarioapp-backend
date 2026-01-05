import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the EmployeeRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type EmployeeRemovedDomainEventAttributes = {
	readonly userName: string
}

export class EmployeeRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'employee.removed'

	readonly userName: string

	constructor({
		aggregateId,
		userName,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		userName: string
		occurredOn?: Date
	}) {
		super({ eventName: EmployeeRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.userName = userName
	}

	toPrimitives(): EmployeeRemovedDomainEventAttributes {
		return { userName: this.userName }
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: EmployeeRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new EmployeeRemovedDomainEvent({
			aggregateId,
			userName: attributes.userName,
			eventId,
			occurredOn
		})
	}
}
