import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type EmployeeType, EmployeeTypesEnum } from './EmployeeType'

interface EmployeeCedulaProps {
	value: number | null
	type: Primitives<EmployeeType>
}

/**
 * @description Represents the national identification number (cedula) of an employee.
 */
export class EmployeeCedula extends AcceptedNullValueObject<number> {
	private static readonly MIN_CEDULA = 1
	private static readonly MAX_CEDULA = 200000000

	constructor(
		value: number | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidCedula({ value, type: this.type })
	}

	private ensureIsValidCedula({ value, type }: EmployeeCedulaProps): void {
		if (type === EmployeeTypesEnum.GENERIC && value !== null) {
			throw new InvalidArgumentError('La cédula del empleado no es requerida para este tipo de empleado.')
		}
		if (type !== EmployeeTypesEnum.GENERIC && value === null) {
			throw new InvalidArgumentError('La cédula del empleado es requerida para este tipo de empleado.')
		}

		if (
			value !== null &&
			(!Number.isInteger(value) || value < EmployeeCedula.MIN_CEDULA || value > EmployeeCedula.MAX_CEDULA)
		) {
			throw new InvalidArgumentError(
				`'${value}' no es una cédula válida. Debe ser un número entero entre ${EmployeeCedula.MIN_CEDULA} y ${EmployeeCedula.MAX_CEDULA}.`
			)
		}
	}

	/**
	 * @description Ensures that the employee's cedula does not already exist for a currently working employee.
	 * @param {{ cedula?: Primitives<EmployeeCedula>; repository: EmployeeRepository }} params The parameters for the check.
	 * @throws {EmployeeAlreadyExistError} If the cedula is already in use by a working employee.
	 */
	static async ensureCedulaDoesNotExis({
		cedula,
		repository
	}: {
		cedula?: Primitives<EmployeeCedula>
		repository: EmployeeRepository
	}): Promise<void> {
		if (!cedula) {
			return
		}
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'cedula', operator: Operator.EQUAL, value: cedula },
				{ field: 'isStillWorking', operator: Operator.EQUAL, value: true }
			]
		})
		const existingEmployee = await repository.searchByQuery(criteria)
		if (existingEmployee) {
			throw new EmployeeAlreadyExistError(`El empleado con la cédula '${cedula}' ya existe.`) // Improved error message
		}
	}
}
