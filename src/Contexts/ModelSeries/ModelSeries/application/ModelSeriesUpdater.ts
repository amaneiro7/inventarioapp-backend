import { ModelSeriesDoesNotExistError } from '../domain/errors/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/valueObject/ModelSeriesId'
import { ModelFactory } from '../domain/entity/ModelFactory'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'
import { type InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/repository/MemoryRamTypeRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/repository/CategoryRepository'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type ModelSeriesDto, type ModelSeriesParams } from '../domain/dto/ModelSeries.dto'
import { type ProcessorRepository } from '../../../Features/Processor/domain/repository/ProcessorRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @description Use case for updating an existing ModelSeries entity.
 */
export class ModelSeriesUpdater {
	private readonly modelSeriesRepository: ModelSeriesRepository
	private readonly inputTypeRepository: InputTypeRepository
	private readonly memoryRamTypeRepository: MemoryRamTypeRepository
	private readonly categoryRepository: CategoryRepository
	private readonly brandRepository: BrandRepository
	private readonly processorRepository: ProcessorRepository
	private readonly eventBus: EventBus

	constructor(dependencies: {
		modelSeriesRepository: ModelSeriesRepository
		inputTypeRepository: InputTypeRepository
		memoryRamTypeRepository: MemoryRamTypeRepository
		categoryRepository: CategoryRepository
		brandRepository: BrandRepository
		processorRepository: ProcessorRepository
		eventBus: EventBus
	}) {
		this.modelSeriesRepository = dependencies.modelSeriesRepository
		this.inputTypeRepository = dependencies.inputTypeRepository
		this.memoryRamTypeRepository = dependencies.memoryRamTypeRepository
		this.categoryRepository = dependencies.categoryRepository
		this.brandRepository = dependencies.brandRepository
		this.processorRepository = dependencies.processorRepository
		this.eventBus = dependencies.eventBus
	}

	async run({ id, params }: { id: string; params: Partial<ModelSeriesParams> }): Promise<void> {
		const modelSeriesId = new ModelSeriesId(id).value
		const modelSeries = await this.modelSeriesRepository.findById(modelSeriesId)

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(id)
		}

		const modelEntity = await ModelFactory.fromPrimitives(modelSeries as ModelSeriesDto)

		const changes = await modelEntity.update(params, {
			modelSeriesRepository: this.modelSeriesRepository,
			inputTypeRepository: this.inputTypeRepository,
			memoryRamTypeRepository: this.memoryRamTypeRepository,
			categoryRepository: this.categoryRepository,
			brandRepository: this.brandRepository,
			processorRepository: this.processorRepository
		})
		if (changes.length > 0) {
			modelEntity.registerUpdateEvent(changes)
			await this.modelSeriesRepository.save(modelEntity.toPrimitives())
			await this.eventBus.publish(modelEntity.pullDomainEvents())
		}
	}
}
