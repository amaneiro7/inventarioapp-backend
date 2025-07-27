import { EnumValueObject } from '../../../Shared/domain/value-object/EnumValueObject'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'

/**
 * @enum RoleTypes
 * @description Defines the possible types of user roles.
 */
export enum RoleTypes {
	ADMIN = 'Admin',
	SPECIALIST = 'Especialista',
	COORD = 'Coordinador',
	GERENTE = 'Gerente'
}

/**
 * @description Represents a user's role as a Value Object.
 */
export class Roles extends EnumValueObject<RoleTypes> {
	constructor(value: RoleTypes) {
		super(value, Object.values(RoleTypes))
	}

	/**
	 * @description Creates a `Roles` instance from a string value.
	 * @param {string} value The string value of the role.
	 * @returns {Roles} A new `Roles` instance.
	 * @throws {InvalidArgumentError} If the provided value is not a valid role type.
	 */
	static fromValue(value: string): Roles {
		const roleType = Object.values(RoleTypes).find(role => role === value)
		if (roleType === undefined) {
			throw new InvalidArgumentError(`El tipo de rol '${value}' no es válido.`)
		}
		return new Roles(roleType)
	}

	/**
	 * @description Returns all possible primitive role type values.
	 * @returns {RoleTypes[]} An array of all valid role types.
	 */
	static toPrimitive(): RoleTypes[] {
		return Object.values(RoleTypes)
	}

	protected throwErrorForInvalidValue(value: RoleTypes): void {
		throw new InvalidArgumentError(`El tipo de rol '${value}' no es válido.`)
	}
}
