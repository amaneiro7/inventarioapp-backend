import { EnumValueObject } from '../../../../Shared/domain/value-object/EnumValueObject'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'

/**
 * @enum EmployeeTypes
 * @description Defines the possible types of employees.
 */
export enum EmployeeTypes {
	GENERIC = 'generic',
	REGULAR = 'regular',
	SERVICE = 'service'
}

/**
 * @description Represents the type of an employee as a Value Object.
 */
export class EmployeeType extends EnumValueObject<EmployeeTypes> {
	constructor(public readonly value: EmployeeTypes) {
		super(value, Object.values(EmployeeTypes))
	}

	protected throwErrorForInvalidValue(value: EmployeeTypes): void {
		throw new InvalidArgumentError(`Tipo de empleado inválido: '${value}'.`) // Improved error message
	}
}
