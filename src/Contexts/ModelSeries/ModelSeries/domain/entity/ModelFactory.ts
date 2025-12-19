import { ModelDependencies } from './ModelSeries'

export class ModelFactory {
	constructor(private readonly dependencies: ModelDependencies) {}

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
			ComputerMemoryRamType.ensureInputTypeExist(
				this.dependencies.memoryRamTypeRepository,
				params.memoryRamTypeId
			),
			this.ensureProcessorsExist(params.processors)
		])
		return ComputerModels.create(params)
	}

	private async createLaptop(params: LaptopModelsParams): Promise<LaptopsModels> {
		await Promise.all([
			ComputerMemoryRamType.ensureInputTypeExist(
				this.dependencies.memoryRamTypeRepository,
				params.memoryRamTypeId
			),
			this.ensureProcessorsExist(params.processors)
		])
		return LaptopsModels.create(params)
	}

	private async createKeyboard(params: KeyboardModelsParams): Promise<KeyboardModels> {
		await ModelKeyboardInputType.ensureInputTypeExist(this.dependencies.inputTypeRepository, params.inputTypeId)
		return KeyboardModels.create(params)
	}

	private async createMouse(params: MouseModelsParams): Promise<MouseModels> {
		await ModelMouseInputType.ensureInputTypeExist(this.dependencies.inputTypeRepository, params.inputTypeId)
		return MouseModels.create(params)
	}

	private async ensureProcessorsExist(processorIds: Primitives<ProcessorId>[]): Promise<void> {
		if (!processorIds || processorIds.length === 0) return
		await Promise.all(
			processorIds.map(async id => {
				const exists = await this.dependencies.processorRepository.findById(id)
				if (!exists) throw new ProcessorDoesNotExistError(id)
			})
		)
	}
}
