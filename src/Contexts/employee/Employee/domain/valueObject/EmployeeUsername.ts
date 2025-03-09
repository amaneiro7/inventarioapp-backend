import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

export class EmployeeUserName extends StringValueObject {
	private readonly NAME_MAX_LENGTH: number = 20
	private readonly NAME_MIN_LENGTH: number = 2
	private readonly validRegex: RegExp = /^[a-zA-Z].*\d*/
	private errors: string[] = []

	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValidName(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid userName ${this.errors.join(' ')}`)
		}
	}

	private isValid(name: string): boolean {
		const isNotHasSpecialCharacters = this.validRegex.test(name)
		if (!isNotHasSpecialCharacters) {
			this.errors.push('Username should not contain special characters.')
		}
		const validNameLength = name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
		if (!validNameLength) {
			this.errors.push(
				`Username length should be between ${this.NAME_MIN_LENGTH} and ${this.NAME_MAX_LENGTH} characters.`
			)
		}
		return isNotHasSpecialCharacters && validNameLength
	}
}
