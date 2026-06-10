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

	protected ensureIsInteger(value: number): void {
		if (!Number.isInteger(value)) {
			throw new Error(`El valor <${value}> para <${this.constructor.name}> debe ser un número entero.`)
		}
	}

	protected ensureIsPositive(value: number): void {
		if (value < 0) {
			throw new Error(`El valor <${value}> para <${this.constructor.name}> debe ser un número positivo.`)
		}
	}

	protected ensureLengthIsSmallerThan(maxLength: number, value: number): void {
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
