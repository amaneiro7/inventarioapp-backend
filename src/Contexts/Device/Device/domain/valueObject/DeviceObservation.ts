import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

/**
 * @class DeviceObservation
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's observation notes.
 * It ensures the observation text does not exceed a maximum length.
 */
export class DeviceObservation extends AcceptedNullStringValueObject {
	private readonly MAX_LENGTH = 1000

	constructor(readonly value: string | null) {
		super(value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH)
	}
}
