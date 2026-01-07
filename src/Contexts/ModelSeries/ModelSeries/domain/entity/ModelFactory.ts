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

export class ModelFactory {
	private readonly memoryRamTypeExistenceChecker: MemoryRamTypeExistenceChecker
	private readonly processorExistenceChecker: ProcessorExistenceChecker
	private readonly inputTypeExistenceChecker: InputTypeExistenceChecker
	constructor(dependencies: ModelDependencies) {
		this.memoryRamTypeExistenceChecker = new MemoryRamTypeExistenceChecker(dependencies.memoryRamTypeRepository)
		this.processorExistenceChecker = new ProcessorExistenceChecker(dependencies.processorRepository)
		this.inputTypeExistenceChecker = new InputTypeExistenceChecker(dependencies.inputTypeRepository)
	}

	static async fromPrimitives(primitives: ModelSeriesDto): Promise<ModelSeries> {
		if (primitives.modelComputer) {
			return ComputerModels.fromPrimitives(primitives)
		}
		if (primitives.modelLaptop) {
			return LaptopsModels.fromPrimitives(primitives)
		}
		if (primitives.modelMonitor) {
			return MonitorModels.fromPrimitives(primitives)
		}
		if (primitives.modelPrinter) {
			return ModelPrinters.fromPrimitives(primitives)
		}
		if (primitives.modelKeyboard) {
			return KeyboardModels.fromPrimitives(primitives)
		}
		if (primitives.modelMouse) {
			return MouseModels.fromPrimitives(primitives)
		}

		return ModelSeries.fromPrimitives(primitives)
	}

	async create(params: ModelSeriesParams): Promise<ModelSeries> {
		const { categoryId } = params

		if (ComputerModels.isComputerCategory({ categoryId })) {
			return this.createComputer(params as ComputerModelsParams)
		}
		if (LaptopsModels.isLaptopCategory({ categoryId })) {
			return this.createLaptop(params as LaptopModelsParams)
		}
		if (MonitorModels.isMonitorCategory({ categoryId })) {
			return MonitorModels.create(params as MonitorModelsParams)
		}
		if (ModelPrinters.isPrinterCategory({ categoryId })) {
			return ModelPrinters.create(params as PrinteModelsParams)
		}
		if (KeyboardModels.isKeyboardCategory({ categoryId })) {
			return this.createKeyboard(params as KeyboardModelsParams)
		}
		if (MouseModels.isMouseCategory({ categoryId })) {
			return this.createMouse(params as MouseModelsParams)
		}

		return ModelSeries.create(params)
	}

	private async createComputer(params: ComputerModelsParams): Promise<ComputerModels> {
		await Promise.all([
			this.memoryRamTypeExistenceChecker.ensureExist(params.memoryRamTypeId),
			this.processorExistenceChecker.ensureExist(params.processors)
		])
		return ComputerModels.create(params)
	}

	private async createLaptop(params: LaptopModelsParams): Promise<LaptopsModels> {
		await Promise.all([
			this.memoryRamTypeExistenceChecker.ensureExist(params.memoryRamTypeId),
			this.processorExistenceChecker.ensureExist(params.processors)
		])
		return LaptopsModels.create(params)
	}

	private async createKeyboard(params: KeyboardModelsParams): Promise<KeyboardModels> {
		await this.inputTypeExistenceChecker.ensureExist(params.inputTypeId)
		return KeyboardModels.create(params)
	}

	private async createMouse(params: MouseModelsParams): Promise<MouseModels> {
		await this.inputTypeExistenceChecker.ensureExist(params.inputTypeId)
		return MouseModels.create(params)
	}
}
