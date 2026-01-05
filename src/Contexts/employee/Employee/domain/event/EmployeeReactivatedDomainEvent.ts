import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type EmployeeReactivatedDomainEventAttributes = {
	readonly isStillWorking: boolean
}

export class EmployeeReactivatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'employee.reactivated'
	readonly isStillWorking: boolean

	constructor({
		aggregateId,
		isStillWorking,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		isStillWorking: boolean
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: EmployeeReactivatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.isStillWorking = isStillWorking
	}

	toPrimitives(): EmployeeReactivatedDomainEventAttributes {
		return {
			isStillWorking: this.isStillWorking
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: EmployeeReactivatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new EmployeeReactivatedDomainEvent({
			aggregateId,
			isStillWorking: attributes.isStillWorking,
			eventId,
			occurredOn
		})
	}
}
