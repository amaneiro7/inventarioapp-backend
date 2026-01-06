import { ProcessorAlreadyExistError } from '../errors/ProcessorAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorRepository } from '../repository/ProcessorRepository'
import { type ProcessorId } from '../valueObject/ProcessorId'

/**
 * Domain service responsible for verifying that a Processor name is unique within the system.
 */
export class ProcessorNumberModelUniquenessChecker {
	/**
	 * Creates an instance of ProcessorNumberModelUniquenessChecker.
	 * @param {ProcessorRepository} repository - The repository used to check for existing Processors.
	 */
	constructor(private readonly repository: ProcessorRepository) {}

	/**
	 * Ensures that the provided Processor NumberModel is unique.
	 * If an ID is provided in excludeId, it ignores that Processor (useful for updates).
	 *
	 * @param {string} numberModel - The Processor NumberModel to check.
	 * @param {Primitives<ProcessorId>} [excludeId] - The ID of the Processor to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the NumberModel is unique.
	 * @throws {ProcessorAlreadyExistError} If a Processor with the same NumberModel already exists.
	 */
	async ensureUnique(numberModel: string, excludeId?: Primitives<ProcessorId>): Promise<void> {
		const existingProcessor = await this.repository.searchByNumberModel(numberModel)
		if (existingProcessor && existingProcessor.id !== excludeId) {
			throw new ProcessorAlreadyExistError(numberModel)
		}
	}
}
