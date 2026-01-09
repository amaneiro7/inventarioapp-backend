import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

/**
 * @description Represents the name of a computer, which can be null.
 */
export class ComputerName extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 1000
	private readonly NO_LOWERCASE_REGEX = /^[^a-z]*$/
	private readonly NO_SPECIAL_CHARS_REGEX = /^[A-Z0-9-]+$/

	constructor(readonly value: string | null) {
		super(value)
		if (this.value !== null) {
			this.value = this.value.toUpperCase().trim()
		}
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH)
		this.ensureMatchesPattern(
			this.NO_SPECIAL_CHARS_REGEX,
			'No puede contener caracteres especiales que no sean guiones.'
		)
		this.ensureMatchesPattern(this.NO_LOWERCASE_REGEX, 'Debe estar en mayúsculas.')
	}
}
