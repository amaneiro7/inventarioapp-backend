import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the model of a printer cartridge.
 */
export class CartridgeModel extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 20

	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH, this.value)
	}
}
