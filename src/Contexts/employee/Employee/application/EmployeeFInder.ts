import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto } from '../domain/entity/Employee.dto'

export class EmployeeFinder {
	private readonly employeeRepository: EmployeeRepository
	constructor({ employeeRepository }: { employeeRepository: EmployeeRepository }) {
		this.employeeRepository = employeeRepository
	}

	async run(params: { id: Primitives<EmployeeId> }): Promise<EmployeeDto> {
		const { id } = params
		const employeeId = new EmployeeId(id).value

		const employee = await this.employeeRepository.searchById(employeeId)

		if (!employee) {
			throw new EmployeeDoesNotExistError(employeeId)
		}

		return employee
	}
}
