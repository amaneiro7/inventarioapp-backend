import { type ProcessorDto } from '../domain/Processor.dto'
import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

/**
 * @description Use case for finding a Processor entity by its unique identifier.
 */
export class ProcessorsFinder {
	private readonly processorRepository: ProcessorRepository

	constructor({ processorRepository }: { processorRepository: ProcessorRepository }) {
		this.processorRepository = processorRepository
	}

	/**
	 * @description Executes the processor finding process.
	 * @param {{ id: string }} params The parameters for finding the processor.
	 * @returns {Promise<ProcessorDto>} A promise that resolves to the found Processor DTO.
	 * @throws {ProcessorDoesNotExistError} If no processor with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<ProcessorDto> {
		const processorId = new ProcessorId(id)
		const processor = await this.processorRepository.searchById(processorId.value)

		if (!processor) {
			throw new ProcessorDoesNotExistError(processorId.value)
		}

		return processor
	}
}
