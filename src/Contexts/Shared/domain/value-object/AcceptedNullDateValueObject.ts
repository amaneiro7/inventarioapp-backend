import { AcceptedNullValueObject } from './AcceptedNullValueObjects'
import { InvalidArgumentError } from '../errors/ApiError'

/**
 * @abstract
 * @class AcceptedNullDateValueObject
 * @extends {AcceptedNullValueObject<Date>}
 * @description Base class for Date value objects that can be null.
 * It provides common validation methods for dates.
 */
export abstract class AcceptedNullDateValueObject extends AcceptedNullValueObject<Date> {
	constructor(value: Date | null) {
		super(value)
	}

	/**
	 * @protected
	 * @method ensureIsPastDate
	 * @description Ensures the date is in the past.
	 * @param {Date | null} value The value to check.
	 * @throws {InvalidArgumentError} If the date is not in the past.
	 */
	protected ensureIsPastDate(value: Date | null): void {
		if (value !== null && value.getTime() >= Date.now()) {
			throw new InvalidArgumentError(`La fecha para <${this.constructor.name}> debe ser una fecha pasada.`)
		}
	}
}
