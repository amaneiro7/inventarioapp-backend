import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the EmployeeCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type EmployeeCreatedDomainEventAttributes = {
	readonly name: string | null
	readonly lastName: string | null
	readonly userName: string
	readonly email: string | null
	readonly type: string
	readonly cedula: number | null
	readonly employeeCode: number | null
}

/**
 * @description Represents the domain event that is triggered when a new Employee is created.
 */
export class EmployeeCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'employee.created'

	readonly name: string | null
	readonly lastName: string | null
	readonly userName: string
	readonly email: string | null
	readonly type: string
	readonly cedula: number | null
	readonly employeeCode: number | null

	constructor({
		aggregateId,
		name,
		lastName,
		userName,
		email,
		type,
		cedula,
		employeeCode,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		name: string | null
		lastName: string | null
		userName: string
		email: string | null
		type: string
		cedula: number | null
		employeeCode: number | null
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: EmployeeCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.name = name
		this.lastName = lastName
		this.userName = userName
		this.email = email
		this.type = type
		this.cedula = cedula
		this.employeeCode = employeeCode
	}

	toPrimitives(): EmployeeCreatedDomainEventAttributes {
		return {
			name: this.name,
			lastName: this.lastName,
			userName: this.userName,
			email: this.email,
			type: this.type,
			cedula: this.cedula,
			employeeCode: this.employeeCode
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: EmployeeCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new EmployeeCreatedDomainEvent({
			aggregateId,
			name: attributes.name,
			lastName: attributes.lastName,
			userName: attributes.userName,
			email: attributes.email,
			type: attributes.type,
			cedula: attributes.cedula,
			employeeCode: attributes.employeeCode,
			eventId,
			occurredOn
		})
	}
}
