import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the product collection of a processor.
 */
export class ProcessorProductCollection extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 100

	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH, this.value)
	}
}
