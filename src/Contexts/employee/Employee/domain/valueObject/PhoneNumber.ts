import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Employee } from '../entity/Employee'

export class PhoneNumber extends StringValueObject {
	private readonly areaCodes = ['0414', '0424', '0412', '0416', '0426']
	private readonly numberLength = 7
	private readonly totalLength = 11 // 4 dígitos de área + 7 dígitos del número
	private readonly phoneRegex = new RegExp(`^(${this.areaCodes.join('|')})\\d{${this.numberLength}}$`)
	private errorMessage = ''

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValid(value)
	}

	toPrimitives(): string {
		return this.value
	}

	public static fromValues(phones: Primitives<PhoneNumber>[]): PhoneNumber[] {
		return phones.filter(Boolean).map(phone => new PhoneNumber(phone)) ?? []
	}

	private ensureIsValid(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(this.errorMessage)
		}
	}

	private isValid(name: string): boolean {
		if (name.length !== this.totalLength) {
			this.errorMessage = `${name} no tiene la longitud correcta. Debe tener ${this.totalLength} dígitos.`
			return false
		}
		if (!this.phoneRegex.test(name)) {
			this.errorMessage = `${name} no es un número de teléfono válido. Debe comenzar con ${this.areaCodes.join(
				', '
			)} y tener ${this.numberLength} dígitos adicionales.`
			return false
		}
		return true
	}
	static async updatePhoneNumber({
		phoneNumber,
		entity
	}: {
		phoneNumber?: Primitives<PhoneNumber>[]
		entity: Employee
	}): Promise<void> {
		if (phoneNumber !== undefined) {
			entity.updatePhone(phoneNumber)
		}
	}
}
