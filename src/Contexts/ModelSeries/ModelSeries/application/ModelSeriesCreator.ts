import { ComputerMemoryRamType } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerMemoryRamType'
import { ComputerModels } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerModels'
import { LaptopsModels } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { KeyboardModels } from '../../ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { ModelKeyboardInputType } from '../../ModelCharacteristics/Keyboards/domain/ModelKeyboardInputType'
import { MonitorModels } from '../../ModelCharacteristics/Monitors/domain/MonitorModels'
import { ModelMouseInputType } from '../../ModelCharacteristics/Mouses/domain/ModelMouseInputType'
import { MouseModels } from '../../ModelCharacteristics/Mouses/domain/MouseModels'
import { ModelPrinters } from '../../ModelCharacteristics/Printers/domain/ModelPrinters'
import { ModelSeries } from '../domain/ModelSeries'
import { ModelSeriesBrand } from '../domain/ModelSeriesBrand'
import { ModelSeriesCategory } from '../domain/ModelSeriesCategory'
import { ModelSeriesName } from '../domain/ModelSeriesName'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'
import { type BrandRepository } from '../../../Brand/domain/BrandRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/CategoryRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type InputTypeRepository } from '../../InputType/domain/InputTypeRepository'
import { type ModelSeriesParams } from '../domain/ModelSeries.dto'
import { type ComputerModelsParams } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerModels.dto'
import { type LaptopModelsParams } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels.dto'
import { type MonitorModelsParams } from '../../ModelCharacteristics/Monitors/domain/MonitoModels.dto'
import { type PrinteModelsParams } from '../../ModelCharacteristics/Printers/domain/ModelPrinters.dto'
import { type MouseModelsParams } from '../../ModelCharacteristics/Mouses/domain/MouseModels.dto'
import { type KeyboardModelsParams } from '../../ModelCharacteristics/Keyboards/domain/KeyboardModels.dto'

// Create the ModelSeriesCreator class
export class ModelSeriesCreator {
	constructor(
		private readonly modelSeriesRepository: ModelSeriesRepository,
		private readonly categoryRepository: CategoryRepository,
		private readonly brandRepository: BrandRepository,
		private readonly memoryRamTypeRepository: MemoryRamTypeRepository,
		private readonly inputTypeRepository: InputTypeRepository
	) {}

	// Define the run method to create model series
	async run({ name, categoryId, brandId, generic, ...otherParams }: ModelSeriesParams): Promise<void> {
		let modelSeries

		// Create the model series based on the category
		if (ComputerModels.isComputerCategory({ categoryId })) {
			// Check if the category is a computer
			// If it is a computer category, extract computer-specific parameters
			const computerParams = otherParams as ComputerModelsParams
			await ComputerMemoryRamType.ensureInputTypeExist({
				repository: this.memoryRamTypeRepository,
				memoryRamTypeId: computerParams.memoryRamTypeId
			})
			// Create a computer model series with the extracted parameters, name, category ID, and brand ID
			modelSeries = ComputerModels.create({
				...computerParams,
				name,
				categoryId,
				brandId,
				generic
			})
		} else if (LaptopsModels.isLaptopCategory({ categoryId })) {
			// Check if the category is a laptop
			// If it is a laptop category, extract laptop-specific parameters
			const laptopParams = otherParams as LaptopModelsParams
			await ComputerMemoryRamType.ensureInputTypeExist({
				repository: this.memoryRamTypeRepository,
				memoryRamTypeId: laptopParams.memoryRamTypeId
			})
			// Create a laptop model series with the extracted parameters, name, category ID, and brand ID
			modelSeries = LaptopsModels.create({
				...laptopParams,
				name,
				categoryId,
				brandId,
				generic
			})
		} else if (MonitorModels.isMonitorCategory({ categoryId })) {
			// Check if the category is a monitor
			// If it is a monitor category, extract monitor-specific parameters
			const monitorParams = otherParams as MonitorModelsParams
			// Create a monitor model series with the extracted parameters, name, category ID, and brand ID
			modelSeries = MonitorModels.create({
				...monitorParams,
				name,
				categoryId,
				brandId,
				generic
			})
		} else if (ModelPrinters.isPrinterCategory({ categoryId })) {
			// Check if the category is a printer
			// If it is a printer category, extract printer-specific parameters
			const printerParams = otherParams as PrinteModelsParams
			// Create a printer model series with the extracted parameters, name, category ID, and brand ID
			modelSeries = ModelPrinters.create({
				...printerParams,
				name,
				categoryId,
				brandId,
				generic
			})
		} else if (KeyboardModels.isKeyboardCategory({ categoryId })) {
			// If it is a keyboard category, extract keyboard-specific parameters
			const keyboardParams = otherParams as KeyboardModelsParams
			await ModelKeyboardInputType.ensureInputTypeExist({
				repository: this.inputTypeRepository,
				inputTypeId: keyboardParams.inputTypeId
			})
			// Create a keyboard model series with the extracted parameters, name, category ID, and brand ID
			modelSeries = KeyboardModels.create({
				...keyboardParams,
				name,
				categoryId,
				brandId,
				generic
			})
		} else if (MouseModels.isMouseCategory({ categoryId })) {
			// If it is a Mouse category, extract Mouse-specific parameters
			const mouseParams = otherParams as MouseModelsParams
			await ModelMouseInputType.ensureInputTypeExist({
				repository: this.inputTypeRepository,
				inputTypeId: mouseParams.inputTypeId
			})
			// Create a Mouse model series with the extracted parameters, name, category ID, and brand ID
			modelSeries = MouseModels.create({
				...mouseParams,
				name,
				categoryId,
				brandId,
				generic
			})
		} else {
			// If the category does not match any specific type, create a general model series with the name, category ID, and brand ID
			modelSeries = ModelSeries.create({
				name,
				categoryId,
				brandId,
				generic
			})
		}

		await ModelSeriesCategory.ensureCategoryExist({
			repository: this.categoryRepository,
			categoryId
		})
		await ModelSeriesBrand.ensureBrandExist({
			repository: this.brandRepository,
			brandId
		})
		await ModelSeriesName.ensureModelNameDoesNotExist({
			repository: this.modelSeriesRepository,
			name,
			brandId
		})
		// Save the model series
		await this.modelSeriesRepository.save(modelSeries.toPrimitives())
	}
}
