import { User } from '../../User/user/domain/entity/User'
import { PasswordService } from '../../User/user/domain/domainService/PasswordService'
import { InvalidCredentialsError } from '../domain/error/InvalidCredentialsError'
import { EmployeeUserName } from '../../employee/Employee/domain/valueObject/EmployeeUsername'
import { EmployeeEmail } from '../../employee/Employee/domain/valueObject/EmployeeEmail'
import { EmployeeTypesEnum } from '../../employee/Employee/domain/valueObject/EmployeeType'
import { AppSettingDefaults, AppSettingKeys } from '../../Shared/AppSettings/domain/entity/SettingsKeys'
import { type SettingsFinder } from '../../Shared/AppSettings/application/SettingsFinder'
import { type EmployeeRepository } from '../../employee/Employee/domain/Repository/EmployeeRepository'
import { type User as UserDto } from '../../User/user/domain/entity/User.dto'
import { type UserRepository } from '../../User/user/domain/Repository/UserRepository'
import { type EmployeePrimitives } from '../../employee/Employee/domain/entity/Employee.dto'
import { type Nullable } from '../../Shared/domain/Nullable'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type LastLoginIp } from '../../User/user/domain/valueObject/LastLoginIp'
import { AccountLockedError } from '../domain/AccountLockedError'
import { generateChangePasswordToken } from '../domain/GenerateToken'
import { PasswordExpiredError } from '../domain/error/PasswordExpiredError'

/**
 * @class UserLoginLocal
 * @description Handles the local authentication strategy for users. It validates user credentials
 * by checking the employee's username and password against the stored user data.
 */
export class UserLoginLocal {
	private readonly userRepository: UserRepository
	private readonly employeeRepository: EmployeeRepository
	private readonly settingsFinder: SettingsFinder

	constructor({
		userRepository,
		employeeRepository,
		settingsFinder
	}: {
		userRepository: UserRepository
		employeeRepository: EmployeeRepository
		settingsFinder: SettingsFinder
	}) {
		this.userRepository = userRepository
		this.employeeRepository = employeeRepository
		this.settingsFinder = settingsFinder
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
	async run({
		userNameOrEmail,
		password,
		currentIp
	}: {
		userNameOrEmail: string
		password: string
		currentIp?: Primitives<LastLoginIp>
	}): Promise<UserDto> {
		let employee: Nullable<EmployeePrimitives>

		// 1. Find employee by userName or email
		if (userNameOrEmail.includes('@')) {
			// Obtener los dominios permitidos desde la configuración
			const allowedDomains = await this.settingsFinder.findAsArray({
				key: AppSettingKeys.SECURITY.ALLOWED_EMAIL_DOMAINS,
				fallback: [] // Si la configuración no existe, devuelve un array vacío
			})

			const employeeEmail = new EmployeeEmail(userNameOrEmail, allowedDomains)
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
		const { daysToExpire, lockoutTimeInMinutes, maxAttempts } = await this.getLoginPolicySettings()

		// 3. Desbloquear la cuenta si el tiempo de bloqueo ha expirado
		userEntity.unlockIfTimeExpired()
		await this.userRepository.save(userEntity.toPrimitives())

		// 4. Verificar si la cuenta está bloqueada (después de intentar desbloquear)
		if (userEntity.isLocked()) {
			throw new AccountLockedError(userEntity.lockoutUntilValue)
		}

		// 5. Comparar contraseña
		const isMatch = PasswordService.compare(password, user.password)
		if (!isMatch) {
			// Aumentar intentos y bloquear si es necesario.
			userEntity.increaseFailedAttepns({
				lockoutTimeInMinutes,
				maxAttempts
			})
			await this.userRepository.save(userEntity.toPrimitives())
			throw new InvalidCredentialsError()
		}

		// 5.1. Verificar si la contraseña ha expirado. Si es así, lanzar un error con un token temporal.
		if (userEntity.isPasswordExpired(daysToExpire)) {
			const temporaryToken = generateChangePasswordToken(user)
			// Lanzamos un error especial que el controlador capturará
			throw new PasswordExpiredError(temporaryToken)
		}

		// 6. Login exitoso
		userEntity.successLogin(currentIp)
		await this.userRepository.save(userEntity.toPrimitives())

		// 7. Devolver el estado más reciente del usuario
		return user
	}

	// Ejemplo de servicio de dominio o función privada para encapsular las búsquedas:
	private async getLoginPolicySettings(): Promise<{
		lockoutTimeInMinutes: number
		maxAttempts: number
		daysToExpire: number
	}> {
		// Usar Promise.all para hacer las búsquedas concurrentemente (más rápido)
		const [lockoutTimeInMinutes, maxAttempts, daysToExpire] = await Promise.all([
			this.settingsFinder.findAsNumber({
				key: AppSettingKeys.SECURITY.LOCKOUT_UNTIL_MINUTES,
				fallback: AppSettingDefaults.SECURITY.LOCKOUT_UNTIL_MINUTES
			}),
			this.settingsFinder.findAsNumber({
				key: AppSettingKeys.SECURITY.FAILED_ATTEMPTS_LIMIT,
				fallback: AppSettingDefaults.SECURITY.FAILED_ATTEMPTS_LIMIT
			}),
			this.settingsFinder.findAsNumber({
				key: AppSettingKeys.SECURITY.PASSWORD_EXPIRY_DAYS,
				fallback: AppSettingDefaults.SECURITY.PASSWORD_EXPIRY_DAYS
			})
		])
		return { lockoutTimeInMinutes, maxAttempts, daysToExpire }
	}
}
