import { Processor } from '../domain/Processor'
import { ProcessorAlreadyExistError } from '../domain/ProcessorAlreadyExistError'
import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { ProcessorNumberModel } from '../domain/ProcessorNumberModel'
import { type ProcessorRepository } from '../domain/ProcessorRepository'
import { type ProcessorParams } from './ProcessorCreator'

export interface PartialProcessorParams extends Partial<ProcessorParams> {}

export class ProcessorUpdater {
	constructor(private readonly processorRepository: ProcessorRepository) {}

	async run({
		id,
		params
	}: {
		id: string
		params: PartialProcessorParams
	}): Promise<void> {
		const { productCollection, numberModel, cores, frequency, threads } =
			params
		const processorId = new ProcessorId(id)

		const processor = await this.processorRepository.searchById(
			processorId.value
		)
		if (processor === null) {
			throw new ProcessorDoesNotExistError(processorId.value)
		}

		const processorEntity = Processor.fromPrimitives(processor)

		if (!!productCollection) {
			processorEntity.updateProductCollection(productCollection)
		}

		if (!!numberModel) {
			await this.ensureprocessorNumberValueDoesNotExist(numberModel)
			processorEntity.updateNumberModel(numberModel)
		}

		if (!!cores) {
			processorEntity.updateCores(cores)
		}

		if (!!threads) {
			processorEntity.updateThreads(threads)
		}

		if (!!frequency) {
			processorEntity.updateFrequency(frequency)
		}

		await this.processorRepository.save(processorEntity.toPrimitive())
	}

	private async ensureprocessorNumberValueDoesNotExist(
		numberModel: string
	): Promise<void> {
		if (
			(await this.processorRepository.searchByNumberModel(
				new ProcessorNumberModel(numberModel).value
			)) !== null
		) {
			throw new ProcessorAlreadyExistError(numberModel)
		}
	}
}
