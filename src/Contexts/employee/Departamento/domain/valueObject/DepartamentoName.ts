import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

export class DepartamentoName extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 100
	private readonly VALID_REGEX = /^[a-zA-ZÀ-ÿ0-9()\-.,\s]*$/
	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH, this.value)
		this.ensureMatchesPattern(this.VALID_REGEX, this.value)
	}
}
