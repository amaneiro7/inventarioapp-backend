import { Processor } from '../domain/Processor'
import { ProcessorAlreadyExistError } from '../domain/ProcessorAlreadyExistError'
import { ProcessorDoesNotExistError } from '../domain/ProcessorDoesNotExistError'
import { ProcessorId } from '../domain/ProcessorId'
import { type ProcessorParams } from '../domain/Processor.dto'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export class ProcessorUpdater {
	private readonly processorRepository: ProcessorRepository
	constructor({ processorRepository }: { processorRepository: ProcessorRepository }) {
		this.processorRepository = processorRepository
	}

	async run({ id, params }: { id: string; params: Partial<ProcessorParams> }): Promise<void> {
		const { productCollection, numberModel, cores, frequency, threads } = params

		const processorId = new ProcessorId(id).value

		const processor = await this.processorRepository.searchById(processorId)
		if (processor === null) {
			throw new ProcessorDoesNotExistError(processorId)
		}

		const processorEntity = Processor.fromPrimitives(processor)

		await this.updateProductCollection({
			processorEntity,
			productCollection
		})
		await this.ensureProcessorNumberValueDoesNotExist({
			numberModel,
			processorEntity
		})
		await this.updateCores({ cores, processorEntity })
		await this.updateFrequency({ frequency, processorEntity })
		await this.updateThreads({ threads, processorEntity })

		await this.processorRepository.save(processorEntity.toPrimitive())
	}

	private async updateProductCollection({
		productCollection,
		processorEntity
	}: {
		productCollection?: ProcessorParams['productCollection']
		processorEntity: Processor
	}): Promise<void> {
		if (productCollection === undefined) return
		if (processorEntity.productCollectionValue === productCollection) return

		processorEntity.updateProductCollection(productCollection)
	}
	private async updateCores({
		cores,
		processorEntity
	}: {
		cores?: ProcessorParams['cores']
		processorEntity: Processor
	}): Promise<void> {
		if (cores === undefined) return
		if (processorEntity.coresValue === cores) return

		processorEntity.updateCores(cores)
	}
	private async updateFrequency({
		frequency,
		processorEntity
	}: {
		frequency?: ProcessorParams['frequency']
		processorEntity: Processor
	}): Promise<void> {
		if (frequency === undefined) return
		if (processorEntity.frequencyValue === frequency) return

		processorEntity.updateFrequency(frequency)
	}
	private async updateThreads({
		threads,
		processorEntity
	}: {
		threads?: ProcessorParams['threads']
		processorEntity: Processor
	}): Promise<void> {
		if (threads === undefined) return
		if (processorEntity.threadsValue === threads) return

		processorEntity.updateThreads(threads)
	}

	private async ensureProcessorNumberValueDoesNotExist({
		numberModel,
		processorEntity
	}: {
		numberModel?: ProcessorParams['numberModel']
		processorEntity: Processor
	}): Promise<void> {
		if (numberModel === undefined) {
			return
		}
		if (processorEntity.numberModelValue === numberModel) {
			return
		}
		if ((await this.processorRepository.searchByNumberModel(numberModel)) !== null) {
			throw new ProcessorAlreadyExistError(numberModel)
		}
	}
}
