import { ModelDependencies } from '../domain/entity/ModelSeries'
import { KeyboardModels } from '../../ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { ModelPrinters } from '../../ModelCharacteristics/Printers/domain/ModelPrinters'
import { MonitorModels } from '../../ModelCharacteristics/Monitors/domain/MonitorModels'
import { LaptopsModels } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { MouseModels } from '../../ModelCharacteristics/Mouses/domain/MouseModels'
import { ModelSeriesDoesNotExistError } from '../domain/errors/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/valueObject/ModelSeriesId'
import { ModelSeriesName } from '../domain/valueObject/ModelSeriesName'
import { ModelSeries } from '../domain/entity/ModelSeries'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'
import { type InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/CategoryRepository'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type ModelSeriesDto, type ModelSeriesParams } from '../domain/entity/ModelSeries.dto'
import { type ProcessorRepository } from '../../../Features/Processor/Processor/domain/ProcessorRepository'

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
	private readonly dependencies: ModelDependencies

	constructor(dependencies: {
		modelSeriesRepository: ModelSeriesRepository
		inputTypeRepository: InputTypeRepository
		memoryRamTypeRepository: MemoryRamTypeRepository
		categoryRepository: CategoryRepository
		brandRepository: BrandRepository
		processorRepository: ProcessorRepository
	}) {
		this.modelSeriesRepository = dependencies.modelSeriesRepository
		this.inputTypeRepository = dependencies.inputTypeRepository
		this.memoryRamTypeRepository = dependencies.memoryRamTypeRepository
		this.categoryRepository = dependencies.categoryRepository
		this.brandRepository = dependencies.brandRepository
		this.processorRepository = dependencies.processorRepository
		this.dependencies = dependencies
	}

	async run({ id, params }: { id: string; params: Partial<ModelSeriesParams> }): Promise<void> {
		const modelSeriesId = new ModelSeriesId(id).value
		const modelSeries = await this.modelSeriesRepository.findById(modelSeriesId)

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(id)
		}

		const modelEntity = this.createModelEntity(modelSeries)

		await modelEntity.update(params, this.dependencies)

		await this.modelSeriesRepository.save(modelEntity.toPrimitives())
	}

	private createModelEntity(modelSeries: ModelSeriesDto): ModelSeries {
		const { categoryId } = modelSeries
		if (KeyboardModels.isKeyboardCategory({ categoryId })) {
			return KeyboardModels.fromPrimitives(modelSeries)
		}
		if (MouseModels.isMouseCategory({ categoryId })) {
			return MouseModels.fromPrimitives(modelSeries)
		}
		if (ModelPrinters.isPrinterCategory({ categoryId })) {
			return ModelPrinters.fromPrimitives(modelSeries)
		}
		if (MonitorModels.isMonitorCategory({ categoryId })) {
			return MonitorModels.fromPrimitives(modelSeries)
		}
		if (LaptopsModels.isLaptopCategory({ categoryId })) {
			return LaptopsModels.fromPrimitives(modelSeries)
		}
		if (ComputerModels.isComputerCategory({ categoryId })) {
			return ComputerModels.fromPrimitives(modelSeries)
		}
		return ModelSeries.fromPrimitives(modelSeries)
	}
}
