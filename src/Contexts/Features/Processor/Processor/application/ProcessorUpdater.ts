import { Processor } from '../domain/Processor'
import { ProcessorAlreadyExistError } from '../domain/ProcessorAlreadyExistError'
import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorParams } from '../domain/Processor.dto'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

/**
 * @description Use case for updating an existing Processor entity.
 */
export class ProcessorUpdater {
	private readonly processorRepository: ProcessorRepository

	constructor({ processorRepository }: { processorRepository: ProcessorRepository }) {
		this.processorRepository = processorRepository
	}

	/**
	 * @description Executes the processor update process.
	 * @param {{ id: string; params: Partial<ProcessorParams> }} data The data for updating the processor.
	 * @returns {Promise<void>} A promise that resolves when the processor is successfully updated.
	 * @throws {ProcessorDoesNotExistError} If the processor with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<ProcessorParams> }): Promise<void> {
		const processorId = new ProcessorId(id).value
		const processor = await this.processorRepository.findById(processorId)

		if (!processor) {
			throw new ProcessorDoesNotExistError(processorId)
		}

		const processorEntity = Processor.fromPrimitives(processor)

		await this.updateFields(processorEntity, params)

		await this.processorRepository.save(processorEntity.toPrimitive())
	}

	private async updateFields(entity: Processor, params: Partial<ProcessorParams>): Promise<void> {
		const { productCollection, numberModel, cores, frequency, threads } = params

		if (productCollection !== undefined) {
			entity.updateProductCollection(productCollection)
		}
		if (cores !== undefined) {
			entity.updateCores(cores)
		}
		if (frequency !== undefined) {
			entity.updateFrequency(frequency)
		}
		if (threads !== undefined) {
			entity.updateThreads(threads)
		}
		if (numberModel !== undefined) {
			await this.ensureProcessorNumberValueDoesNotExist(numberModel, entity)
			entity.updateNumberModel(numberModel)
		}
	}

	private async ensureProcessorNumberValueDoesNotExist(numberModel: string, entity: Processor): Promise<void> {
		if (entity.numberModelValue === numberModel) {
			return
		}
		const existingProcessor = await this.processorRepository.searchByNumberModel(numberModel)
		if (existingProcessor) {
			throw new ProcessorAlreadyExistError(numberModel)
		}
	}
}
