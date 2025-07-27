import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'

/**
 * @description Represents the frequency of a processor.
 */
export class ProcessorFrequency {
	private readonly MIN_GHZ = 1
	private readonly MAX_GHZ = 6
	readonly value: number

	constructor(value: string | number) {
		this.value = this.parseAndValidate(value)
	}

	private parseAndValidate(value: string | number): number {
		const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^\d.]/g, '')) : value

		if (isNaN(numericValue) || numericValue < this.MIN_GHZ || numericValue > this.MAX_GHZ) {
			throw new InvalidArgumentError(`<${value}> no es una frecuencia de procesador válida.`)
		}
		return numericValue
	}

	toPrimitives(): string {
		return `${this.value.toFixed(2)} GHz`
	}
}
