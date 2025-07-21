import { MemoryRamValues } from '../../MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceComputer } from './Computer'

/**
 * Represents the memory RAM modules of a computer.
 */
export class ComputerMemoryRam {
	/**
	 * Creates an instance of ComputerMemoryRam.
	 * @param value - An array of memory RAM values.
	 */
	constructor(readonly value: MemoryRamValues[]) {}

	/**
	 * Converts the memory RAM values to their primitive representation.
	 * @returns An array of primitive memory RAM values.
	 */
	public toPrimitives(): Primitives<MemoryRamValues>[] {
		return this.value.map(memValue => memValue.value)
	}

	/**
	 * Creates a ComputerMemoryRam instance from an array of primitive values.
	 * @param memoryRamValues - An array of primitive memory RAM values.
	 * @returns A new ComputerMemoryRam instance.
	 */
	static fromPrimitives(memoryRamValues: Primitives<MemoryRamValues>[]) {
		return new ComputerMemoryRam(memoryRamValues.map(MemoryRamValues.fromValues))
	}

	/**
	 * Checks if there are no memory RAM modules.
	 * @returns True if there are no memory RAM modules, false otherwise.
	 */
	isEmpty(): boolean {
		return this.value.length === 0
	}

	/**
	 * Calculates the total amount of memory RAM.
	 * @param value - An array of primitive memory RAM values.
	 * @returns The total amount of memory RAM.
	 */
	static totalAmount(value: Primitives<MemoryRamValues>[]): number {
		return value.reduce((total, val) => total + Number(val), 0)
	}

	/**
	 * Checks if the total memory RAM is zero.
	 * @param value - An array of primitive memory RAM values.
	 * @returns True if the total memory RAM is zero, false otherwise.
	 */
	isZeroTotalMemory(value: Primitives<MemoryRamValues>[]): boolean {
		return ComputerMemoryRam.totalAmount(value) === 0
	}

	static async updateMemoryRam({
		memoryRam,
		entity
	}: {
		memoryRam?: Primitives<MemoryRamValues>[]
		entity: DeviceComputer
	}): Promise<void> {
		if (memoryRam === undefined) {
			return
		}
		if (JSON.stringify(entity.memoryRamValue) === JSON.stringify(memoryRam)) {
			return
		}
		entity.updateMemoryRam(memoryRam)
		const status = entity.statusValue
		const newMemRamValue = ComputerMemoryRam.totalAmount(memoryRam)
		entity.updateMemoryRamCapacity(newMemRamValue, status)
	}
}
