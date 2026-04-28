import type { Criteria } from '../../../Shared/domain/criteria/Criteria'
import type { EmployeeRepository } from '../domain/Repository/EmployeeRepository'

/**
 * @description Service for generating an Excel file (Buffer) containing employee data based on specified criteria.
 */
export class EmployeeExcelService {
	private readonly employeeRepository: EmployeeRepository

	constructor({ employeeRepository: employeeRepository }: { employeeRepository: EmployeeRepository }) {
		this.employeeRepository = employeeRepository
	}

	/**
	 * @description Executes the Excel file generation process.
	 * @param {Criteria} criteria The criteria object containing filters and orderings.
	 * @returns {Promise<Buffer>} A promise that resolves to a Buffer containing the Excel file data.
	 */
	async run(criteria: Criteria): Promise<Buffer> {
		// Creamos un nuevo Criteria sin paginación (limit/offset) para descargar todo
		const criteriaAll = criteria.withoutPagination()
		return this.employeeRepository.donwload(criteriaAll)
	}
}
