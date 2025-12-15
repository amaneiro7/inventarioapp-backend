import { AcceptedNullValueObject } from './AcceptedNullValueObjects'
import { InvalidArgumentError } from '../errors/ApiError'

/**
 * @abstract
 * @class AcceptedNullNumberValueObject
 * @extends {AcceptedNullValueObject<number>}
 * @description Base class for number value objects that can be null.
 * It provides common validation methods for numbers.
 */
export abstract class AcceptedNullNumberValueObject extends AcceptedNullValueObject<number> {
	constructor(value: number | null) {
		super(value)
	}

	/**
	 * @protected
	 * @method ensureIsPositive
	 * @description Ensures the number is positive (greater than 0).
	 * @param {number | null} value The value to check.
	 * @throws {InvalidArgumentError} If the value is not positive.
	 */
	protected ensureIsPositive(value: number | null): void {
		if (value !== null && value <= 0) {
			throw new InvalidArgumentError(`El valor para <${this.constructor.name}> debe ser un número positivo.`)
		}
	}

	/**
	 * @protected
	 * @method ensureIsInteger
	 * @description Ensures the number is an integer.
	 * @param {number | null} value The value to check.
	 * @throws {InvalidArgumentError} If the value is not an integer.
	 */
	protected ensureIsInteger(value: number | null): void {
		if (value !== null && !Number.isInteger(value)) {
			throw new InvalidArgumentError(`El valor para <${this.constructor.name}> debe ser un número entero.`)
		}
	}
}
