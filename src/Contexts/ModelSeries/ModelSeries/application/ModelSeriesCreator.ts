import { ModelFactory } from '../domain/entity/ModelFactory'
import { ModelSeriesNameUniquenessChecker } from '../domain/service/ModelSeriesNameUniquenessChecker'
import { CategoryExistenceChecker } from '../../../Category/Category/domain/service/CategoryExistenceChecker'
import { BrandExistenceChecker } from '../../../Brand/domain/service/BrandExistanceChecker'
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
	private readonly uniquenessChecker: ModelSeriesNameUniquenessChecker
	private readonly categoryExistenceChecker: CategoryExistenceChecker
	private readonly brandExistenceChecker: BrandExistenceChecker
	private readonly modelFactory: ModelFactory
	private readonly eventBus: EventBus

	constructor({
		brandRepository,
		categoryRepository,
		eventBus,
		inputTypeRepository,
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
		this.categoryExistenceChecker = new CategoryExistenceChecker(categoryRepository)
		this.brandExistenceChecker = new BrandExistenceChecker(brandRepository)
		this.uniquenessChecker = new ModelSeriesNameUniquenessChecker({ modelSeriesRepository })
		this.modelFactory = new ModelFactory({
			modelSeriesRepository,
			inputTypeRepository,
			memoryRamTypeRepository,
			processorRepository
		})
	}

	async run(params: ModelSeriesParams): Promise<void> {
		const { name, categoryId, brandId } = params

		await Promise.all([
			this.categoryExistenceChecker.ensureExist(categoryId),
			this.brandExistenceChecker.ensureExist(brandId),
			this.uniquenessChecker.ensureIsUnique(name, brandId)
		])

		const modelSeries = await this.modelFactory.create(params)

		await this.modelSeriesRepository.save(modelSeries.toPrimitives())
		await this.eventBus.publish(modelSeries.pullDomainEvents())
	}
}
