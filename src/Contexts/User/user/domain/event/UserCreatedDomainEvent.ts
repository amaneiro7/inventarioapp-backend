import { EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'
import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { RoleId } from '../../../Role/domain/valueObject/RoleId'
import { UserStatus } from '../valueObject/UserStatus'

/**
 * @description Defines the attributes for the UserCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type UserCreatedDomainEventAttributes = {
	readonly employeeId: Primitives<EmployeeId>
	readonly roleId: Primitives<RoleId>
	readonly status: Primitives<UserStatus>
}

/**
 * @description Represents the domain event that is triggered when a new User is created.
 */
export class UserCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'user.created'

	readonly employeeId: Primitives<EmployeeId>
	readonly roleId: Primitives<RoleId>
	readonly status: Primitives<UserStatus>

	constructor({
		aggregateId,
		employeeId,
		roleId,
		status,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		employeeId: Primitives<EmployeeId>
		roleId: Primitives<RoleId>
		status: Primitives<UserStatus>
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: UserCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.employeeId = employeeId
		this.roleId = roleId
		this.status = status
	}

	toPrimitives(): UserCreatedDomainEventAttributes {
		return {
			employeeId: this.employeeId,
			roleId: this.roleId,
			status: this.status
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UserCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new UserCreatedDomainEvent({
			aggregateId,
			employeeId: attributes.employeeId,
			roleId: attributes.roleId,
			status: attributes.status,
			eventId,
			occurredOn
		})
	}
}
