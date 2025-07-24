import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export class ProcessorRemover {
	private readonly processorRepository: ProcessorRepository
	constructor({ processorRepository }: { processorRepository: ProcessorRepository }) {
		this.processorRepository = processorRepository
	}

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
