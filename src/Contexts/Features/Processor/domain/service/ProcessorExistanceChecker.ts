import { ProcessorDoesNotExistError } from '../../../Processor/domain/errors/ProcessorDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorRepository } from '../../../Processor/domain/repository/ProcessorRepository'
import { type ProcessorId } from '../../../Processor/domain/valueObject/ProcessorId'

export class ProcessorExistenceChecker {
	constructor(private readonly repository: ProcessorRepository) {}

	/**
	 * Ensures that one or more Processors exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<ProcessorId> | null | undefined |  (Primitives<ProcessorId>| null | undefined )[]} ProcessorIds - The Processor ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all Processors exist.
	 * @throws {ProcessorDoesNotExistError} If any of the Processors do not exist.
	 */
	async ensureExist(
		processorIds: Primitives<ProcessorId> | null | undefined | (Primitives<ProcessorId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(processorIds) ? processorIds : [processorIds]
		const uniqueProcessorIds = [...new Set(ids.filter(id => id !== null && id !== undefined))]
		if (uniqueProcessorIds.length === 0) {
			return
		}

		const foundProcessors = await this.repository.findByIds(uniqueProcessorIds)
		if (foundProcessors.length !== uniqueProcessorIds.length) {
			const foundIds = new Set(foundProcessors.map(c => c.id))
			const missingIds = uniqueProcessorIds.filter(id => !foundIds.has(id))
			throw new ProcessorDoesNotExistError(missingIds.join(', '))
		}
	}
}
