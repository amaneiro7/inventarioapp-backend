import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type EmployeeId } from '../valueObject/EmployeeId'
import { type EmployeeEmail } from '../valueObject/EmployeeEmail'

/**
 * Domain service responsible for verifying that a Employee name is unique within the system.
 */
export class EmployeeEmailUniquenessChecker {
	/**
	 * Creates an instance of EmployeeEmailUniquenessChecker.
	 * @param {EmployeeRepository} repository - The repository used to check for existing Employees.
	 */
	constructor(private readonly repository: EmployeeRepository) {}

	/**
	 * Ensures that the provided Employee email is unique among active employees.
	 * If an ID is provided in excludeId, it ignores that Employee (useful for updates).
	 *
	 * @param {Primitives<EmployeeEmail>} email - The Employee email to check.
	 * @param {Primitives<EmployeeId>} [excludeId] - The ID of the Employee to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the email is unique.
	 * @throws {EmployeeAlreadyExistError} If an active Employee with the same email already exists.
	 */
	async ensureUnique(email: Primitives<EmployeeEmail>, excludeId?: Primitives<EmployeeId>): Promise<void> {
		if (!email) {
			return
		}
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'email', operator: Operator.EQUAL, value: email },
				{ field: 'isStillWorking', operator: Operator.EQUAL, value: true }
			]
		})
		const existingEmployee = await this.repository.searchByQuery(criteria)
		if (existingEmployee && existingEmployee.id !== excludeId) {
			throw new EmployeeAlreadyExistError(
				`El siguiente correo electrónico: '${email}' ya se encuentra registrado en un empleado activo.`
			)
		}
	}
}
