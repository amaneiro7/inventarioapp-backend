import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type EmployeeChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type EmployeeUpdatedDomainEventAttributes = {
	readonly changes: EmployeeChange[]
}

export class EmployeeUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'employee.updated'

	readonly changes: EmployeeChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: EmployeeChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: EmployeeUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): EmployeeUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: EmployeeUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new EmployeeUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
