import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

/**
 * @description Use case for removing a Processor entity.
 */
export class ProcessorRemover {
	private readonly processorRepository: ProcessorRepository

	constructor({ processorRepository }: { processorRepository: ProcessorRepository }) {
		this.processorRepository = processorRepository
	}

	/**
	 * @description Executes the processor removal process.
	 * @param {{ id: string }} params The parameters for removing the processor.
	 * @returns {Promise<void>} A promise that resolves when the processor is successfully removed.
	 * @throws {ProcessorDoesNotExistError} If no processor with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<void> {
		const processorId = new ProcessorId(id)

		const processor = await this.processorRepository.searchById(processorId.value)
		if (!processor) {
			throw new ProcessorDoesNotExistError(id)
		}

		await this.processorRepository.remove(processorId.value)
	}
}
