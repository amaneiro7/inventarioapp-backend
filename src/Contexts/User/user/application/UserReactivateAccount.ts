import { User } from '../domain/entity/User'
import { Employee } from '../../../employee/Employee/domain/entity/Employee'
import { UserStatusEnum } from '../domain/valueObject/UserStatus'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { EmployeeDoesNotExistError } from '../../../employee/Employee/domain/Errors/EmployeeDoesNotExistError'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { type UserId } from '../domain/valueObject/UserId'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'

/**
 * @description Use case for reactivating a suspended user account.
 * This process finds a suspended user, reactivates their account,
 * and marks the associated employee's type as 'service' again.
 */
export class UserReactivateAccount {
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
	 * @description Executes the user reactivation process.
	 * 1. Ensures the acting user has super admin privileges.
	 * 2. Finds the user to be reactivated by their ID.
	 * 3. Ensures the user is currently suspended.
	 * 3. Finds the associated employee.
	 * 4. Marks the employee's type as 'service'.
	 * 5. Reactivates the user account.
	 * 6. Persists the changes for both the employee and the user.
	 * @param {{ user?: JwtPayloadUser; id: Primitives<UserId> }} params The parameters for reactivating the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully reactivated.
	 * @throws {InvalidArgumentError} If the user is not suspended or if the acting user is not a super admin.
	 * @throws {UserDoesNotExistError} If the user to be reactivated does not exist.
	 * @throws {EmployeeDoesNotExistError} If the employee associated with the user does not exist.
	 */
	async run({ user, id }: { user?: JwtPayloadUser; id: Primitives<UserId> }): Promise<void> {
		isSuperAdmin({ user })

		// 1. Validate User existence
		const existingUser = await this.userRepository.searchById(id)
		if (!existingUser) {
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(existingUser)

		// 2. Ensure the user is actually suspended
		if (userEntity.statusValue !== UserStatusEnum.SUSPENDED) {
			throw new InvalidArgumentError(
				`El usuario con ID ${id} no está suspendido. Estado actual: ${userEntity.statusValue}.`
			)
		}

		const employee = await this.employeeRepository.searchById(userEntity.employeeValue)
		if (!employee) {
			throw new EmployeeDoesNotExistError(userEntity.employeeValue)
		}
		const employeeEntity = Employee.fromPrimitives(employee)

		// Revert the employee's type from 'service'
		employeeEntity.markAsServiceUser() // 4. Mark employee as 'service'

		// Reactivate the user account
		userEntity.reactivateAccount()
		await Promise.all([
			this.employeeRepository.save(employeeEntity.toPrimitive()),
			this.userRepository.save(userEntity.toPrimitives())
		])
	}
}
