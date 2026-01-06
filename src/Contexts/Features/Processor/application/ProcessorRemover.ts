import { Processor } from '../domain/entity/Processor'
import { ProcessorId } from '../domain/valueObject/ProcessorId'
import { ProcessorDoesNotExistError } from '../domain/errors/ProcessorDoesNotExistError'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type ProcessorRepository } from '../domain/repository/ProcessorRepository'

/**
 * @description Use case for removing a Processor entity.
 */
export class ProcessorRemover {
	private readonly processorRepository: ProcessorRepository
	private readonly eventBus: EventBus

	constructor({ processorRepository, eventBus }: { processorRepository: ProcessorRepository; eventBus: EventBus }) {
		this.processorRepository = processorRepository
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the processor removal process.
	 * @param {{ id: string }} params The parameters for removing the processor.
	 * @returns {Promise<void>} A promise that resolves when the processor is successfully removed.
	 * @throws {ProcessorDoesNotExistError} If no processor with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<void> {
		const processorId = new ProcessorId(id)

		const processor = await this.processorRepository.findById(processorId.value)
		if (!processor) {
			throw new ProcessorDoesNotExistError(id)
		}
		const processorEntity = Processor.fromPrimitives(processor)
		processorEntity.delete()
		await this.processorRepository.remove(processorId.value)
		await this.eventBus.publish(processorEntity.pullDomainEvents())
	}
}
