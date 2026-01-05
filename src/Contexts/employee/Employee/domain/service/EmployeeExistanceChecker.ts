import { EmployeeDoesNotExistError } from '../Errors/EmployeeDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type EmployeeId } from '../valueObject/EmployeeId'

export class EmployeeExistenceChecker {
	constructor(private readonly repository: EmployeeRepository) {}

	/**
	 * Ensures that one or more Employees exist in the repository.
	 * @param {Primitives<EmployeeId> | Primitives<EmployeeId>[]} employeeIds - The Employee ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all Employees exist.
	 * @throws {EmployeeDoesNotExistError} If any of the Employees do not exist.
	 */
	async ensureExist(employeeIds: Primitives<EmployeeId> | Primitives<EmployeeId>[]): Promise<void> {
		const ids = Array.isArray(employeeIds) ? employeeIds : [employeeIds]
		const uniqueEmployeeIds = [...new Set(ids)]
		if (uniqueEmployeeIds.length === 0) {
			return
		}

		const foundEmployees = await this.repository.findByIds(uniqueEmployeeIds)
		if (foundEmployees.length !== uniqueEmployeeIds.length) {
			const foundIds = new Set(foundEmployees.map(c => c.id))
			const missingIds = uniqueEmployeeIds.filter(id => !foundIds.has(id))
			throw new EmployeeDoesNotExistError(missingIds.join(', '))
		}
	}
}
