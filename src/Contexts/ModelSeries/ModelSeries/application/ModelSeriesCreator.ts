import { ComputerMemoryRamType } from '../domain/valueObject/ComputerMemoryRamType'
import { ComputerModels } from '../domain/entity/ComputerModels'
import { LaptopsModels } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { KeyboardModels } from '../../ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { ModelKeyboardInputType } from '../../ModelCharacteristics/Keyboards/domain/ModelKeyboardInputType'
import { MonitorModels } from '../../ModelCharacteristics/Monitors/domain/MonitorModels'
import { ModelMouseInputType } from '../../ModelCharacteristics/Mouses/domain/ModelMouseInputType'
import { MouseModels } from '../../ModelCharacteristics/Mouses/domain/MouseModels'
import { ModelPrinters } from '../../ModelCharacteristics/Printers/domain/ModelPrinters'
import { ModelSeries } from '../domain/entity/ModelSeries'
import { ModelSeriesBrand } from '../domain/valueObject/ModelSeriesBrand'
import { ModelSeriesCategory } from '../domain/valueObject/ModelSeriesCategory'
import { ModelSeriesName } from '../domain/valueObject/ModelSeriesName'
import { ProcessorDoesNotExistError } from '../../../Features/Processor/Processor/domain/ProcessorDoesNotExistError'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/CategoryRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { type ModelSeriesParams } from '../domain/entity/ModelSeries.dto'
import { type ComputerModelsParams } from '../domain/entity/ComputerModels.dto'
import { type LaptopModelsParams } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels.dto'
import { type MonitorModelsParams } from '../../ModelCharacteristics/Monitors/domain/MonitoModels.dto'
import { type PrinteModelsParams } from '../../ModelCharacteristics/Printers/domain/ModelPrinters.dto'
import { type MouseModelsParams } from '../../ModelCharacteristics/Mouses/domain/MouseModels.dto'
import { type KeyboardModelsParams } from '../../ModelCharacteristics/Keyboards/domain/KeyboardModels.dto'
import { type ProcessorId } from '../../../Features/Processor/Processor/domain/ProcessorId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ProcessorRepository } from '../../../Features/Processor/Processor/domain/ProcessorRepository'

interface Repository {
	modelSeriesRepository: ModelSeriesRepository
	inputTypeRepository: InputTypeRepository
	memoryRamTypeRepository: MemoryRamTypeRepository
	categoryRepository: CategoryRepository
	brandRepository: BrandRepository
	processorRepository: ProcessorRepository
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

	constructor(repositories: Repository) {
		this.modelSeriesRepository = repositories.modelSeriesRepository
		this.inputTypeRepository = repositories.inputTypeRepository
		this.memoryRamTypeRepository = repositories.memoryRamTypeRepository
		this.categoryRepository = repositories.categoryRepository
		this.brandRepository = repositories.brandRepository
		this.processorRepository = repositories.processorRepository
	}

	async run(params: ModelSeriesParams): Promise<void> {
		const { name, categoryId, brandId } = params

		await this.validateRelations({ categoryId, brandId, name })

		const modelSeries = await this.createModelSeries({
			params,
			repositories: {
				modelSeriesRepository: this.modelSeriesRepository,
				inputTypeRepository: this.inputTypeRepository,
				memoryRamTypeRepository: this.memoryRamTypeRepository,
				categoryRepository: this.categoryRepository,
				brandRepository: this.brandRepository,
				processorRepository: this.processorRepository
			}
		})

		await this.modelSeriesRepository.save(modelSeries.toPrimitives())
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
		await Promise.all([
			ModelSeriesCategory.ensureCategoryExist({ repository: this.categoryRepository, categoryId }),
			ModelSeriesBrand.ensureBrandExist({ repository: this.brandRepository, brandId }),
			ModelSeriesName.ensureModelNameDoesNotExist({ repository: this.modelSeriesRepository, name, brandId })
		])
	}

	private async createModelSeries({
		params,
		repositories
	}: {
		params: ModelSeriesParams
		repositories: Repository
	}): Promise<ModelSeries> {
		const { categoryId } = params

		if (ComputerModels.isComputerCategory({ categoryId })) {
			const computerParams = params as ComputerModelsParams
			await Promise.all([
				ComputerMemoryRamType.ensureInputTypeExist(
					repositories.memoryRamTypeRepository,
					computerParams.memoryRamTypeId
				),
				this.ensureProcessorsExist(params.processors)
			])
			return ComputerModels.create(computerParams)
		}
		if (LaptopsModels.isLaptopCategory({ categoryId })) {
			const computerParams = params as LaptopModelsParams
			await Promise.all([
				ComputerMemoryRamType.ensureInputTypeExist(
					repositories.memoryRamTypeRepository,
					computerParams.memoryRamTypeId
				),
				this.ensureProcessorsExist(params.processors)
			])
			return LaptopsModels.create(computerParams)
		}
		if (MonitorModels.isMonitorCategory({ categoryId })) {
			return MonitorModels.create(params as MonitorModelsParams)
		}
		if (ModelPrinters.isPrinterCategory({ categoryId })) {
			return ModelPrinters.create(params as PrinteModelsParams)
		}
		if (KeyboardModels.isKeyboardCategory({ categoryId })) {
			const keyboardParams = params as KeyboardModelsParams
			await ModelKeyboardInputType.ensureInputTypeExist(
				repositories.inputTypeRepository,
				keyboardParams.inputTypeId
			)
			return KeyboardModels.create(keyboardParams)
		}
		if (MouseModels.isMouseCategory({ categoryId })) {
			const mouseParams = params as MouseModelsParams
			await ModelMouseInputType.ensureInputTypeExist(repositories.inputTypeRepository, mouseParams.inputTypeId)
			return MouseModels.create(mouseParams)
		}

		return ModelSeries.create(params)
	}

	/**
	 * @private
	 * @description Ensures that all provided processor IDs exist in the database.
	 * It performs the checks in parallel to optimize performance.
	 * @param {Primitives<ProcessorId>[]} processorIds An array of processor IDs to validate.
	 * @returns {Promise<void>} A promise that resolves if all categories exist.
	 * @throws {ProcessorDoesNotExistError} If any processor ID is not found.
	 */
	private async ensureProcessorsExist(processorIds: Primitives<ProcessorId>[]): Promise<void> {
		if (processorIds.length === 0) {
			return
		}
		// Create an array of promises to check for the existence of each processor
		const processorExistenceChecks = processorIds.map(async processorId => {
			const processor = await this.processorRepository.findById(processorId)
			if (processor === null) {
				throw new ProcessorDoesNotExistError(processorId)
			}
		})
		// Await all checks to complete
		await Promise.all(processorExistenceChecks)
	}
}
