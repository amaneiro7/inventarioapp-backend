import { Processor } from '../domain/entity/Processor'
import { ProcessorNumberModelUniquenessChecker } from '../domain/service/ProcessorNumberModelUniquenessChecker'
import { type ProcessorParams } from '../domain/entity/Processor.dto'
import { type ProcessorRepository } from '../domain/repository/ProcessorRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @description Use case for creating a new Processor entity.
 */
export class ProcessorCreator {
	private readonly processorRepository: ProcessorRepository
	private readonly processorNumberModelUniquenessChecker: ProcessorNumberModelUniquenessChecker
	private readonly eventBus: EventBus

	constructor({ processorRepository, eventBus }: { processorRepository: ProcessorRepository; eventBus: EventBus }) {
		this.processorRepository = processorRepository
		this.processorNumberModelUniquenessChecker = new ProcessorNumberModelUniquenessChecker(processorRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the processor creation process.
	 * @param {ProcessorParams} params The parameters for creating the processor.
	 * @returns {Promise<void>} A promise that resolves when the processor is successfully created.
	 * @throws {ProcessorAlreadyExistError} If a processor with the same model number already exists.
	 */
	async run(params: ProcessorParams): Promise<void> {
		const { numberModel } = params

		await this.processorNumberModelUniquenessChecker.ensureUnique(numberModel)

		const processor = Processor.create(params)
		await this.processorRepository.save(processor.toPrimitives())
		await this.eventBus.publish(processor.pullDomainEvents())
	}
}
