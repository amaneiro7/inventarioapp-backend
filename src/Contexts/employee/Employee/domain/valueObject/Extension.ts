import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { codigosAreaVenezuela } from './codigosAreaVenezuela'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents an employee's phone extension.
 */
export class Extension extends StringValueObject {
	private readonly AREA_CODES = codigosAreaVenezuela.map(areaCode => areaCode.codigo)
	private readonly NUMBER_LENGTH = 7
	private readonly TOTAL_LENGTH = 11
	private readonly PHONE_REGEX = new RegExp(`^(${this.AREA_CODES.join('|')})\\d{${this.NUMBER_LENGTH}}$`)

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValid(value)
	}

	/**
	 * @description Creates an array of `Extension` instances from an array of primitive values.
	 * @param {Primitives<Extension>[]} extensions An array of primitive extension values.
	 * @returns {Extension[]} An array of `Extension` instances.
	 */
	public static fromValues(extensions: Primitives<Extension>[]): Extension[] {
		return Array.isArray(extensions) ? extensions.filter(Boolean).map(ext => new Extension(ext)) : []
	}

	private ensureIsValid(value: string): void {
		const errors: string[] = []

		if (value.length !== this.TOTAL_LENGTH) {
			errors.push(`No tiene la longitud correcta. Debe tener ${this.TOTAL_LENGTH} dígitos.`)
		}
		if (!this.PHONE_REGEX.test(value)) {
			errors.push(
				`No es un número de extensión válido. Debe comenzar con ${this.AREA_CODES.join(', ')} y tener ${
					this.NUMBER_LENGTH
				} dígitos adicionales.`
			)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`Extensión '${value}' inválida: ${errors.join(', ')}`)
		}
	}
}
