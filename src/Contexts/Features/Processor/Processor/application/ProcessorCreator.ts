import { Processor, type ProcessorPrimitives } from '../domain/Processor'
import { ProcessorAlreadyExistError } from '../domain/ProcessorAlreadyExistError'
import { ProcessorNumberModel } from '../domain/ProcessorNumberModel'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export interface ProcessorParams extends Omit<ProcessorPrimitives, 'id' | 'name'> { }
export class ProcessorCreator {
  constructor(private readonly processorRepository: ProcessorRepository) { }

  async run({ productCollection, numberModel, cores, threads, frequency }: ProcessorParams): Promise<void> {
    const processor = Processor.create({ productCollection, numberModel, cores, threads, frequency })
    await this.ensureProcessorNameDoesNotExist(numberModel)

    await this.processorRepository.save(processor.toPrimitive())
  }

  private async ensureProcessorNameDoesNotExist(numberModel: string): Promise<void> {
    if (await this.processorRepository.searchByNumberModel(new ProcessorNumberModel(numberModel).value) !== null) {
      throw new ProcessorAlreadyExistError(numberModel)
    }
  }
}
