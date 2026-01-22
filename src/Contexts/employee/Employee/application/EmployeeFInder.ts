import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto } from '../domain/entity/Employee.dto'
import { type HistoryEnricher } from '../../../History/domain/service/HistoryEnricher'
import { type HistoryDto } from '../../../History/domain/entity/History.dto'

/**
 * @description Use case for finding an Employee entity by its unique identifier.
 */
export class EmployeeFinder {
	private readonly employeeRepository: EmployeeRepository
	private readonly historyEnricher: HistoryEnricher

	constructor({
		employeeRepository,
		historyEnricher
	}: {
		employeeRepository: EmployeeRepository
		historyEnricher: HistoryEnricher
	}) {
		this.employeeRepository = employeeRepository
		this.historyEnricher = historyEnricher
	}

	/**
	 * @description Executes the employee finding process.
	 * @param {{ id: Primitives<EmployeeId> }} params The parameters for finding the employee.
	 * @returns {Promise<EmployeeDto>} A promise that resolves to the found Employee DTO.
	 * @throws {EmployeeDoesNotExistError} If no employee with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<EmployeeId> }): Promise<EmployeeDto> {
		const employeeId = new EmployeeId(id).value
		const employee = await this.employeeRepository.findById(employeeId)

		if (!employee) {
			throw new EmployeeDoesNotExistError(employeeId)
		}
		let mappedHistory: HistoryDto[] | null = null
		if (employee.history) {
			mappedHistory = await this.historyEnricher.execute(employee.history)
		}

		return { ...employee, history: mappedHistory }
	}
}
