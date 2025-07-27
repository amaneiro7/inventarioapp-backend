import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../Shared/domain/value-object/NumberValueObject'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents the value of a single memory RAM module.
 */
export class MemoryRamValues extends NumberValueObject {
	private readonly validSteps: Set<number>

	constructor(readonly value: number) {
		super(value)
		this.validSteps = this.generateValidSteps()
		this.ensureIsValid(value)
	}

	/**
	 * @description Creates a `MemoryRamValues` instance from a primitive value.
	 * @param {Primitives<MemoryRamValues>} value The primitive value.
	 * @returns {MemoryRamValues} A new `MemoryRamValues` instance.
	 */
	static fromValues(value: Primitives<MemoryRamValues>): MemoryRamValues {
		return new MemoryRamValues(Number(value))
	}

	/**
	 * @description Generates the set of valid RAM module sizes.
	 * @returns {Set<number>} A set of valid RAM sizes.
	 */
	private generateValidSteps(): Set<number> {
		const steps = new Set<number>([0])
		let currentValue = 32 / Math.pow(2, 8) // 0.125
		for (let i = 0; i < 9; i++) {
			steps.add(currentValue)
			currentValue *= 2
		}
		return steps
	}

	/**
	 * @description Ensures the validity of the memory RAM value.
	 * @param {number} value The value to validate.
	 * @throws {InvalidArgumentError} If the value is not a valid RAM size.
	 */
	private ensureIsValid(value: number): void {
		if (!this.validSteps.has(value)) {
			throw new InvalidArgumentError(`<${value}> no es un valor de RAM válido.`)
		}
	}
}
