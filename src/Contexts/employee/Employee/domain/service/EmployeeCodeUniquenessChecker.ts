import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type EmployeeId } from '../valueObject/EmployeeId'
import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { EmployeeCode } from '../valueObject/EmployeCode'

/**
 * Domain service responsible for verifying that a Employee name is unique within the system.
 */
export class EmployeeCodeUniquenessChecker {
	/**
	 * Creates an instance of EmployeeCodeUniquenessChecker.
	 * @param {EmployeeRepository} repository - The repository used to check for existing Employees.
	 */
	constructor(private readonly repository: EmployeeRepository) {}

	/**
	 * Ensures that the provided Employee employeeCode is unique among active employees.
	 * If an ID is provided in excludeId, it ignores that Employee (useful for updates).
	 *
	 * @param {Primitives<EmployeeCode>} employeeCode - The Employee employeeCode to check.
	 * @param {Primitives<EmployeeId>} [excludeId] - The ID of the Employee to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the employeeCode is unique.
	 * @throws {EmployeeAlreadyExistError} If an active Employee with the same employeeCode already exists.
	 */
	async ensureUnique(employeeCode: Primitives<EmployeeCode>, excludeId?: Primitives<EmployeeId>): Promise<void> {
		if (employeeCode === null) {
			return
		}
		const criteria = await CreateCriteria.execute({
			filters: [{ field: 'employeeCode', operator: Operator.EQUAL, value: employeeCode }]
		})
		const existingEmployee = await this.repository.searchByQuery(criteria)
		if (existingEmployee && existingEmployee.id !== excludeId) {
			throw new EmployeeAlreadyExistError(`El código de empleado '${employeeCode}' ya existe.`)
		}
	}
}
