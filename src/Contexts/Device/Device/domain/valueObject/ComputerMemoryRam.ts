import { MemoryRamValues } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents the memory RAM modules of a computer.
 */
export class ComputerMemoryRam {
	constructor(readonly value: MemoryRamValues[]) {}

	/**
	 * @description Converts the memory RAM values to their primitive representation.
	 * @returns {Primitives<MemoryRamValues>[]} An array of primitive memory RAM values.
	 */
	toPrimitives(): Primitives<MemoryRamValues>[] {
		return this.value.map(memValue => memValue.value)
	}

	/**
	 * @description Creates a `ComputerMemoryRam` instance from an array of primitive values.
	 * @param {Primitives<MemoryRamValues>[]} memoryRamValues An array of primitive memory RAM values.
	 * @returns {ComputerMemoryRam} A new `ComputerMemoryRam` instance.
	 */
	static fromPrimitives(memoryRamValues: Primitives<MemoryRamValues>[]): ComputerMemoryRam {
		return new ComputerMemoryRam(memoryRamValues.map(MemoryRamValues.fromValues))
	}

	/**
	 * @description Calculates the total amount of memory RAM.
	 * @param {Primitives<MemoryRamValues>[]} value An array of primitive memory RAM values.
	 * @returns {number} The total amount of memory RAM.
	 */
	static totalAmount(value: Primitives<MemoryRamValues>[]): number {
		return value.reduce((total, val) => total + Number(val), 0)
	}
}
