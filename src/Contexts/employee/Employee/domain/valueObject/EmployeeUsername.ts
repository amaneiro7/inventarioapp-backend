import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type Employee } from '../entity/Employee'

/**
 * @description Represents the username of an employee.
 */
export class EmployeeUserName extends StringValueObject {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 20
	private readonly VALID_REGEX = /^[a-zA-Z][a-zA-Z0-9]*$/

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		const errors: string[] = []

		if (!this.VALID_REGEX.test(value)) {
			errors.push('No debe contener caracteres especiales.')
		}
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			errors.push(`Debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`El nombre de usuario '${value}' no es válido: ${errors.join(', ')}`)
		}
	}

	/**
	 * @description Handles the logic for updating the username field of an employee.
	 * @param {{ repository: EmployeeRepository; userName?: Primitives<EmployeeUserName>; entity: Employee }} params The parameters for updating.
	 */
	static async updateUserNameField({
		repository,
		userName,
		entity
	}: {
		repository: EmployeeRepository
		userName?: Primitives<EmployeeUserName>
		entity: Employee
	}): Promise<void> {
		if (userName === undefined || userName === entity.userNameValue) {
			return
		}
		await this.ensureIsStillWorkingUserNameDoesNotExist({ repository, userName })
		entity.updateUserName(userName)
	}

	/**
	 * @description Ensures that the username does not already exist for a currently working employee.
	 * @param {{ repository: EmployeeRepository; userName: Primitives<EmployeeUserName> }} params The parameters for the check.
	 * @throws {InvalidArgumentError} If the username is already in use by a working employee.
	 */
	static async ensureIsStillWorkingUserNameDoesNotExist({
		userName,
		repository
	}: {
		repository: EmployeeRepository
		userName: Primitives<EmployeeUserName>
	}): Promise<void> {
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'userName', operator: Operator.EQUAL, value: userName },
				{ field: 'isStillWorking', operator: Operator.EQUAL, value: true }
			]
		})
		const existingEmployee = await repository.searchByQuery(criteria)
		if (existingEmployee) {
			throw new InvalidArgumentError(`El nombre de usuario '${userName}' ya está en uso por un empleado activo.`) // Improved error message
		}
	}
}
