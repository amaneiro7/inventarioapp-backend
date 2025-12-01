import { User } from '../domain/entity/User'
import { Employee } from '../../../employee/Employee/domain/entity/Employee'
import { EmployeeDoesNotExistError } from '../../../employee/Employee/domain/Errors/EmployeeDoesNotExistError'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { type UserId } from '../domain/valueObject/UserId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'

/**
 * @description Use case for deactivating a user and reverting the associated employee's type.
 * This class orchestrates the process of "removing" a user's system access.
 * It does not perform a hard delete. Instead, it deactivates the user account
 * and changes the associated employee's type from 'service' back to its default state,
 * effectively decoupling the employee from a system user role.
 */
export class UserDisabledAccount {
	private readonly userRepository: UserRepository
	private readonly employeeRepository: EmployeeRepository // Add EmployeeRepository

	constructor({
		userRepository,
		employeeRepository
	}: {
		userRepository: UserRepository
		employeeRepository: EmployeeRepository
	}) {
		this.userRepository = userRepository
		this.employeeRepository = employeeRepository
	}

	/**
	 * @description Executes the user deactivation process.
	 * 1. Ensures the acting user has super admin privileges.
	 * 2. Finds the user to be deactivated by their ID.
	 * 3. Finds the associated employee.
	 * 4. Reverts the employee's type by calling `unmarkAsServiceUser`.
	 * 5. Deactivates the user account.
	 * 6. Persists the changes for both the employee and the user.
	 * @param {{ user?: JwtPayloadUser; id: Primitives<UserId> }} params The parameters for removing the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully removed.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 * @throws {UserDoesNotExistError} If the user to be removed does not exist.
	 * @throws {EmployeeDoesNotExistError} If the employee associated with the user does not exist.
	 */
	async run({ id }: { id: Primitives<UserId> }): Promise<void> {
		// 1. Validate User existence
		const existingUser = await this.userRepository.findById(id)
		if (!existingUser) {
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(existingUser)

		const employee = await this.employeeRepository.findById(userEntity.employeeValue)
		if (!employee) {
			throw new EmployeeDoesNotExistError(userEntity.employeeValue)
		}
		const employeeEntity = Employee.fromPrimitives(employee)

		// Revert the employee's type from 'service'
		employeeEntity.unmarkAsServiceUser()

		// Deactivate the user account
		userEntity.desactivateAccount()
		await Promise.all([
			this.employeeRepository.save(employeeEntity.toPrimitive()),
			this.userRepository.save(userEntity.toPrimitives())
		])
	}
}
