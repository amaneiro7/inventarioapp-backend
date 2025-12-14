import { StringTooLongError } from '../errors/StringTooLongError'
import { StringTooShortError } from '../errors/StringTooShortError'
import { ValueObject } from './ValueObject'

export abstract class StringValueObject extends ValueObject<string> {
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
}
