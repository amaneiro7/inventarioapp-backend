import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../Shared/domain/value-object/NumberValueObject'

/**
 * @description Represents the total memory RAM capacity of a device.
 */
export class MemoryRamCapacity extends NumberValueObject {
	private readonly MAX_CAPACITY = 32
	private readonly MIN_STEP = this.MAX_CAPACITY / Math.pow(2, 8) // 0.125

	constructor(readonly value: number) {
		super(value)
		this.ensureLengthIsSmallerThan(this.MAX_CAPACITY, this.value)
		this.ensureIsValid(value)
	}

	/**
	 * @description Ensures the validity of the memory RAM capacity value.
	 * @param {number} value The value to validate.
	 * @throws {InvalidArgumentError} If the value is not valid.
	 */
	private ensureIsValid(value: number): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> no es una capacidad de RAM válida.`)
		}
	}

	/**
	 * @description Checks if the provided memory RAM capacity value is valid.
	 * @param {number} value The value to check.
	 * @returns {boolean} True if the value is a valid capacity, false otherwise.
	 */
	private isValid(value: number): boolean {
		return value % this.MIN_STEP === 0
	}
}
