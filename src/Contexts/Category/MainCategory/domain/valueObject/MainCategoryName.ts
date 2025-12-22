import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @class MainCategoryName
 * @extends StringValueObject
 * @description Represents the Value Object for a Main Category's name.
 * It encapsulates validation rules for the main category name.
 */
export class MainCategoryName extends StringValueObject {
	private readonly MIN_LENGTH = 5
	private readonly MAX_LENGTH = 100

	/**
	 * @param {string} value The raw string value of the main category name.
	 * @throws {InvalidArgumentError} If the provided name does not meet the length constraints.
	 */
	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH, this.value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, this.value)
	}
}
