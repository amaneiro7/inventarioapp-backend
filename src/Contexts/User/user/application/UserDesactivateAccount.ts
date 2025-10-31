import { User } from '../domain/entity/User'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeId } from '../../../employee/Employee/domain/valueObject/EmployeeId'
import { type UserRepository } from '../domain/Repository/UserRepository'

/**
 * @description Use case for deactivating a user account.
 */
export class UserDesactivateAccount {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the user deactivation process based on an employee ID.
	 * If no user is found for the given employee ID, the operation completes silently.
	 * @param {{ employeeId: Primitives<EmployeeId> }} data The employee ID associated with the user to deactivate.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully deactivated or if no user is found.
	 */
	async run({ employeeId }: { employeeId: Primitives<EmployeeId> }): Promise<void> {
		const user = await this.userRepository.searchByEmployeeId(employeeId)

		// If no user is associated with this employee, there's nothing to do.
		if (!user) {
			return
		}

		const userEntity = User.fromPrimitives(user)
		userEntity.desactivateAccount()
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
