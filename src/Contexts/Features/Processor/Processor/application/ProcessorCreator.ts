import { Processor } from '../domain/Processor'
import { ProcessorAlreadyExistError } from '../domain/ProcessorAlreadyExistError'
import { ProcessorNumberModel } from '../domain/ProcessorNumberModel'
import { type ProcessorParams } from '../domain/Processor.dto'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export class ProcessorCreator {
	private readonly processorRepository: ProcessorRepository
	constructor({ processorRepository }: { processorRepository: ProcessorRepository }) {
		this.processorRepository = processorRepository
	}

	async run({ productCollection, numberModel, cores, threads, frequency }: ProcessorParams): Promise<void> {
		const processor = Processor.create({
			productCollection,
			numberModel,
			cores,
			threads,
			frequency
		})
		await this.ensureProcessorNameDoesNotExist(numberModel)

		await this.processorRepository.save(processor.toPrimitive())
	}

	private async ensureProcessorNameDoesNotExist(numberModel: string): Promise<void> {
		if (
			(await this.processorRepository.searchByNumberModel(new ProcessorNumberModel(numberModel).value)) !== null
		) {
			throw new ProcessorAlreadyExistError(numberModel)
		}
	}
}
