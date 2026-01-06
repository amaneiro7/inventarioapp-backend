import { Processor } from '../domain/entity/Processor'
import { ProcessorId } from '../domain/valueObject/ProcessorId'
import { ProcessorNumberModelUniquenessChecker } from '../domain/service/ProcessorNumberModelUniquenessChecker'
import { ProcessorDoesNotExistError } from '../domain/errors/ProcessorDoesNotExistError'
import { type ProcessorField, type ProcessorParams } from '../domain/entity/Processor.dto'
import { type ProcessorRepository } from '../domain/repository/ProcessorRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @description Use case for updating an existing Processor entity.
 */
export class ProcessorUpdater {
	private readonly processorRepository: ProcessorRepository
	private readonly processorNumberModelUniquenessChecker: ProcessorNumberModelUniquenessChecker
	private readonly eventBus: EventBus

	constructor({ processorRepository, eventBus }: { processorRepository: ProcessorRepository; eventBus: EventBus }) {
		this.processorRepository = processorRepository
		this.processorNumberModelUniquenessChecker = new ProcessorNumberModelUniquenessChecker(processorRepository)
		this.eventBus = eventBus
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
		const changes: Array<{ field: ProcessorField; oldValue: unknown; newValue: unknown }> = []

		if (
			params.productCollection !== undefined &&
			processorEntity.productCollectionValue !== params.productCollection
		) {
			changes.push({
				field: 'productCollection',
				oldValue: processorEntity.productCollectionValue,
				newValue: params.productCollection
			})
			processorEntity.updateProductCollection(params.productCollection)
		}

		if (params.numberModel !== undefined && processorEntity.numberModelValue !== params.numberModel) {
			changes.push({
				field: 'numberModel',
				oldValue: processorEntity.numberModelValue,
				newValue: params.numberModel
			})
			await this.processorNumberModelUniquenessChecker.ensureUnique(params.numberModel, processorId)
			processorEntity.updateNumberModel(params.numberModel)
		}

		if (params.cores !== undefined && processorEntity.coresValue !== params.cores) {
			changes.push({
				field: 'cores',
				oldValue: processorEntity.coresValue,
				newValue: params.cores
			})
			processorEntity.updateCores(params.cores)
		}

		if (params.frequency !== undefined && processorEntity.frequencyValue !== params.frequency) {
			changes.push({
				field: 'frequency',
				oldValue: processorEntity.frequencyValue,
				newValue: params.frequency
			})
			processorEntity.updateFrequency(params.frequency)
		}

		if (params.threads !== undefined && processorEntity.threadsValue !== params.threads) {
			changes.push({
				field: 'threads',
				oldValue: processorEntity.threadsValue,
				newValue: params.threads
			})
			processorEntity.updateThreads(params.threads)
		}

		if (changes.length > 0) {
			processorEntity.registerUpdateEvent(changes)
			await this.processorRepository.save(processorEntity.toPrimitives())
			await this.eventBus.publish(processorEntity.pullDomainEvents())
		}
	}
}
