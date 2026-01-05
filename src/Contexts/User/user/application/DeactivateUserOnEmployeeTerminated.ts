import { EmployeeTerminatedDomainEvent } from '../../../employee/Employee/domain/event/EmployeeTerminatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type UserDesactivateAccount } from './UserDesactivateAccount'

export class DeactivateUserOnEmployeeTerminated implements DomainEventSubscriber<EmployeeTerminatedDomainEvent> {
	private readonly userDesactivateAccount: UserDesactivateAccount
	constructor({ userDesactivateAccount }: { userDesactivateAccount: UserDesactivateAccount }) {
		this.userDesactivateAccount = userDesactivateAccount
	}

	async on(domainEvent: EmployeeTerminatedDomainEvent): Promise<void> {
		await this.userDesactivateAccount.run({ employeeId: domainEvent.aggregateId })
	}

	subscribedTo(): DomainEventClass[] {
		return [EmployeeTerminatedDomainEvent]
	}
}
