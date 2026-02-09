import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

/**
 * @description Represents the name of a computer, which can be null.
 */
export class ComputerName extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 1000
	// Este regex acepta letras, números y guiones, pero evita que empiece o termine con guion
	private readonly HOSTNAME_REGEX = /^[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?$/

	constructor(readonly value: string | null) {
		super(value)
		if (this.value !== null) {
			const normalizedValue = this.value.toUpperCase().trim()
			this.value = normalizedValue
		}
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH)
		this.ensureMatchesPattern(
			this.HOSTNAME_REGEX,
			'El nombre debe ser alfanumérico y solo puede contener guiones (no al inicio ni al final).'
		)
	}
}
