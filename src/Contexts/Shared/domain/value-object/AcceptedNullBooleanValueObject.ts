import { AcceptedNullValueObject } from './AcceptedNullValueObjects'

/**
 * @abstract
 * @class AcceptedNullBooleanValueObject
 * @extends {AcceptedNullValueObject<boolean>}
 * @description Base class for boolean value objects that can be null.
 * It correctly handles `false` as a valid value.
 */
export abstract class AcceptedNullBooleanValueObject extends AcceptedNullValueObject<boolean> {
	constructor(value: boolean | null) {
		super(value)
	}
}
