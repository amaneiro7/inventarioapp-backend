import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

export class PermissionGroupDescription extends StringValueObject {
	constructor(value: string) {
		super(value)
		this.ensureLengthIsLowerThan(255, value)
	}
}
