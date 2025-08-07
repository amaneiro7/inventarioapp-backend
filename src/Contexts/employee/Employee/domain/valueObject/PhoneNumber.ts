import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { phoneNumberAreaCode } from './phoneNumberAreaCode'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Employee } from '../entity/Employee'

/**
 * @description Represents an employee's phone number.
 */
export class PhoneNumber extends StringValueObject {
	private readonly AREA_CODES = phoneNumberAreaCode.map(areaCode => areaCode.codigo)
	private readonly NUMBER_LENGTH = 7
	private readonly TOTAL_LENGTH = 11
	private readonly PHONE_REGEX = new RegExp(`^(${this.AREA_CODES.join('|')})\\d{${this.NUMBER_LENGTH}}$`)

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValid(value)
	}

	/**
	 * @description Creates an array of `PhoneNumber` instances from an array of primitive values.
	 * @param {Primitives<PhoneNumber>[]} phones An array of primitive phone number values.
	 * @returns {PhoneNumber[]} An array of `PhoneNumber` instances.
	 */
	public static fromValues(phones: Primitives<PhoneNumber>[]): PhoneNumber[] {
		return Array.isArray(phones) ? phones.filter(Boolean).map(phone => new PhoneNumber(phone)) : []
	}

	private ensureIsValid(value: string): void {
		const errors: string[] = []

		if (value.length !== this.TOTAL_LENGTH) {
			errors.push(`No tiene la longitud correcta. Debe tener ${this.TOTAL_LENGTH} dígitos.`)
		}
		if (!this.PHONE_REGEX.test(value)) {
			errors.push(
				`No es un número de teléfono válido. Debe comenzar con ${this.AREA_CODES.join(', ')} y tener ${
					this.NUMBER_LENGTH
				} dígitos adicionales.`
			)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`Número de teléfono '${value}' inválido: ${errors.join(', ')}`)
		}
	}

	/**
	 * @description Handles the logic for updating the phone number field of an employee.
	 * @param {{ phoneNumber?: Primitives<PhoneNumber>[]; entity: Employee }} params The parameters for updating.
	 */
	static updatePhoneNumber({
		phoneNumber,
		entity
	}: {
		phoneNumber?: Primitives<PhoneNumber>[]
		entity: Employee
	}): void {
		if (phoneNumber !== undefined) {
			entity.updatePhone(phoneNumber)
		}
	}
}
