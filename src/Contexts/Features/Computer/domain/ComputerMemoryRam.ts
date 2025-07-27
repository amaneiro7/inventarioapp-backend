import { MemoryRamValues } from '../../MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceComputer } from './Computer'

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

	/**
	 * @description Handles the logic for updating the memory RAM of a computer entity.
	 * @param {{ memoryRam?: Primitives<MemoryRamValues>[]; entity: DeviceComputer }} params The parameters for updating.
	 */
	static updateMemoryRam({
		memoryRam,
		entity
	}: {
		memoryRam?: Primitives<MemoryRamValues>[]
		entity: DeviceComputer
	}): void {
		if (memoryRam === undefined || JSON.stringify(entity.memoryRamValue) === JSON.stringify(memoryRam)) {
			return
		}
		entity.updateMemoryRam(memoryRam)
		const newMemRamValue = ComputerMemoryRam.totalAmount(memoryRam)
		entity.updateMemoryRamCapacity(newMemRamValue, entity.statusValue)
	}
}
