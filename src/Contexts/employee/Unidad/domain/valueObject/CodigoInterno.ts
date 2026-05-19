import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

export class CodigoInterno extends AcceptedNullStringValueObject {
	private readonly VALID_REGEX = /^\d+$/

	constructor(value: string | null) {
		super(value)
		if (value !== null && value !== '') {
			this.ensureMatchesPattern(this.VALID_REGEX, value)
		}
	}
}
