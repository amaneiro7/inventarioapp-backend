import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'

/**
 * @description Represents the number of cores in a processor.
 */
export class ProcessorCores extends NumberValueObject {
	private readonly MIN_CORES = 1
	private readonly MAX_CORES = 32

	constructor(readonly value: number) {
		super(value)
		this.ensureIsValidCores(value)
	}

	private ensureIsValidCores(value: number): void {
		if (value < this.MIN_CORES || value > this.MAX_CORES) {
			throw new InvalidArgumentError(
				`El número de núcleos debe estar entre ${this.MIN_CORES} y ${this.MAX_CORES}.`
			)
		}
		if (value % 2 !== 0 && value !== 1) {
			throw new InvalidArgumentError('El número de núcleos debe ser par o igual a 1.')
		}
	}
}
