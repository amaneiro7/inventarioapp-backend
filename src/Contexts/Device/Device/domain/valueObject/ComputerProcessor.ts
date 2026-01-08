import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { ProcessorId } from '../../../../Features/Processor/domain/valueObject/ProcessorId'
import { ProcessorDoesNotExistError } from '../../../../Features/Processor/domain/errors/ProcessorDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorRepository } from '../../../../Features/Processor/domain/repository/ProcessorRepository'
import { type DeviceComputer } from './Computer'

/**
 * @description Represents the processor of a computer, which can be null.
 */
export class ComputerProcessor extends AcceptedNullValueObject<Primitives<ProcessorId>> {
	constructor(readonly value: Primitives<ProcessorId> | null) {
		super(value)
		this.ensureIsValidProcessorId(value)
	}

	private ensureIsValidProcessorId(id: Primitives<ProcessorId> | null): void {
		if (id !== null) {
			new ProcessorId(id)
		}
	}

	static async updateProcessorField({
		repository,
		processor,
		entity
	}: {
		repository: ProcessorRepository
		processor?: Primitives<ComputerProcessor>
		entity: DeviceComputer
	}): Promise<void> {
		if (processor === undefined || entity.processorValue === processor) {
			return
		}
		await ComputerProcessor.ensureProcessorExit({ repository, processor })
		entity.updateProcessor(processor)
	}

	static async ensureProcessorExit({
		repository,
		processor
	}: {
		repository: ProcessorRepository
		processor: Primitives<ComputerProcessor>
	}): Promise<void> {
		if (processor === null) {
			return
		}
		const existingProcessor = await repository.findById(new ProcessorId(processor).value)
		if (!existingProcessor) {
			throw new ProcessorDoesNotExistError(processor)
		}
	}
}
