import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type EmployeeDto } from '../domain/entity/Employee.dto'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'

/**
 * @description Use case for searching Employee entities by criteria.
 */
export class EmployeeSearchByCriteria extends GetAllBaseService<EmployeeDto> {
	private readonly employeeRepository: EmployeeRepository

	constructor({ employeeRepository }: { employeeRepository: EmployeeRepository }) {
		super()
		this.employeeRepository = employeeRepository
	}

	/**
	 * @description Executes the search for employees based on the provided criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<EmployeeDto>>} A paginated response of Employee DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<EmployeeDto>> {
		const { data, total } = await this.employeeRepository.matching(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
