import { NumberTooShortError } from '../errors/NumberTooShortError'
import { NumberTooLongError } from '../errors/StringTooLongError'
import { ValueObject } from './ValueObject'

export abstract class NumberValueObject extends ValueObject<number> {
	isBiggerThan(other: NumberValueObject): boolean {
		return this.value > other.value
	}
	isSmallerThan(other: NumberValueObject): boolean {
		return this.value < other.value
	}
	isEqual(other: NumberValueObject): boolean {
		return this.value === other.value
	}

	protected ensureLengthIsLowerThan(maxLength: number, value: number): void {
		if (value > maxLength) {
			throw new NumberTooLongError(this.constructor.name, maxLength)
		}
	}
	protected ensureLengthIsBiggerThan(minLength: number, value: number): void {
		if (value < minLength) {
			throw new NumberTooShortError(this.constructor.name, minLength)
		}
	}
}
