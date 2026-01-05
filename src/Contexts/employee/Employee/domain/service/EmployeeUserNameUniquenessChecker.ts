import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type EmployeeId } from '../valueObject/EmployeeId'
import { type EmployeeUserName } from '../valueObject/EmployeeUsername'

/**
 * Domain service responsible for verifying that a Employee name is unique within the system.
 */
export class EmployeeUserNameUniquenessChecker {
	/**
	 * Creates an instance of EmployeeUserNameUniquenessChecker.
	 * @param {EmployeeRepository} repository - The repository used to check for existing Employees.
	 */
	constructor(private readonly repository: EmployeeRepository) {}

	/**
	 * Ensures that the provided Employee userName is unique among active employees.
	 * If an ID is provided in excludeId, it ignores that Employee (useful for updates).
	 *
	 * @param {Primitives<EmployeeUserName>} userName - The Employee userName to check.
	 * @param {Primitives<EmployeeId>} [excludeId] - The ID of the Employee to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the userName is unique.
	 * @throws {EmployeeAlreadyExistError} If an active Employee with the same userName already exists.
	 */
	async ensureUnique(userName: Primitives<EmployeeUserName>, excludeId?: Primitives<EmployeeId>): Promise<void> {
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'userName', operator: Operator.EQUAL, value: userName },
				{ field: 'isStillWorking', operator: Operator.EQUAL, value: true }
			]
		})
		const existingEmployee = await this.repository.searchByQuery(criteria)
		if (existingEmployee && existingEmployee.id !== excludeId) {
			throw new EmployeeAlreadyExistError(
				`El siguiente usuario: '${userName}' ya se encuentra registrado como usuario activo.`
			)
		}
	}
}
