import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export class ProcessorRemover {
	constructor(private readonly processorRepository: ProcessorRepository) {}

	async run(params: { id: string }): Promise<void> {
		const { id } = params
		const processorId = new ProcessorId(id)

		const processor = await this.processorRepository.searchById(processorId.value)
		if (processor === null) {
			throw new ProcessorDoesNotExistError(id)
		}

		await this.processorRepository.remove(processorId.value)
	}
}
