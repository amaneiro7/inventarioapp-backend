import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'

/**
 * @description Represents the quantity of memory RAM slots in a computer.
 */
export class MemoryRamSlotQuantity extends NumberValueObject {
	private readonly MIN_SLOTS = 1
	private readonly MAX_SLOTS = 8

	constructor(readonly value: number) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_SLOTS, this.value)
		this.ensureLengthIsSmallerThan(this.MAX_SLOTS, this.value)
	}
}
