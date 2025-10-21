import { EnumValueObject } from '../../../../Shared/domain/value-object/EnumValueObject'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'

/**
 * @enum EmployeeTypesEnum
 * @description Defines the possible types of employees.
 */
export enum EmployeeTypesEnum {
	GENERIC = 'generic',
	REGULAR = 'regular',
	SERVICE = 'service'
}

/**
 * @description Represents the type of an employee as a Value Object.
 */
export class EmployeeType extends EnumValueObject<EmployeeTypesEnum> {
	constructor(public readonly value: EmployeeTypesEnum) {
		super(value, Object.values(EmployeeTypesEnum))
	}

	protected throwErrorForInvalidValue(value: EmployeeTypesEnum): void {
		throw new InvalidArgumentError(`Tipo de empleado inválido: '${value}'.`) // Improved error message
	}
}
