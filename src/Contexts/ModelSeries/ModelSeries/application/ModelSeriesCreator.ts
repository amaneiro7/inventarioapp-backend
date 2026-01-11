import { ModelFactory } from '../domain/entity/ModelFactory'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/repository/CategoryRepository'
import { type InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { type ModelSeriesParams } from '../domain/dto/ModelSeries.dto'
import { type ProcessorRepository } from '../../../Features/Processor/domain/repository/ProcessorRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/repository/MemoryRamTypeRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @description Use case for creating a new ModelSeries entity, handling different model types.
 */
export class ModelSeriesCreator {
	private readonly modelSeriesRepository: ModelSeriesRepository
	private readonly modelFactory: ModelFactory
	private readonly eventBus: EventBus

	constructor({
		eventBus,
		inputTypeRepository,
		brandRepository,
		categoryRepository,
		memoryRamTypeRepository,
		modelSeriesRepository,
		processorRepository
	}: {
		modelSeriesRepository: ModelSeriesRepository
		inputTypeRepository: InputTypeRepository
		memoryRamTypeRepository: MemoryRamTypeRepository
		categoryRepository: CategoryRepository
		brandRepository: BrandRepository
		processorRepository: ProcessorRepository
		eventBus: EventBus
	}) {
		this.modelSeriesRepository = modelSeriesRepository
		this.eventBus = eventBus
		this.modelFactory = new ModelFactory({
			brandRepository,
			categoryRepository,
			modelSeriesRepository,
			inputTypeRepository,
			memoryRamTypeRepository,
			processorRepository
		})
	}

	async run(params: ModelSeriesParams): Promise<void> {
		const modelSeries = await this.modelFactory.create(params)

		await this.modelSeriesRepository.save(modelSeries.toPrimitives())
		await this.eventBus.publish(modelSeries.pullDomainEvents())
	}
}
