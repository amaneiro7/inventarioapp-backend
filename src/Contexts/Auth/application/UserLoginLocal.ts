import { PasswordService } from '../../User/user/domain/domainService/PasswordService'
import { InvalidCredentialsError } from '../domain/InvalidCredentialsError'
import { EmployeeUserName } from '../../employee/Employee/domain/valueObject/EmployeeUsername'
import { User } from '../../User/user/domain/entity/User'
import { EmployeeEmail } from '../../employee/Employee/domain/valueObject/EmployeeEmail'
import { EmployeeTypesEnum } from '../../employee/Employee/domain/valueObject/EmployeeType'
import { type EmployeeRepository } from '../../employee/Employee/domain/Repository/EmployeeRepository'
import { type User as UserDto } from '../../User/user/domain/entity/User.dto'
import { type UserRepository } from '../../User/user/domain/Repository/UserRepository'
import { type EmployeePrimitives } from '../../employee/Employee/domain/entity/Employee.dto'
import { type Nullable } from '../../Shared/domain/Nullable'

/**
 * @class UserLoginLocal
 * @description Handles the local authentication strategy for users. It validates user credentials
 * by checking the employee's username and password against the stored user data.
 */
export class UserLoginLocal {
	private readonly userRepository: UserRepository
	private readonly employeeRepository: EmployeeRepository

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
	 * @param {string} params.userNameOrEmail - The employee's username or email.
	 * @param {string} params.password - The user's password.
	 * @returns {Promise<UserDto>} A promise that resolves to the user's data if authentication is successful.
	 * @throws {InvalidCredentialsError} If the username does not exist, the password does not match, or the account is locked/suspended.
	 */
	async run({ userNameOrEmail, password }: { userNameOrEmail: string; password: string }): Promise<UserDto> {
		let employee: Nullable<EmployeePrimitives>

		// 1. Find employee by userName or email
		if (userNameOrEmail.includes('@')) {
			const employeeEmail = new EmployeeEmail(userNameOrEmail)
			employee = await this.employeeRepository.searchByEmail(employeeEmail.value)
		} else {
			const employeeUserName = new EmployeeUserName(userNameOrEmail)
			employee = await this.employeeRepository.searchByUserName(employeeUserName.value)
		}

		if (!employee || employee.type !== EmployeeTypesEnum.SERVICE || !employee.isStillWorking) {
			throw new InvalidCredentialsError()
		}

		// 2. Buscar usuario por employeeId
		const user = await this.userRepository.searchByEmployeeId(employee.id)

		if (!user) {
			throw new InvalidCredentialsError() // Previene la enumeración de usuarios
		}

		const userEntity = User.fromPrimitives(user)

		// 3. Desbloquear la cuenta si el tiempo de bloqueo ha expirado
		userEntity.unlockIfTimeExpired()

		// 4. Verificar si la cuenta está bloqueada (después de intentar desbloquear)
		if (userEntity.isLocked()) {
			throw new InvalidCredentialsError('Su cuenta está bloqueada. Por favor, contacte al administrador.')
		}

		// 5. Comparar contraseña
		const isMatch = PasswordService.compare(password, user.password)
		if (!isMatch) {
			userEntity.increaseFailedAttepns()
			await this.userRepository.save(userEntity.toPrimitives())
			throw new InvalidCredentialsError()
		}

		// 6. Login exitoso
		userEntity.successLogin()
		await this.userRepository.save(userEntity.toPrimitives())

		// 7. Devolver el estado más reciente del usuario
		return user
	}
}
