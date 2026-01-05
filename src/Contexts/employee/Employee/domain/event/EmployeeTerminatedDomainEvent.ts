import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import { type EmployeeType } from '../valueObject/EmployeeType'

type EmployeeTerminatedDomainEventAttributes = {
	readonly isStillWorking: Primitives<EmployeeIsStillWorking>
	readonly type: Primitives<EmployeeType>
}

export class EmployeeTerminatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'employee.terminated'
	readonly isStillWorking: Primitives<EmployeeIsStillWorking>
	readonly type: Primitives<EmployeeType>

	constructor({
		aggregateId,
		isStillWorking,
		type,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		isStillWorking: Primitives<EmployeeIsStillWorking>
		type: Primitives<EmployeeType>
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: EmployeeTerminatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.isStillWorking = isStillWorking
		this.type = type
	}

	toPrimitives(): EmployeeTerminatedDomainEventAttributes {
		return {
			isStillWorking: this.isStillWorking,
			type: this.type
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: EmployeeTerminatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new EmployeeTerminatedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
