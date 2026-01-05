import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type EmployeeId } from '../valueObject/EmployeeId'
import { type EmployeeCedula } from '../valueObject/EmployeeCedula'
import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'

/**
 * Domain service responsible for verifying that a Employee cedula is unique within the system.
 */
export class EmployeeCedulaUniquenessChecker {
	/**
	 * Creates an instance of EmployeeCedulaUniquenessChecker.
	 * @param {EmployeeRepository} repository - The repository used to check for existing Employees.
	 */
	constructor(private readonly repository: EmployeeRepository) {}

	/**
	 * Ensures that the provided Employee cedula is unique among active employees.
	 * If an ID is provided in excludeId, it ignores that Employee (useful for updates).
	 *
	 * @param {Primitives<EmployeeCedula>} cedula - The Employee cedula to check.
	 * @param {Primitives<EmployeeId>} [excludeId] - The ID of the Employee to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the cedula is unique.
	 * @throws {EmployeeAlreadyExistError} If an active Employee with the same cedula already exists.
	 */
	async ensureUnique(cedula: Primitives<EmployeeCedula>, excludeId?: Primitives<EmployeeId>): Promise<void> {
		if (!cedula) {
			return
		}
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'cedula', operator: Operator.EQUAL, value: cedula },
				{ field: 'isStillWorking', operator: Operator.EQUAL, value: true }
			]
		})
		const existingEmployee = await this.repository.searchByQuery(criteria)
		if (existingEmployee && existingEmployee.id !== excludeId) {
			throw new EmployeeAlreadyExistError(
				`La siguiente cédula: '${cedula}' ya se encuentra registrado como empleado activo.`
			)
		}
	}
}
