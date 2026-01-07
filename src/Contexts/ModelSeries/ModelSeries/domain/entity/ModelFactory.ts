import { ComputerModels } from './ComputerModels'
import { KeyboardModels } from './KeyboardModels'
import { LaptopsModels } from './LaptopsModels'
import { ModelPrinters } from './ModelPrinters'
import { ModelSeries } from './ModelSeries'
import { MonitorModels } from './MonitorModels'
import { MouseModels } from './MouseModels'

import { MemoryRamTypeDoesNotExistError } from '../../../../Features/MemoryRam/MemoryRamType/domain/errors/MemoryRamTypeDoesNotExistError'
import { InputTypeDoesNotExistError } from '../../../InputType/domain/errors/InputTypeDoesNotExistError'
import { ProcessorDoesNotExistError } from '../../../../Features/Processor/domain/errors/ProcessorDoesNotExistError'

import { type MemoryRamTypeId } from '../../../../Features/MemoryRam/MemoryRamType/domain/valueObject/MemoryRamTypeId'
import { type ProcessorId } from '../../../../Features/Processor/domain/valueObject/ProcessorId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeId } from '../../../InputType/domain/valueObject/InputTypeId'
import { type ComputerModelsParams } from '../dto/ComputerModels.dto'
import { type KeyboardModelsParams } from '../dto/KeyboardModels.dto'
import { type LaptopModelsParams } from '../dto/LaptopsModels.dto'
import { type PrinteModelsParams } from '../dto/ModelPrinters.dto'
import { type ModelSeriesDto, type ModelSeriesParams } from '../dto/ModelSeries.dto'
import { type MonitorModelsParams } from '../dto/MonitoModels.dto'
import { type MouseModelsParams } from '../dto/MouseModels.dto'
import { type ModelDependencies } from './ModelDependencies'

export class ModelFactory {
	constructor(private readonly dependencies: ModelDependencies) {}

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
			this.ensureMemoryRamTypeExist(params.memoryRamTypeId),
			this.ensureProcessorsExist(params.processors)
		])
		return ComputerModels.create(params)
	}

	private async createLaptop(params: LaptopModelsParams): Promise<LaptopsModels> {
		await Promise.all([
			this.ensureMemoryRamTypeExist(params.memoryRamTypeId),
			this.ensureProcessorsExist(params.processors)
		])
		return LaptopsModels.create(params)
	}

	private async createKeyboard(params: KeyboardModelsParams): Promise<KeyboardModels> {
		await this.ensureInputTypeExist(params.inputTypeId)
		return KeyboardModels.create(params)
	}

	private async createMouse(params: MouseModelsParams): Promise<MouseModels> {
		await this.ensureInputTypeExist(params.inputTypeId)
		return MouseModels.create(params)
	}

	private async ensureMemoryRamTypeExist(memoryRamTypeId: Primitives<MemoryRamTypeId>): Promise<void> {
		const isMemoryRamTypeExist = await this.dependencies.memoryRamTypeRepository.findById(memoryRamTypeId)
		if (!isMemoryRamTypeExist) {
			throw new MemoryRamTypeDoesNotExistError(memoryRamTypeId)
		}
	}
	private async ensureInputTypeExist(inputTypeId: Primitives<InputTypeId>): Promise<void> {
		const isInputTypeExist = await this.dependencies.inputTypeRepository.findById(inputTypeId)
		if (!isInputTypeExist) {
			throw new InputTypeDoesNotExistError()
		}
	}

	private async ensureProcessorsExist(processorIds: Primitives<ProcessorId>[]): Promise<void> {
		if (!processorIds || processorIds.length === 0) {
			return
		}
		const uniqueProcessors = [...new Set(processorIds)]
		const foundProcessors = await this.dependencies.processorRepository.findByIds(uniqueProcessors)

		if (foundProcessors.length !== uniqueProcessors.length) {
			// Identify which categories were not found to provide a more helpful error message.
			const foundIds = new Set(foundProcessors.map(c => c.id))
			const missingIds = uniqueProcessors.filter(id => !foundIds.has(id))
			throw new ProcessorDoesNotExistError(missingIds.join(', '))
		}
	}
}
