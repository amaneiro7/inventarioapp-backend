import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto } from '../domain/entity/Employee.dto'

/**
 * @description Use case for finding an Employee entity by its unique identifier.
 */
export class EmployeeFinder {
	private readonly employeeRepository: EmployeeRepository

	constructor({ employeeRepository }: { employeeRepository: EmployeeRepository }) {
		this.employeeRepository = employeeRepository
	}

	/**
	 * @description Executes the employee finding process.
	 * @param {{ id: Primitives<EmployeeId> }} params The parameters for finding the employee.
	 * @returns {Promise<EmployeeDto>} A promise that resolves to the found Employee DTO.
	 * @throws {EmployeeDoesNotExistError} If no employee with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<EmployeeId> }): Promise<EmployeeDto> {
		const employeeId = new EmployeeId(id).value
		const employee = await this.employeeRepository.searchById(employeeId)

		if (!employee) {
			throw new EmployeeDoesNotExistError(employeeId)
		}

		return employee
	}
}
