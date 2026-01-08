import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

/**
 * @class DeviceActivo
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's asset number (activo).
 * It encapsulates validation rules and business logic related to the asset number.
 */
export class DeviceActivo extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 4
	private readonly MAX_LENGTH = 100
	private readonly NO_LOWERCASE_REGEX = /^[^a-z]*$/
	private readonly NO_SPECIAL_CHARS_REGEX = /^[\w-]*$/

	constructor(value: string | null) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH)
		this.ensureMatchesPattern(this.NO_LOWERCASE_REGEX, 'Debe estar en mayúsculas')
		this.ensureMatchesPattern(this.NO_SPECIAL_CHARS_REGEX, 'No puede contener carácteres especiales.')
	}
}
