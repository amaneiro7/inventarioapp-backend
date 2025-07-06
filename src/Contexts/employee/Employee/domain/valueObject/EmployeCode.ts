import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type FiltersPrimitives } from '../../../../Shared/domain/criteria/Filter'

interface EmployeeCodeProps {
	value: number | null
	type: Primitives<EmployeeType>
}

export class EmployeeCode extends AcceptedNullValueObject<number> {
	constructor(
		value: number | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidEmployeeCode({ value, type: this.type })
	}

	private ensureIsValidEmployeeCode({ value, type }: EmployeeCodeProps): void {
		if (type !== EmployeeTypes.GENERIC && value === null) {
			throw new InvalidArgumentError('El código del empleado es requerido para este tipo de empleado.')
		}

		if (value !== null && !Number.isInteger(value)) {
			throw new InvalidArgumentError(`<${value}> no es un número entero válido para el código del empleado.`)
		}
	}

	static async ensureEmployeeCodeDoesNotExis({
		repository,
		emloyeeCode
	}: {
		emloyeeCode?: Primitives<EmployeeCode>
		repository: EmployeeRepository
	}) {
		if (!emloyeeCode) {
			return
		}
		const query: FiltersPrimitives[] = [
			{
				field: 'employeeCode',
				operator: Operator.EQUAL,
				value: emloyeeCode
			}
		]
		const criteria = await CreateCriteria.execute({ filters: query })
		const existingEmployeeCode = await repository.searchByQuery(criteria)
		if (existingEmployeeCode !== null) {
			throw new EmployeeAlreadyExistError(`${emloyeeCode} ya existe`)
		}
	}
}
