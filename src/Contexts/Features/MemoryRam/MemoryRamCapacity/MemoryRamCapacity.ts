import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError'
import { NumberValueObject } from '../../../Shared/domain/value-object/NumberValueObject'

// Define a class for representing memory ram capacity as a value object
export class MemoryRamCapacity extends NumberValueObject {
	//private readonly min = 0
	private readonly max = 32
	private readonly numStep = 9
	private readonly minStep = this.max / Math.pow(2, this.numStep - 1)
	// Constructor for the MemoryRamCapacityValue class
	constructor(readonly value: number) {
		super(value) // Call the constructor of the parent class

		// Ensure the validity of the memory ram capacity value
		this.ensureIsValid(value)
	}

	// Convert the memory ram capacity value to its primitive representation
	toPrimitives(): number {
		return this.value
	}

	// Ensure the validity of the memory ram capacity value
	private ensureIsValid(value: number): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(
				`<${value}> is not a valid ram capacity`
			)
		}
	}

	/**
	 * Check if the provided memory RAM capacity value is valid
	 *
	 * @param value - The memory RAM capacity value to be checked
	 * @returns true if the value is a power of 2 and not zero, and is a multiple of 512, otherwise returns false
	 */
	private isValid(value: number): boolean {
		return value % this.minStep === 0
	}
}
