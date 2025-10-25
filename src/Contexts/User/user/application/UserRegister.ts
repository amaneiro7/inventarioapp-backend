import { User, type UserParams } from '../domain/entity/User' // Use UserParams
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type RoleRepository } from '../../Role/domain/RoleRepository'
import { type EmployeeRepository } from '../../../../employee/Employee/domain/Repository/EmployeeRepository' // Import EmployeeRepository
import { EmployeeDoesNotExistError } from '../../../../employee/Employee/domain/Errors/EmployeeDoesNotExistError' // Import EmployeeDoesNotExistError
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { EmployeeTypesEnum } from '../../../../employee/Employee/domain/valueObject/EmployeeType' // Import EmployeeTypesEnum

/**
 * @description Use case for registering a new user.
 */
export class UserRegister {
	private readonly userRepository: UserRepository
	private readonly roleRepository: RoleRepository
	private readonly employeeRepository: EmployeeRepository // Add EmployeeRepository

	constructor({
		userRepository,
		roleRepository,
		employeeRepository // Inject EmployeeRepository
	}: {
		userRepository: UserRepository
		roleRepository: RoleRepository
		employeeRepository: EmployeeRepository // Type for injection
	}) {
		this.userRepository = userRepository
		this.roleRepository = roleRepository
		this.employeeRepository = employeeRepository // Assign EmployeeRepository
	}

	/**
	 * @description Executes the user registration process.
	 * @param {{ payload: UserParams; user?: JwtPayloadUser }} data The data for registering the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully registered.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges, or if the employee/role is invalid.
	 * @throws {InvalidArgumentError} If a user with the provided employeeId already exists.
	 * @throws {RoleDoesNotExistError} If the provided role ID does not exist.
	 * @throws {EmployeeDoesNotExistError} If the provided employee ID does not exist.
	 */
	async run({ payload, user }: { payload: UserParams; user?: JwtPayloadUser }): Promise<void> {
		// Use UserParams
		isSuperAdmin({ user })

		// 1. Validate Employee existence and type
		const employee = await this.employeeRepository.searchById(payload.employeeId)
		if (!employee) {
			throw new EmployeeDoesNotExistError(payload.employeeId)
		}
		if (employee.type !== EmployeeTypesEnum.SERVICE) {
			throw new InvalidArgumentError(
				`El empleado con ID '${payload.employeeId}' no es de tipo 'service' y no puede tener una cuenta de usuario.`
			)
		}

		// 2. Ensure no User already exists for this employeeId
		const existingUser = await this.userRepository.searchByEmployeeId(payload.employeeId)
		if (existingUser) {
			throw new InvalidArgumentError(`Ya existe un usuario asociado al empleado con ID '${payload.employeeId}'.`)
		}

		// 3. Validate Role existence (assuming RoleRepository.searchById is sufficient)
		const role = await this.roleRepository.searchById(payload.roleId)
		if (!role) {
			throw new InvalidArgumentError(`El rol con ID '${payload.roleId}' no existe.`) // Or a specific RoleDoesNotExistError
		}

		const userEntity = User.create(payload)
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
