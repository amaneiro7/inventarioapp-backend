import { InvalidArgumentError } from '../errors/ApiError'
import { StringTooLongError } from '../errors/NumberTooLongError'
import { StringTooShortError } from '../errors/StringTooShortError'
import { AcceptedNullValueObject } from './AcceptedNullValueObjects'

/**
 * @abstract
 * @class AcceptedNullStringValueObject
 * @extends {AcceptedNullValueObject<string>}
 * @description Base class for string value objects that can be null.
 * It automatically trims whitespace from the string value upon construction.
 */
export abstract class AcceptedNullStringValueObject extends AcceptedNullValueObject<string> {
	constructor(value: string | null) {
		super(value === null ? null : value.trim())
	}

	protected ensureLengthIsSmallerThan(maxLength: number): void {
		if (this.value && this.value.length > maxLength) {
			throw new StringTooLongError(this.constructor.name, maxLength)
		}
	}
	protected ensureLengthIsBiggerThan(minLength: number): void {
		if (this.value && this.value.length < minLength) {
			throw new StringTooShortError(this.constructor.name, minLength)
		}
	}

	protected ensureMatchesPattern(regex: RegExp, errorMessage?: string): void {
		if (this.value && !regex.test(this.value)) {
			throw new InvalidArgumentError(
				errorMessage || `El valor <${this.value}> para <${this.constructor.name}> tiene un formato inválido.`
			)
		}
	}
}
