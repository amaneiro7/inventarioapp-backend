import { type ProcessorPrimitives } from '../domain/Processor'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export class ProcessorsFinderAll {
  constructor(private readonly processorRepository: ProcessorRepository) { }

  async run(): Promise<ProcessorPrimitives[]> {
    return await this.processorRepository.searchAll()
  }
}
