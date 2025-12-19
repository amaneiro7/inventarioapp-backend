import { KeyboardModels } from '../../ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { ModelPrinters } from '../../ModelCharacteristics/Printers/domain/ModelPrinters'
import { MonitorModels } from '../../ModelCharacteristics/Monitors/domain/MonitorModels'
import { LaptopsModels } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { MouseModels } from '../../ModelCharacteristics/Mouses/domain/MouseModels'
import { ModelSeriesDoesNotExistError } from '../domain/errors/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/ModelSeriesId'
import { ModelSeriesName } from '../domain/ModelSeriesName'
import { ModelSeries } from '../domain/entity/ModelSeries'
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
import { ProcessorDoesNotExistError } from '../../../Features/Processor/Processor/domain/ProcessorDoesNotExistError'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'
import { type InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/CategoryRepository'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type ModelSeriesDto, type ModelSeriesParams } from '../domain/entity/ModelSeries.dto'
import { type KeyboardModelsParams } from '../../ModelCharacteristics/Keyboards/domain/KeyboardModels.dto'
import { type MouseModelsParams } from '../../ModelCharacteristics/Mouses/domain/MouseModels.dto'
import { type PrinteModelsParams } from '../../ModelCharacteristics/Printers/domain/ModelPrinters.dto'
import { type MonitorModelsParams } from '../../ModelCharacteristics/Monitors/domain/MonitoModels.dto'
import { type LaptopModelsParams } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels.dto'
import { type ComputerModelsParams } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerModels.dto'
import { type ProcessorRepository } from '../../../Features/Processor/Processor/domain/ProcessorRepository'
import { type ProcessorId } from '../../../Features/Processor/Processor/domain/ProcessorId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

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
	}

	async run({ id, params }: { id: string; params: Partial<ModelSeriesParams> }): Promise<void> {
		const modelSeriesId = new ModelSeriesId(id).value
		const modelSeries = await this.modelSeriesRepository.findById(modelSeriesId)

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(id)
		}

		const modelEntity = this.createModelEntity(modelSeries)

		await this.updateModelFields(modelEntity, params)

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

	private async updateModelFields(entity: ModelSeries, params: Partial<ModelSeriesParams>): Promise<void> {
		await this.updateMainModel({ params, entity })

		if (entity instanceof KeyboardModels) {
			const keyboardParams = params as KeyboardModelsParams
			await ModelKeyboardInputType.updateInputTypeField({
				repository: this.inputTypeRepository,
				inputTypeId: keyboardParams.inputTypeId,
				entity
			})
			await HasFingerPrintReader.updateFingerprintField({
				hasFingerPrintReader: keyboardParams.hasFingerPrintReader,
				entity
			})
		} else if (entity instanceof MouseModels) {
			const mouseParams = params as MouseModelsParams
			await ModelMouseInputType.updateInputTypeField({
				repository: this.inputTypeRepository,
				inputTypeId: mouseParams.inputTypeId,
				entity
			})
		} else if (entity instanceof ModelPrinters) {
			const printerParams = params as PrinteModelsParams
			await CartridgeModel.updateCartridgeModelField({ cartridgeModel: printerParams.cartridgeModel, entity })
		} else if (entity instanceof MonitorModels) {
			const monitorParams = params as MonitorModelsParams
			await Promise.all([
				MonitorHasDVI.updateDVIField({ hasDVI: monitorParams.hasDVI, entity }),
				MonitorHasVGA.updateVGAField({ hasVGA: monitorParams.hasVGA, entity }),
				MonitorHasHDMI.updateDVIField({ hasHDMI: monitorParams.hasHDMI, entity }),
				MonitorScreenSize.updateScreenSizeField({ ScreenSize: monitorParams.screenSize, entity })
			])
		} else if (entity instanceof LaptopsModels) {
			const laptopParams = params as LaptopModelsParams
			await Promise.all([
				HasVGA.updateVGAField({ hasVGA: laptopParams.hasVGA, entity }),
				HasDVI.updateDVIField({ hasDVI: laptopParams.hasDVI, entity }),
				HasHDMI.updateDVIField({ hasHDMI: laptopParams.hasHDMI, entity }),
				HasBluetooth.updateBluetoothField({ hasBluetooth: laptopParams.hasBluetooth, entity }),
				HasWifiAdapter.updateWifiAdapterField({ hasWifiAdapter: laptopParams.hasWifiAdapter, entity }),
				BatteryModelName.updateBatteryModelField({ batteryModel: laptopParams.batteryModel, entity }),
				MemoryRamSlotQuantity.updateMemoryRamSlotQuantityField({
					memoryRamSlotQuantity: laptopParams.memoryRamSlotQuantity,
					entity
				}),
				ComputerMemoryRamType.updateInputTypeField({
					repository: this.memoryRamTypeRepository,
					memoryRamTypeId: laptopParams.memoryRamTypeId,
					entity
				}),
				this.ensureProcessorsExistAndUpdate({
					entity,
					processors: laptopParams.processors
				})
			])
		} else if (entity instanceof ComputerModels) {
			const computerParams = params as ComputerModelsParams
			await Promise.all([
				HasVGA.updateVGAField({ hasVGA: computerParams.hasVGA, entity }),
				HasDVI.updateDVIField({ hasDVI: computerParams.hasDVI, entity }),
				HasHDMI.updateDVIField({ hasHDMI: computerParams.hasHDMI, entity }),
				HasBluetooth.updateBluetoothField({ hasBluetooth: computerParams.hasBluetooth, entity }),
				HasWifiAdapter.updateWifiAdapterField({ hasWifiAdapter: computerParams.hasWifiAdapter, entity }),
				MemoryRamSlotQuantity.updateMemoryRamSlotQuantityField({
					memoryRamSlotQuantity: computerParams.memoryRamSlotQuantity,
					entity
				}),
				ComputerMemoryRamType.updateInputTypeField({
					repository: this.memoryRamTypeRepository,
					memoryRamTypeId: computerParams.memoryRamTypeId,
					entity
				}),
				this.ensureProcessorsExistAndUpdate({
					entity,
					processors: computerParams.processors
				})
			])
		}
	}

	private async updateMainModel({
		params,
		entity
	}: {
		params: Partial<ModelSeriesParams>
		entity: ModelSeries
	}): Promise<void> {
		await Promise.all([
			ModelSeriesCategory.updateCategoryField({
				repository: this.categoryRepository,
				categoryId: params.categoryId,
				entity
			}),
			ModelSeriesBrand.updateBrandField({ repository: this.brandRepository, brandId: params.brandId, entity }),
			ModelSeriesName.updateNameField({ repository: this.modelSeriesRepository, name: params.name, entity }),
			Generic.updateGenericField({ generic: params.generic, entity })
		])
	}

	/**
	 * @private
	 * @description Ensures that new processors exist before associating them with the model series.
	 * @param {{ entity: ModelSeries; processors?: Primitives<ProcessorId>[] }} params The parameters for the check.
	 * @param {ModelSeries} params.entity The model series entity being updated.
	 * @param {Primitives<ProcessorId>[]} [params.processors] The list of new processor IDs.
	 * @returns {Promise<void>} A promise that resolves when the check is complete.
	 * @throws {ProcessorDoesNotExistError} If a new processor ID does not exist.
	 */
	private async ensureProcessorsExistAndUpdate({
		entity,
		processors
	}: {
		processors?: Primitives<ProcessorId>[]
		entity: ModelSeries
	}): Promise<void> {
		if (processors === undefined) {
			return
		}

		const uniqueProcessors = [...new Set(processors)]
		const newProcessors = uniqueProcessors.filter(processorId => !entity.pocessorsValue.includes(processorId))

		if (newProcessors.length > 0) {
			const processorExistenceChecks = newProcessors.map(async processorId => {
				const processor = await this.processorRepository.findById(processorId)
				if (processor === null) {
					throw new ProcessorDoesNotExistError(processorId)
				}
			})
			await Promise.all(processorExistenceChecks)
		}

		entity.updateProcessors({ processorIds: uniqueProcessors, categoryId: entity.categoryValue })
	}
}
