import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../Shared/domain/value-object/NumberValueObject'

/**
 * @description Represents the total memory RAM capacity of a device.
 */
export class MemoryRamCapacity extends NumberValueObject {
	private readonly MAX_GB: number = 512
	private readonly STEP_GB: number = 0.125

	constructor(readonly value: number) {
		super(value)
		this.ensureValidRange(this.value)
		this.ensureStepConsistency(this.value)
	}

	/**
	 * @description Ensures the validity of the memory RAM capacity value.
	 * @param {number} value The value to validate.
	 * @throws {InvalidArgumentError} If the value is not valid.
	 */
	private ensureValidRange(value: number): void {
		if (value < 0 || value > this.MAX_GB) {
			throw new InvalidArgumentError(`La capacidad de RAM <${value}> debe estar entre 0 y ${this.MAX_GB} GB.`)
		}
	}

	/**
	 * @description Checks if the provided memory RAM capacity value is valid.
	 * @param {number} value The value to check.
	 * @returns {boolean} True if the value is a valid capacity, false otherwise.
	 */
	private ensureStepConsistency(value: number): void {
		// Multiplicamos por 1000 para evitar problemas de precisión de punto flotante en el módulo
		// O mejor aún, validamos basándonos en potencias de 128MB (0.125)
		const precisionMultiplier = 1000
		const normalizedValue = Math.round(value * precisionMultiplier)
		const normalizedStep = Math.round(this.STEP_GB * precisionMultiplier)

		if (normalizedValue % normalizedStep !== 0) {
			throw new InvalidArgumentError(
				`<${value}> no es una capacidad de RAM válida. Debe ser múltiplo de ${this.STEP_GB} GB.`
			)
		}
	}
}
