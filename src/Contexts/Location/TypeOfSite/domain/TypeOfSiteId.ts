import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * Represents the unique identifier for a TypeOfSite.
 * It extends StringValueObject, implying its value is a string.
 */
export class TypeOfSiteId extends StringValueObject {
	/**
	 * Defines a set of predefined options for TypeOfSite IDs.
	 * These are constant values used throughout the application.
	 */ static readonly TypeOfSiteOptions = {
		TORRE: '1',
		AGENCIA: '2',
		ALMACEN: '3'
	}
}
