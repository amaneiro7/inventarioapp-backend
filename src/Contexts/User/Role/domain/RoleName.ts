import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of a role.
 */
export class RoleName extends StringValueObject {
	static readonly ACCEPTED_VALUES: Record<string, string> = {
		ADMIN: 'Admin',
		SPECIALIST: 'Especialista',
		COORD: 'Coordinador',
		GERENTE: 'Gerente'
	}

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (!RoleName.isValid(value)) {
			throw new InvalidArgumentError(RoleName.invalidMessage(value))
		}
	}

	static isValid(value: string): boolean {
		return Object.values(this.ACCEPTED_VALUES).includes(value)
	}

	static invalidMessage(value: string): string {
		return `'${value}' no es un rol válido.`
	}
}
