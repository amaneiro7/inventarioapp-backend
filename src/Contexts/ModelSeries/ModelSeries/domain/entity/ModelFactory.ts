import { ComputerModels } from './ComputerModels'
import { KeyboardModels } from './KeyboardModels'
import { LaptopsModels } from './LaptopsModels'
import { ModelPrinters } from './ModelPrinters'
import { ModelSeries } from './ModelSeries'
import { MonitorModels } from './MonitorModels'
import { MouseModels } from './MouseModels'
import { MemoryRamTypeExistenceChecker } from '../../../../Features/MemoryRam/MemoryRamType/domain/service/MemoryRamTypeExistanceChecker'
import { InputTypeExistenceChecker } from '../../../InputType/domain/service/InputTypeExistanceChecker'
import { ProcessorExistenceChecker } from '../../../../Features/Processor/domain/service/ProcessorExistanceChecker'
import { type ComputerModelsParams } from '../dto/ComputerModels.dto'
import { type KeyboardModelsParams } from '../dto/KeyboardModels.dto'
import { type LaptopModelsParams } from '../dto/LaptopsModels.dto'
import { type PrinteModelsParams } from '../dto/ModelPrinters.dto'
import { type ModelSeriesDto, type ModelSeriesParams } from '../dto/ModelSeries.dto'
import { type MonitorModelsParams } from '../dto/MonitoModels.dto'
import { type MouseModelsParams } from '../dto/MouseModels.dto'
import { type ModelDependencies } from './ModelDependencies'
import { CategoryExistenceChecker } from '../../../../Category/Category/domain/service/CategoryExistenceChecker'
import { BrandExistenceChecker } from '../../../../Brand/domain/service/BrandExistanceChecker'
import { ModelSeriesNameUniquenessChecker } from '../service/ModelSeriesNameUniquenessChecker'

export class ModelFactory {
	private readonly uniquenessChecker: ModelSeriesNameUniquenessChecker
	private readonly categoryExistenceChecker: CategoryExistenceChecker
	private readonly brandExistenceChecker: BrandExistenceChecker
	private readonly memoryRamTypeExistenceChecker: MemoryRamTypeExistenceChecker
	private readonly processorExistenceChecker: ProcessorExistenceChecker
	private readonly inputTypeExistenceChecker: InputTypeExistenceChecker
	constructor({
		inputTypeRepository,
		brandRepository,
		categoryRepository,
		memoryRamTypeRepository,
		modelSeriesRepository,
		processorRepository
	}: ModelDependencies) {
		this.categoryExistenceChecker = new CategoryExistenceChecker(categoryRepository)
		this.brandExistenceChecker = new BrandExistenceChecker(brandRepository)
		this.uniquenessChecker = new ModelSeriesNameUniquenessChecker({ modelSeriesRepository })
		this.memoryRamTypeExistenceChecker = new MemoryRamTypeExistenceChecker(memoryRamTypeRepository)
		this.processorExistenceChecker = new ProcessorExistenceChecker(processorRepository)
		this.inputTypeExistenceChecker = new InputTypeExistenceChecker(inputTypeRepository)
	}

	static async fromPrimitives(primitives: ModelSeriesDto): Promise<ModelSeries> {
		const { categoryId } = primitives
		if (ComputerModels.isComputerCategory({ categoryId })) {
			return ComputerModels.fromPrimitives(primitives)
		}
		if (LaptopsModels.isLaptopCategory({ categoryId })) {
			return LaptopsModels.fromPrimitives(primitives)
		}
		if (MonitorModels.isMonitorCategory({ categoryId })) {
			return MonitorModels.fromPrimitives(primitives)
		}
		if (ModelPrinters.isPrinterCategory({ categoryId })) {
			return ModelPrinters.fromPrimitives(primitives)
		}
		if (KeyboardModels.isKeyboardCategory({ categoryId })) {
			return KeyboardModels.fromPrimitives(primitives)
		}
		if (MouseModels.isMouseCategory({ categoryId })) {
			return MouseModels.fromPrimitives(primitives)
		}

		return ModelSeries.fromPrimitives(primitives)
	}

	async create(params: ModelSeriesParams): Promise<ModelSeries> {
		const { categoryId, brandId, name } = params
		const validations: Promise<void>[] = []

		validations.push(this.categoryExistenceChecker.ensureExist(categoryId))
		validations.push(this.brandExistenceChecker.ensureExist(brandId))
		validations.push(this.uniquenessChecker.ensureIsUnique(name, brandId))

		if (ComputerModels.isComputerCategory({ categoryId })) {
			return this.createComputer(params as ComputerModelsParams, validations)
		}
		if (LaptopsModels.isLaptopCategory({ categoryId })) {
			return this.createLaptop(params as LaptopModelsParams, validations)
		}
		if (MonitorModels.isMonitorCategory({ categoryId })) {
			return MonitorModels.create(params as MonitorModelsParams)
		}
		if (ModelPrinters.isPrinterCategory({ categoryId })) {
			return ModelPrinters.create(params as PrinteModelsParams)
		}
		if (KeyboardModels.isKeyboardCategory({ categoryId })) {
			return this.createKeyboard(params as KeyboardModelsParams, validations)
		}
		if (MouseModels.isMouseCategory({ categoryId })) {
			return this.createMouse(params as MouseModelsParams, validations)
		}
		await Promise.all(validations)
		return ModelSeries.create(params)
	}

	private createComputer(params: ComputerModelsParams, validations: Promise<void>[]): ComputerModels {
		validations.push(this.memoryRamTypeExistenceChecker.ensureExist(params.memoryRamTypeId))
		validations.push(this.processorExistenceChecker.ensureExist(params.processors))

		return ComputerModels.create(params)
	}

	private createLaptop(params: LaptopModelsParams, validations: Promise<void>[]): LaptopsModels {
		validations.push(this.memoryRamTypeExistenceChecker.ensureExist(params.memoryRamTypeId))
		validations.push(this.processorExistenceChecker.ensureExist(params.processors))

		return LaptopsModels.create(params)
	}

	private createKeyboard(params: KeyboardModelsParams, validations: Promise<void>[]): KeyboardModels {
		validations.push(this.inputTypeExistenceChecker.ensureExist(params.inputTypeId))
		return KeyboardModels.create(params)
	}

	private createMouse(params: MouseModelsParams, validations: Promise<void>[]): MouseModels {
		validations.push(this.inputTypeExistenceChecker.ensureExist(params.inputTypeId))
		return MouseModels.create(params)
	}
}
