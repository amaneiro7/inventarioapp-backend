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
}
