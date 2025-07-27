import { Processor } from '../domain/Processor'
import { ProcessorAlreadyExistError } from '../domain/ProcessorAlreadyExistError'
import { ProcessorNumberModel } from '../domain/ProcessorNumberModel'
import { type ProcessorParams } from '../domain/Processor.dto'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

/**
 * @description Use case for creating a new Processor entity.
 */
export class ProcessorCreator {
	private readonly processorRepository: ProcessorRepository

	constructor({ processorRepository }: { processorRepository: ProcessorRepository }) {
		this.processorRepository = processorRepository
	}

	/**
	 * @description Executes the processor creation process.
	 * @param {ProcessorParams} params The parameters for creating the processor.
	 * @returns {Promise<void>} A promise that resolves when the processor is successfully created.
	 * @throws {ProcessorAlreadyExistError} If a processor with the same model number already exists.
	 */
	async run(params: ProcessorParams): Promise<void> {
		const { numberModel } = params
		await this.ensureProcessorNameDoesNotExist(numberModel)

		const processor = Processor.create(params)
		await this.processorRepository.save(processor.toPrimitive())
	}

	private async ensureProcessorNameDoesNotExist(numberModel: string): Promise<void> {
		const existingProcessor = await this.processorRepository.searchByNumberModel(
			new ProcessorNumberModel(numberModel).value
		)
		if (existingProcessor) {
			throw new ProcessorAlreadyExistError(numberModel)
		}
	}
}
