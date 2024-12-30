import { type ProcessorPrimitives } from '../domain/Processor'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export class ProcessorsFinderAll {
  constructor(private readonly repository: ProcessorRepository) { }

  async run(): Promise<ProcessorPrimitives[]> {
    return await this.repository.searchAll()
  }
}
