import { EnumValueObject } from '../../../../Shared/domain/value-object/EnumValueObject'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'

/**
 * @enum EmployeeTypesEnum
 * @description Defines the possible types of employees.
 */
export enum EmployeeTypesEnum {
	GENERIC = 'generic', // Cuentas compartidas (ej. Recepción)
	SERVICE = 'service', // Empleado con acceso a la app
	REGULAR = 'regular', // Empleado fijo/permanente sin acceso
	CONTRACTOR = 'contractor', // Contratado (por proyecto/tiempo determinado)
	APPRENTICE = 'apprentice' // Aprendiz / Pasante / SENA
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
