import { KeyboardModels } from '../../ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { ModelPrinters } from '../../ModelCharacteristics/Printers/domain/ModelPrinters'
import { MonitorModels } from '../../ModelCharacteristics/Monitors/domain/MonitorModels'
import { LaptopsModels } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { MouseModels } from '../../ModelCharacteristics/Mouses/domain/MouseModels'
import { ModelSeriesDoesNotExistError } from '../domain/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/ModelSeriesId'
import { ModelSeriesName } from '../domain/ModelSeriesName'
import { ModelSeries } from '../domain/ModelSeries'
import { ModelSeriesCategory } from '../domain/ModelSeriesCategory'
import { ModelSeriesBrand } from '../domain/ModelSeriesBrand'
import { ModelKeyboardInputType } from '../../ModelCharacteristics/Keyboards/domain/ModelKeyboardInputType'
import { HasFingerPrintReader } from '../../ModelCharacteristics/Keyboards/domain/HasFingerPrintReader'
import { CartridgeModel } from '../../ModelCharacteristics/Printers/domain/CartridgeModel'
import { MonitorHasDVI } from '../../ModelCharacteristics/Monitors/domain/MonitorHasDVI'
import { MonitorHasVGA } from '../../ModelCharacteristics/Monitors/domain/MonitorHasVGA'
import { MonitorHasHDMI } from '../../ModelCharacteristics/Monitors/domain/MonitorHasHDMI'
import { MonitorScreenSize } from '../../ModelCharacteristics/Monitors/domain/MonitorScreenSize'
import { HasVGA } from '../../ModelCharacteristics/Computers/Computer/domain/HasVGA'
import { HasDVI } from '../../ModelCharacteristics/Computers/Computer/domain/HasDVI'
import { HasHDMI } from '../../ModelCharacteristics/Computers/Computer/domain/HasHDMI'
import { HasBluetooth } from '../../ModelCharacteristics/Computers/Computer/domain/HasBluetooth'
import { HasWifiAdapter } from '../../ModelCharacteristics/Computers/Computer/domain/HasWifiAdapter'
import { BatteryModelName } from '../../ModelCharacteristics/Computers/Laptops/domain/BatteryModelName'
import { MemoryRamSlotQuantity } from '../../ModelCharacteristics/Computers/Computer/domain/MemoryRamSlotQuantity'
import { ComputerMemoryRamType } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerMemoryRamType'
import { ComputerModels } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerModels'
import { Generic } from '../domain/Generic'
import { ModelMouseInputType } from '../../ModelCharacteristics/Mouses/domain/ModelMouseInputType'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'
import { type InputTypeRepository } from '../../InputType/domain/InputTypeRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/CategoryRepository'
import { type BrandRepository } from '../../../Brand/domain/BrandRepository'
import { type ModelSeriesParams } from '../domain/ModelSeries.dto'
import { type KeyboardModelsParams } from '../../ModelCharacteristics/Keyboards/domain/KeyboardModels.dto'
import { type MouseModelsParams } from '../../ModelCharacteristics/Mouses/domain/MouseModels.dto'
import { type PrinteModelsParams } from '../../ModelCharacteristics/Printers/domain/ModelPrinters.dto'
import { type MonitorModelsParams } from '../../ModelCharacteristics/Monitors/domain/MonitoModels.dto'
import { type LaptopModelsParams } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels.dto'
import { type ComputerModelsParams } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerModels.dto'

export class ModelSeriesUpdater {
	constructor(
		private readonly modelSeriesRepository: ModelSeriesRepository,
		private readonly inputTypeRepository: InputTypeRepository,
		private readonly memoryRamTypeRepository: MemoryRamTypeRepository,
		private readonly categoryRepository: CategoryRepository,
		private readonly brandRepository: BrandRepository
	) {}

	async run({
		id,
		params
	}: {
		id: string
		params: Partial<ModelSeriesParams>
	}): Promise<void> {
		const modelSeriesId = new ModelSeriesId(id).value

		const modelSeries = await this.modelSeriesRepository.searchById(
			modelSeriesId
		)

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(id)
		}

		const { categoryId } = modelSeries

		let modelEntity
		// Actualizar la tabla de Teclado
		if (KeyboardModels.isKeyboardCategory({ categoryId })) {
			modelEntity = KeyboardModels.fromPrimitives(modelSeries)
			const keyboardParams = params as KeyboardModelsParams
			await ModelKeyboardInputType.updateInputTypeField({
				repository: this.inputTypeRepository,
				inputTypeId: keyboardParams.inputTypeId,
				entity: modelEntity
			})
			await HasFingerPrintReader.updateFingerprintField({
				hasFingerPrintReader: keyboardParams.hasFingerPrintReader,
				entity: modelEntity
			})
		}
		// Actualizar la tabla de Mouse
		if (MouseModels.isMouseCategory({ categoryId })) {
			modelEntity = MouseModels.fromPrimitives(modelSeries)
			const mouseParams = params as MouseModelsParams
			await ModelMouseInputType.updateInputTypeField({
				repository: this.inputTypeRepository,
				inputTypeId: mouseParams.inputTypeId,
				entity: modelEntity
			})
		}
		// Actualizar la tabla de Impresora laser y tinta
		else if (ModelPrinters.isPrinterCategory({ categoryId })) {
			modelEntity = ModelPrinters.fromPrimitives(modelSeries)
			const printerParams = params as PrinteModelsParams
			await CartridgeModel.updateCartridgeModelField({
				cartridgeModel: printerParams.cartridgeModel,
				entity: modelEntity
			})
		}
		// Actualizar la tabla de monitores
		else if (MonitorModels.isMonitorCategory({ categoryId })) {
			modelEntity = MonitorModels.fromPrimitives(modelSeries)
			const monitorParams = params as MonitorModelsParams
			await MonitorHasDVI.updateDVIField({
				hasDVI: monitorParams.hasDVI,
				entity: modelEntity
			})
			await MonitorHasVGA.updateVGAField({
				hasVGA: monitorParams.hasVGA,
				entity: modelEntity
			})
			await MonitorHasHDMI.updateDVIField({
				hasHDMI: monitorParams.hasHDMI,
				entity: modelEntity
			})
			await MonitorScreenSize.updateScreenSizeField({
				ScreenSize: monitorParams.screenSize,
				entity: modelEntity
			})
		}
		// Actualizar la tabla de Laptop
		else if (LaptopsModels.isLaptopCategory({ categoryId })) {
			modelEntity = LaptopsModels.fromPrimitives(modelSeries)
			const laptopParams = params as LaptopModelsParams
			await HasVGA.updateVGAField({
				hasVGA: laptopParams.hasVGA,
				entity: modelEntity
			})
			await HasDVI.updateDVIField({
				hasDVI: laptopParams.hasDVI,
				entity: modelEntity
			})
			await HasHDMI.updateDVIField({
				hasHDMI: laptopParams.hasHDMI,
				entity: modelEntity
			})
			await HasBluetooth.updateBluetoothField({
				hasBluetooth: laptopParams.hasBluetooth,
				entity: modelEntity
			})
			await HasWifiAdapter.updateWifiAdapterField({
				hasWifiAdapter: laptopParams.hasWifiAdapter,
				entity: modelEntity
			})
			await BatteryModelName.updateBatteryModelField({
				batteryModel: laptopParams.batteryModel,
				entity: modelEntity
			})
			await MemoryRamSlotQuantity.updateMemoryRamSlotQuantityField({
				memoryRamSlotQuantity: laptopParams.memoryRamSlotQuantity,
				entity: modelEntity
			})
			await ComputerMemoryRamType.updateInputTypeField({
				repository: this.memoryRamTypeRepository,
				memoryRamTypeId: laptopParams.memoryRamTypeId,
				entity: modelEntity
			})
		}
		// Actualizar la tabla de Computadoras
		else if (ComputerModels.isComputerCategory({ categoryId })) {
			modelEntity = ComputerModels.fromPrimitives(modelSeries)
			const computerParams = params as ComputerModelsParams
			await HasVGA.updateVGAField({
				hasVGA: computerParams.hasVGA,
				entity: modelEntity
			})
			await HasDVI.updateDVIField({
				hasDVI: computerParams.hasDVI,
				entity: modelEntity
			})
			await HasHDMI.updateDVIField({
				hasHDMI: computerParams.hasHDMI,
				entity: modelEntity
			})
			await HasBluetooth.updateBluetoothField({
				hasBluetooth: computerParams.hasBluetooth,
				entity: modelEntity
			})
			await HasWifiAdapter.updateWifiAdapterField({
				hasWifiAdapter: computerParams.hasWifiAdapter,
				entity: modelEntity
			})
			await MemoryRamSlotQuantity.updateMemoryRamSlotQuantityField({
				memoryRamSlotQuantity: computerParams.memoryRamSlotQuantity,
				entity: modelEntity
			})
			await ComputerMemoryRamType.updateInputTypeField({
				repository: this.memoryRamTypeRepository,
				memoryRamTypeId: computerParams.memoryRamTypeId,
				entity: modelEntity
			})
		} else {
			modelEntity = ModelSeries.fromPrimitives(modelSeries)
		}
		await this.updateMainModel({ params, entity: modelEntity })
		await this.modelSeriesRepository.save(modelEntity.toPrimitives())
	}

	private async updateMainModel({
		params,
		entity
	}: {
		params: Partial<ModelSeriesParams>
		entity: ModelSeries
	}): Promise<void> {
		await ModelSeriesCategory.updateCategoryField({
			repository: this.categoryRepository,
			categoryId: params.categoryId,
			entity
		})
		await ModelSeriesBrand.updateBrandField({
			repository: this.brandRepository,
			brandId: params.brandId,
			entity
		})
		await ModelSeriesName.updateNameField({
			repository: this.modelSeriesRepository,
			name: params.name,
			entity
		})
		await Generic.updateGenericField({ generic: params.generic, entity })
	}
}
