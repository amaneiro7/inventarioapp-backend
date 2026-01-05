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
	 * @throws {InvalidArgumentError} If the value is not positive.
	 */
	protected ensureIsPositive(): void {
		if (this.value !== null && this.value <= 0) {
			throw new InvalidArgumentError(`El valor para <${this.constructor.name}> debe ser un número positivo.`)
		}
	}

	protected ensureIsNegative(): void {
		if (this.value !== null && this.value >= 0) {
			throw new InvalidArgumentError(`El valor para <${this.constructor.name}> debe ser un número negativo.`)
		}
	}

	/**
	 * @protected
	 * @method ensureIsInteger
	 * @description Ensures the number is an integer.
	 * @throws {InvalidArgumentError} If the this.value is not an integer.
	 */
	protected ensureIsInteger(): void {
		if (this.value !== null && !Number.isInteger(this.value)) {
			throw new InvalidArgumentError(`El valor para <${this.constructor.name}> debe ser un número entero.`)
		}
	}

	/**
	 * @protected
	 * @method ensureIsGreaterThan
	 * @description Ensures the number is greater than the provided value.
	 * @param {number} min The minimum value (exclusive).
	 * @throws {InvalidArgumentError} If the value is not greater than min.
	 */
	protected ensureIsGreaterThan(min: number): void {
		if (this.value !== null && this.value <= min) {
			throw new InvalidArgumentError(`El valor para <${this.constructor.name}> debe ser mayor que ${min}.`)
		}
	}

	/**
	 * @protected
	 * @method ensureIsLessThan
	 * @description Ensures the number is less than the provided value.
	 * @param {number} max The maximum value (exclusive).
	 * @throws {InvalidArgumentError} If the value is not less than max.
	 */
	protected ensureIsLessThan(max: number): void {
		if (this.value !== null && this.value >= max) {
			throw new InvalidArgumentError(`El valor para <${this.constructor.name}> debe ser menor que ${max}.`)
		}
	}
}
