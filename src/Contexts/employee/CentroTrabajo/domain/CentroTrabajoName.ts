import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of a CentroTrabajo.
 */
export class CentroTrabajoName extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 100
	private readonly VALID_REGEX = /^[a-zA-Z0-9()\-.,\s]*$/

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValid(value)
	}

	private ensureIsValid(value: string): void {
		const errors: string[] = []

		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			errors.push(
				`Debe tener al menos ${this.MIN_LENGTH} caracteres y un máximo de ${this.MAX_LENGTH} caracteres.`
			)
		}
		if (!this.VALID_REGEX.test(value)) {
			errors.push('Solo se permiten caracteres alfanuméricos, paréntesis, guiones, puntos y comas.')
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(
				`El nombre del centro de trabajo '${value}' no es válido: ${errors.join(', ')}`
			)
		}
	}
}
