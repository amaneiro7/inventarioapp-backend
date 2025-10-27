import { User } from '../domain/entity/User'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { EmployeeDoesNotExistError } from '../../../employee/Employee/domain/Errors/EmployeeDoesNotExistError'
import { EmployeeTypesEnum } from '../../../employee/Employee/domain/valueObject/EmployeeType'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type RoleRepository } from '../../Role/domain/RoleRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type RoleId } from '../../Role/domain/RoleId'
import { type EmployeeId } from '../../../employee/Employee/domain/valueObject/EmployeeId'
import { Employee } from '../../../employee/Employee/domain/entity/Employee'

interface CreateUserFromEmployeeParams {
	employeeId: EmployeeId['value']
	roleId: RoleId['value']
}

/**
 * @description Use case for creating a new user from an existing employee.
 */
export class CreateUserFromEmployee {
	private readonly userRepository: UserRepository
	private readonly roleRepository: RoleRepository
	private readonly employeeRepository: EmployeeRepository // Add EmployeeRepository

	constructor({
		userRepository,
		roleRepository,
		employeeRepository
	}: {
		userRepository: UserRepository
		roleRepository: RoleRepository
		employeeRepository: EmployeeRepository
	}) {
		this.userRepository = userRepository
		this.roleRepository = roleRepository
		this.employeeRepository = employeeRepository
	}

	/**
	 * @description Executes the user creation from employee process.
	 * @param {{ payload: CreateUserFromEmployeeParams; user?: JwtPayloadUser }} data The data for creating the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully created.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 * @throws {InvalidArgumentError} If a user with the provided employeeId already exists.
	 * @throws {InvalidArgumentError} If the provided role ID does not exist.
	 * @throws {EmployeeDoesNotExistError} If the provided employee ID does not exist.
	 */
	async run({ payload, user }: { payload: CreateUserFromEmployeeParams; user?: JwtPayloadUser }): Promise<void> {
		isSuperAdmin({ user })

		// 1. Validate Employee existence
		const employee = await this.employeeRepository.searchById(payload.employeeId)
		if (!employee) {
			throw new EmployeeDoesNotExistError(payload.employeeId)
		}

		// 2. Ensure no User already exists for this employee
		const existingUser = await this.userRepository.searchByEmployeeId(payload.employeeId)
		if (existingUser) {
			throw new InvalidArgumentError(`Ya existe un usuario asociado al empleado con ID '${payload.employeeId}'.`)
		}

		// 3. Validate Role existence
		const role = await this.roleRepository.searchById(payload.roleId)
		if (!role) {
			throw new InvalidArgumentError(`El rol con ID '${payload.roleId}' no existe.`) // Or a specific RoleDoesNotExistError
		}

		// 4. Update employee type to 'service'
		const employeeEntity = Employee.fromPrimitives(employee)
		employeeEntity.updateType(EmployeeTypesEnum.SERVICE)
		await this.employeeRepository.save(employeeEntity.toPrimitive())

		// 5. Create the user entity with a generated password
		const userEntity = User.createFromEmployee({
			employeeId: payload.employeeId,
			roleId: payload.roleId
		})
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
