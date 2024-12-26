import { type Repository } from '../../../Shared/domain/Repository'
import { ComputerMemoryRamType } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerMemoryRamType'
import { ComputerModels, type ComputerModelsPrimitives } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerModels'
import { LaptopsModels, type LaptopsModelsPrimitives } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { KeyboardModels, KeyboardModelsPrimitives } from '../../ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { ModelKeyboardInputType } from '../../ModelCharacteristics/Keyboards/domain/ModelKeyboardInputType'
import { MonitorModels, type MonitorModelsPrimitives } from '../../ModelCharacteristics/Monitors/domain/MonitorModels'
import { ModelMouseInputType } from '../../ModelCharacteristics/Mouses/domain/ModelMouseInputType'
import { MouseModels, MouseModelsPrimitives } from '../../ModelCharacteristics/Mouses/domain/MouseModels'
import { ModelPrinters, type ModelPrintersPrimitives } from '../../ModelCharacteristics/Printers/domain/ModelPrinters'
import { ModelSeries, type ModelSeriesPrimitives } from '../domain/ModelSeries'
import { ModelSeriesBrand } from '../domain/ModelSeriesBrand'
import { ModelSeriesCategory } from '../domain/ModelSeriesCategory'
import { ModelSeriesName } from '../domain/ModelSeriesName'

// Define the model parameters interface
export interface ModelParams extends Omit<ModelSeriesPrimitives, 'id'> { }

// Create the ModelSeriesCreator class
export class ModelSeriesCreator {
  constructor(private readonly repository: Repository) { }

  // Define the run method to create model series
  async run({ name, categoryId, brandId, generic, ...otherParams }: ModelParams): Promise<void> {
    let modelSeries

    // Create the model series based on the category
    if (ComputerModels.isComputerCategory({ categoryId })) { // Check if the category is a computer
      // If it is a computer category, extract computer-specific parameters
      const computerParams = otherParams as ComputerModelsPrimitives
      await ComputerMemoryRamType.ensureInputTypeExist({ repository: this.repository.memoryRamType, memoryRamTypeId: computerParams.memoryRamTypeId })
      // Create a computer model series with the extracted parameters, name, category ID, and brand ID
      modelSeries = ComputerModels.create({ ...computerParams, name, categoryId, brandId, generic })
    } else if (LaptopsModels.isLaptopCategory({ categoryId })) { // Check if the category is a laptop
      // If it is a laptop category, extract laptop-specific parameters
      const laptopParams = otherParams as LaptopsModelsPrimitives
      await ComputerMemoryRamType.ensureInputTypeExist({ repository: this.repository.memoryRamType, memoryRamTypeId: laptopParams.memoryRamTypeId })
      // Create a laptop model series with the extracted parameters, name, category ID, and brand ID
      modelSeries = LaptopsModels.create({ ...laptopParams, name, categoryId, brandId, generic })
    } else if (MonitorModels.isMonitorCategory({ categoryId })) { // Check if the category is a monitor
      // If it is a monitor category, extract monitor-specific parameters
      const monitorParams = otherParams as MonitorModelsPrimitives
      // Create a monitor model series with the extracted parameters, name, category ID, and brand ID
      modelSeries = MonitorModels.create({ ...monitorParams, name, categoryId, brandId, generic })
    } else if (ModelPrinters.isPrinterCategory({ categoryId })) { // Check if the category is a printer
      // If it is a printer category, extract printer-specific parameters
      const printerParams = otherParams as ModelPrintersPrimitives
      // Create a printer model series with the extracted parameters, name, category ID, and brand ID
      modelSeries = ModelPrinters.create({ ...printerParams, name, categoryId, brandId, generic })
    } else if (KeyboardModels.isKeyboardCategory({ categoryId })) {
      // If it is a keyboard category, extract keyboard-specific parameters
      const keyboardParams = otherParams as KeyboardModelsPrimitives
      await ModelKeyboardInputType.ensureInputTypeExist({ repository: this.repository.inputType, inputTypeId: keyboardParams.inputTypeId })
      // Create a keyboard model series with the extracted parameters, name, category ID, and brand ID
      modelSeries = KeyboardModels.create({ ...keyboardParams, name, categoryId, brandId, generic })
    } else if (MouseModels.isMouseCategory({ categoryId })) {
      // If it is a Mouse category, extract Mouse-specific parameters
      const mouseParams = otherParams as MouseModelsPrimitives
      await ModelMouseInputType.ensureInputTypeExist({ repository: this.repository.inputType, inputTypeId: mouseParams.inputTypeId })
      // Create a Mouse model series with the extracted parameters, name, category ID, and brand ID
      modelSeries = MouseModels.create({ ...mouseParams, name, categoryId, brandId, generic })
    } else {
      // If the category does not match any specific type, create a general model series with the name, category ID, and brand ID
      modelSeries = ModelSeries.create({ name, categoryId, brandId, generic })
    }

    await ModelSeriesCategory.ensureCategoryExist({ repository: this.repository.category, categoryId })
    await ModelSeriesBrand.ensureBrandExist({ repository: this.repository.brand, brandId })
    await ModelSeriesName.ensureModelNameDoesNotExist({ repository: this.repository.modelSeries, name, brandId })
    // Save the model series
    await this.repository.modelSeries.save(modelSeries.toPrimitives())
  }
}

