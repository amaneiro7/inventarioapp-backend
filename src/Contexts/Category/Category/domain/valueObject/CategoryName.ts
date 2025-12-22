import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @class CategoryName
 * @extends StringValueObject
 * @description Represents the Value Object for a Category's name.
 * It encapsulates validation rules for the category name.
 */
export class CategoryName extends StringValueObject {
	private readonly MIN_LENGTH = 5
	private readonly MAX_LENGTH = 100

	/**
	 * @param {string} value The raw string value of the category name.
	 * @throws {InvalidArgumentError} If the provided name does not meet the length constraints.
	 */
	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH, this.value)
	}
}
