import { InvalidArgumentError } from '../errors/ApiError'
import { StringTooLongError } from '../errors/NumberTooLongError'
import { StringTooShortError } from '../errors/StringTooShortError'
import { ValueObject } from './ValueObject'

export abstract class StringValueObject extends ValueObject<string> {
	constructor(value: string) {
		super(value.trim())
	}

	protected ensureLengthIsSmallerThan(maxLength: number, value: string): void {
		if (value.length > maxLength) {
			throw new StringTooLongError(this.constructor.name, maxLength)
		}
	}
	protected ensureLengthIsBiggerThan(minLength: number, value: string): void {
		if (value.length < minLength) {
			throw new StringTooShortError(this.constructor.name, minLength)
		}
	}

	protected ensureMatchesPattern(regex: RegExp, value: string, errorMessage?: string): void {
		if (!regex.test(value)) {
			throw new InvalidArgumentError(
				errorMessage || `El valor <${value}> para <${this.constructor.name}> tiene un formato inválido.`
			)
		}
	}
}
