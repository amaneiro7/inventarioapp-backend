import { PasswordService } from '../../User/user/domain/domainService/PasswordService'
import { InvalidCredentialsError } from '../domain/InvalidCredentialsError'
import { type UserPrimitives } from '../../User/user/domain/User.dto' // Use User.dto
import { type UserRepository } from '../../User/user/domain/Repository/UserRepository'
import { type EmployeeRepository } from '../../employee/Employee/domain/Repository/EmployeeRepository' // Import EmployeeRepository
import { EmployeeUserName } from '../../employee/Employee/domain/valueObject/EmployeeUsername' // Import EmployeeUserName
import { User } from '../../User/user/domain/User' // Import User entity to use its methods
import { UserStatusEnum } from '../../User/user/domain/valueObject/UserStatus' // Import UserStatusEnum

/**
 * @class UserLoginLocal
 * @description Handles the local authentication strategy for users. It validates user credentials
 * by checking the employee's username and password against the stored user data.
 */
export class UserLoginLocal {
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
	 * @method run
	 * @description Executes the user login process.
	 * @param {object} params - The user's login credentials.
	 * @param {string} params.userName - The employee's username.
	 * @param {string} params.password - The user's password.
	 * @returns {Promise<UserPrimitives>} A promise that resolves to the user's data if authentication is successful.
	 * @throws {InvalidCredentialsError} If the username does not exist, the password does not match, or the account is locked/suspended.
	 */
	async run({ userName, password }: { userName: string; password: string }): Promise<UserPrimitives> {
		const employeeUserName = new EmployeeUserName(userName)

		// 1. Find employee by userName
		const employee = await this.employeeRepository.searchByUserName(employeeUserName.value)

		if (!employee) {
			throw new InvalidCredentialsError()
		}

		// 2. Find user by employeeId
		const userPrimitives = await this.userRepository.searchByEmployeeId(employee.id)

		if (!userPrimitives) {
			throw new InvalidCredentialsError() // No user account associated with this employee
		}

		const userEntity = User.fromPrimitives(userPrimitives)

		// 3. Check if account is locked
		if (userEntity.isLocked()) {
			throw new InvalidCredentialsError('La cuenta está bloqueada. Inténtalo de nuevo más tarde.')
		}
	}
}
