import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorPrimitives } from '../domain/Processor'
import { type ProcessorRepository } from '../domain/ProcessorRepository'
export class ProcessorsFinder {
  constructor(private readonly repository: ProcessorRepository) { }

  async run(params: { id: string }): Promise<ProcessorPrimitives> {
    const { id } = params
    const processorId = new ProcessorId(id)
    const processor = await this.repository.searchById(processorId.value)

    if (processor === null) {
      throw new ProcessorDoesNotExistError(processorId.value)
    }

    return processor
  }
}
