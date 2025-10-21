import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeType, EmployeeTypesEnum } from './EmployeeType'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'

interface EmployeeCodeProps {
	value: number | null
	type: Primitives<EmployeeType>
}

/**
 * @description Represents the employee code, which can be null for generic employees.
 */
export class EmployeeCode extends AcceptedNullValueObject<number> {
	constructor(
		value: number | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidEmployeeCode({ value, type: this.type })
	}

	private ensureIsValidEmployeeCode({ value, type }: EmployeeCodeProps): void {
		if (type !== EmployeeTypesEnum.GENERIC && value === null) {
			throw new InvalidArgumentError('El código del empleado es requerido para este tipo de empleado.')
		}

		if (value !== null && !Number.isInteger(value)) {
			throw new InvalidArgumentError(`'${value}' no es un número entero válido para el código del empleado.`) // Improved error message
		}
	}

	/**
	 * @description Ensures that the employee code does not already exist for a currently working employee.
	 * @param {{ emloyeeCode?: Primitives<EmployeeCode>; repository: EmployeeRepository }} params The parameters for the check.
	 * @throws {EmployeeAlreadyExistError} If the employee code is already in use by a working employee.
	 */
	static async ensureEmployeeCodeDoesNotExis({
		emloyeeCode,
		repository
	}: {
		emloyeeCode?: Primitives<EmployeeCode>
		repository: EmployeeRepository
	}): Promise<void> {
		if (!emloyeeCode) {
			return
		}
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'employeeCode', operator: Operator.EQUAL, value: emloyeeCode },
				{ field: 'isStillWorking', operator: Operator.EQUAL, value: true }
			]
		})
		const existingEmployee = await repository.searchByQuery(criteria)
		if (existingEmployee) {
			throw new EmployeeAlreadyExistError(
				`El código de empleado '${emloyeeCode}' ya está en uso por un empleado activo.`
			) // Improved error message
		}
	}
}
