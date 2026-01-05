import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type EmployeeTypeChangedDomainEventAttributes = {
	readonly oldType: string
	readonly newType: string
}

export class EmployeeTypeChangedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'employee.type_changed'

	readonly oldType: string
	readonly newType: string

	constructor({
		aggregateId,
		oldType,
		newType,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		oldType: string
		newType: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: EmployeeTypeChangedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldType = oldType
		this.newType = newType
	}

	toPrimitives(): EmployeeTypeChangedDomainEventAttributes {
		return {
			oldType: this.oldType,
			newType: this.newType
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: EmployeeTypeChangedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new EmployeeTypeChangedDomainEvent({
			aggregateId,
			oldType: attributes.oldType,
			newType: attributes.newType,
			eventId,
			occurredOn
		})
	}
}
