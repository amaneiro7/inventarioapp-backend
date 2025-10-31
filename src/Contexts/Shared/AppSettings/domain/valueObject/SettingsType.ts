import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { EnumValueObject } from '../../../../Shared/domain/value-object/EnumValueObject'

export enum SettingsTypeEnum {
	STRING = 'string',
	NUMBER = 'number',
	BOOLEAN = 'boolean',
	JSON = 'json'
}

/**
 * @description Represents the
 */
export class SettingsType extends EnumValueObject<SettingsTypeEnum> {
	constructor(value: SettingsTypeEnum) {
		super(value, Object.values(SettingsTypeEnum))
	}

	protected throwErrorForInvalidValue(value: SettingsTypeEnum): void {
		throw new InvalidArgumentError(`'${value}' is not a valid setting type.`)
	}
}
