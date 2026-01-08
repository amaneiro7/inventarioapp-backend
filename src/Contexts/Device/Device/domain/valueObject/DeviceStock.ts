import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

/**
 * @class DeviceStocknumber
 * @extends AcceptedNullStringValueObject
 * @description Represents the Value Object for a Device's stock number.
 * It encapsulates validation rules based on the device's status.
 */
export class DeviceStocknumber extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 10

	constructor(value: string | null) {
		super(value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH)
	}
}
