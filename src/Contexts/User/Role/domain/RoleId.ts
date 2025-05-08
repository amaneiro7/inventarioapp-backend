import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

export class RoleId extends StringValueObject {
	static readonly Options: Record<string, string> = {
		ADMIN: '1',
		SPECIALIST: '2',
		COORD: '3',
		GERENTE: '4'
	} as const
}
