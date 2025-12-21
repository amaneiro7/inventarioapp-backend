import { ModelFactory } from '../domain/entity/ModelFactory'
import { BrandDoesNotExistError } from '../../../Brand/domain/errors/BrandDoesNotExistError'
import { CategoryDoesNotExistError } from '../../../Category/Category/domain/CategoryDoesNotExistError'
import { ModelSeriesNameUniquenessChecker } from '../domain/ModelSeriesNameUniquenessChecker'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/CategoryRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { type ModelSeriesParams } from '../domain/dto/ModelSeries.dto'
import { type ProcessorRepository } from '../../../Features/Processor/Processor/domain/ProcessorRepository'
import { EventBus } from '../../../Shared/domain/event/EventBus'

interface Repository {
	modelSeriesRepository: ModelSeriesRepository
	inputTypeRepository: InputTypeRepository
	memoryRamTypeRepository: MemoryRamTypeRepository
	categoryRepository: CategoryRepository
	brandRepository: BrandRepository
	processorRepository: ProcessorRepository
	eventBus: EventBus
}

/**
 * @description Use case for creating a new ModelSeries entity, handling different model types.
 */
export class ModelSeriesCreator {
	private readonly modelSeriesRepository: ModelSeriesRepository
	private readonly inputTypeRepository: InputTypeRepository
	private readonly memoryRamTypeRepository: MemoryRamTypeRepository
	private readonly categoryRepository: CategoryRepository
	private readonly brandRepository: BrandRepository
	private readonly processorRepository: ProcessorRepository
	private readonly eventBus: EventBus

	constructor(repositories: Repository) {
		this.modelSeriesRepository = repositories.modelSeriesRepository
		this.inputTypeRepository = repositories.inputTypeRepository
		this.memoryRamTypeRepository = repositories.memoryRamTypeRepository
		this.categoryRepository = repositories.categoryRepository
		this.brandRepository = repositories.brandRepository
		this.processorRepository = repositories.processorRepository
		this.eventBus = repositories.eventBus
	}

	async run(params: ModelSeriesParams): Promise<void> {
		const { name, categoryId, brandId } = params

		await this.validateRelations({ categoryId, brandId, name })

		const modelFactory = new ModelFactory({
			modelSeriesRepository: this.modelSeriesRepository,
			inputTypeRepository: this.inputTypeRepository,
			memoryRamTypeRepository: this.memoryRamTypeRepository,
			categoryRepository: this.categoryRepository,
			brandRepository: this.brandRepository,
			processorRepository: this.processorRepository
		})

		const modelSeries = await modelFactory.create(params)

		await this.modelSeriesRepository.save(modelSeries.toPrimitives())
		await this.eventBus.publish(modelSeries.pullDomainEvents())
	}

	private async validateRelations({
		categoryId,
		brandId,
		name
	}: {
		categoryId: string
		brandId: string
		name: string
	}): Promise<void> {
		const uniquenessChecker = new ModelSeriesNameUniquenessChecker({
			modelSeriesRepository: this.modelSeriesRepository
		})
		await Promise.all([
			this.ensureCategoryExists(categoryId),
			this.ensureBrandExists(brandId),
			await uniquenessChecker.ensureIsUnique(name, brandId, undefined)
		])
	}

	private async ensureBrandExists(brandId: string): Promise<void> {
		const existingBrand = await this.brandRepository.findById(brandId)
		if (!existingBrand) {
			throw new BrandDoesNotExistError(brandId)
		}
	}
	private async ensureCategoryExists(categoryId: string): Promise<void> {
		const existingCategory = await this.categoryRepository.findById(categoryId)
		if (!existingCategory) {
			throw new CategoryDoesNotExistError(categoryId)
		}
	}
}
