import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export class ProcessorRemover {
  constructor(private readonly repository: ProcessorRepository) { }

  async run(params: { id: string }): Promise<void> {
    const { id } = params
    const processorId = new ProcessorId(id)

    const processor = await this.repository.searchById(processorId.value)
    if (processor === null) {
      throw new ProcessorDoesNotExistError(id)
    }

    await this.repository.remove(processorId.value)
  }
}
