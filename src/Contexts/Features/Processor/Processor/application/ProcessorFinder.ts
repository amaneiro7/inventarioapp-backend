import { type ProcessorDto } from '../domain/Processor.dto'
import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorRepository } from '../domain/ProcessorRepository'
export class ProcessorsFinder {
	constructor(private readonly processorRepository: ProcessorRepository) {}

	async run(params: { id: string }): Promise<ProcessorDto> {
		const { id } = params
		const processorId = new ProcessorId(id)
		const processor = await this.processorRepository.searchById(processorId.value)

		if (!processor) {
			throw new ProcessorDoesNotExistError(processorId.value)
		}

		return processor
	}
}
