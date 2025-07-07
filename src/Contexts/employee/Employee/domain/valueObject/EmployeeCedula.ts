import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { type FiltersPrimitives } from '../../../../Shared/domain/criteria/Filter'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
// import { Employee } from '../entity/Employee'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'

interface EmployeeCedulaProps {
	value: number | null
	type: Primitives<EmployeeType>
}
export class EmployeeCedula extends AcceptedNullValueObject<number> {
	private static readonly MAX_CEDULA = 200000000
	private static readonly MIN_CEDULA = 1

	constructor(
		value: number | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)

		this.ensureIsValidCedula({ value, type: this.type })
	}

	private ensureIsValidCedula({ value, type }: EmployeeCedulaProps): void {
		if (type === EmployeeTypes.GENERIC && value !== null) {
			throw new InvalidArgumentError('La cédula del empleado no es requerida para este tipo de empleado.')
		}
		if (type !== EmployeeTypes.GENERIC && value === null) {
			throw new InvalidArgumentError('La cédula del empleado es requerida para este tipo de empleado.')
		}

		if (
			value !== null &&
			(!Number.isInteger(value) || value < EmployeeCedula.MIN_CEDULA || value > EmployeeCedula.MAX_CEDULA)
		) {
			throw new InvalidArgumentError(
				`<${value}> no es una cédula válida. Debe ser un número entero entre ${EmployeeCedula.MIN_CEDULA} y ${EmployeeCedula.MAX_CEDULA}.`
			)
		}
	}

	static async ensureCedulaDoesNotExis({
		cedula,
		repository
	}: {
		cedula?: Primitives<EmployeeCedula>
		repository: EmployeeRepository
	}) {
		if (!cedula) {
			return
		}
		const query: FiltersPrimitives[] = [
			{
				field: 'cedula',
				operator: Operator.EQUAL,
				value: cedula
			}
		]
		const criteria = await CreateCriteria.execute({ filters: query })
		const existingCedula = await repository.searchByQuery(criteria)
		if (existingCedula !== null) {
			throw new EmployeeAlreadyExistError(`el empleado con la cedula ${cedula} ya existe`)
		}
	}

	// static async updateCedulaField({
	// 	cedula,
	// 	entity
	// }: {
	// 	cedula?: Primitives<EmployeeCedula>
	// 	entity: {
	// 		updateCedula: Employee
	// 		cedulaValue: Primitives<EmployeeCedula> | null
	// 	}
	// }): Promise<void> {
	// 	if (cedula !== undefined && cedula !== entity.cedulaValue) {
	// 		entity.updateCedula(cedula)
	// 	}
	// }
}
