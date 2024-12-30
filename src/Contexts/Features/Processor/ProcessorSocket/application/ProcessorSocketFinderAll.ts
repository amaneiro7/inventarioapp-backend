import { type ProcessorSocketPrimitives } from '../domain/ProcessorSocket'
import { type ProcessorSocketRepository } from '../domain/ProcessorSocketRepository'

export class SearchAllProcessorSocket {
  constructor(private readonly repository: ProcessorSocketRepository) { }

  async run(): Promise<ProcessorSocketPrimitives[]> {
    return await this.repository.searchAll()
  }
}
