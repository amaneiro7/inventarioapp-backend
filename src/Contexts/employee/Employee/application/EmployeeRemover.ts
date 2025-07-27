import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'

/**
 * @description Use case for removing an Employee entity.
 */
export class EmployeeRemover {
	private readonly employeeRepository: EmployeeRepository

	constructor({ employeeRepository }: { employeeRepository: EmployeeRepository }) {
		this.employeeRepository = employeeRepository
	}

	/**
	 * @description Executes the employee removal process.
	 * @param {{ id: Primitives<EmployeeId> }} params The parameters for removing the employee.
	 * @returns {Promise<void>} A promise that resolves when the employee is successfully removed.
	 */
	async run({ id }: { id: Primitives<EmployeeId> }): Promise<void> {
		const employeeId = new EmployeeId(id).value
		await this.employeeRepository.remove(employeeId)
	}
}
