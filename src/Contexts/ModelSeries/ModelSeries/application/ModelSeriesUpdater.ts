import { ModelSeries } from '../domain/entity/ModelSeries'
import { ModelSeriesId } from '../domain/valueObject/ModelSeriesId'
import { ComputerModels } from '../domain/entity/ComputerModels'
import { ModelFactory } from '../domain/entity/ModelFactory'
import { LaptopsModels } from '../domain/entity/LaptopsModels'
import { MonitorModels } from '../domain/entity/MonitorModels'
import { ModelPrinters } from '../domain/entity/ModelPrinters'
import { KeyboardModels } from '../domain/entity/KeyboardModels'
import { MouseModels } from '../domain/entity/MouseModels'
import { ProcessorId } from '../../../Features/Processor/domain/valueObject/ProcessorId'
import { ModelSeriesNameUniquenessChecker } from '../domain/service/ModelSeriesNameUniquenessChecker'
import { MemoryRamTypeExistenceChecker } from '../../../Features/MemoryRam/MemoryRamType/domain/service/MemoryRamTypeExistanceChecker'
import { ProcessorExistenceChecker } from '../../../Features/Processor/domain/service/ProcessorExistanceChecker'
import { InputTypeExistenceChecker } from '../../InputType/domain/service/InputTypeExistanceChecker'
import { ModelSeriesDoesNotExistError } from '../domain/errors/ModelSeriesDoesNotExistError'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'
import { type InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/repository/MemoryRamTypeRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/repository/CategoryRepository'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type ProcessorRepository } from '../../../Features/Processor/domain/repository/ProcessorRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type ModelSeriesField, type ModelSeriesParams } from '../domain/dto/ModelSeries.dto'
import { type LaptopModelsField, type LaptopModelsParams } from '../domain/dto/LaptopsModels.dto'
import { type MonitorModelsField, type MonitorModelsParams } from '../domain/dto/MonitoModels.dto'
import { type ComputerModelsField, type ComputerModelsParams } from '../domain/dto/ComputerModels.dto'
import { type PrinteModelsField, type PrinteModelsParams } from '../domain/dto/ModelPrinters.dto'
import { type KeyboardModelsParams, type KeyboardModelsField } from '../domain/dto/KeyboardModels.dto'
import { type MouseModelsParams, type MouseModelsField } from '../domain/dto/MouseModels.dto'

/**
 * @description Use case for updating an existing ModelSeries entity.
 */

type ModelAnyField =
	| ModelSeriesField
	| ComputerModelsField
	| LaptopModelsField
	| MonitorModelsField
	| PrinteModelsField
	| KeyboardModelsField
	| MouseModelsField

type Changes = Array<{ field: ModelAnyField; oldValue: unknown; newValue: unknown }>

export class ModelSeriesUpdater {
	private readonly modelSeriesRepository: ModelSeriesRepository
	private readonly modelSeriesNameUniquenessChecker: ModelSeriesNameUniquenessChecker
	private readonly memoryRamTypeExistenceChecker: MemoryRamTypeExistenceChecker
	private readonly processorExistenceChecker: ProcessorExistenceChecker
	private readonly inputTypeExistenceChecker: InputTypeExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		modelSeriesRepository,
		inputTypeRepository,
		memoryRamTypeRepository,
		processorRepository,
		eventBus
	}: {
		modelSeriesRepository: ModelSeriesRepository
		inputTypeRepository: InputTypeRepository
		memoryRamTypeRepository: MemoryRamTypeRepository
		categoryRepository: CategoryRepository
		brandRepository: BrandRepository
		processorRepository: ProcessorRepository
		eventBus: EventBus
	}) {
		this.modelSeriesRepository = modelSeriesRepository
		this.modelSeriesNameUniquenessChecker = new ModelSeriesNameUniquenessChecker({ modelSeriesRepository })
		this.memoryRamTypeExistenceChecker = new MemoryRamTypeExistenceChecker(memoryRamTypeRepository)
		this.processorExistenceChecker = new ProcessorExistenceChecker(processorRepository)
		this.inputTypeExistenceChecker = new InputTypeExistenceChecker(inputTypeRepository)
		this.eventBus = eventBus
	}

	async run({ id, params }: { id: string; params: Partial<ModelSeriesParams> }): Promise<void> {
		const modelSeriesId = new ModelSeriesId(id).value
		const modelSeries = await this.modelSeriesRepository.findById(modelSeriesId)

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(id)
		}

		const modelEntity = await ModelFactory.fromPrimitives(modelSeries)
		const validations: Promise<void>[] = []
		const changes: Changes = []

		// 1. Validar campos base (si cambiaran)
		this.validateBaseFields(modelEntity, params, changes, validations)

		// 2. Validar campos específicos (si cambiaron)
		// IMPORTANTE: LaptopsModels extiende de ComputerModels, por lo que debe verificarse PRIMERO.
		if (modelEntity instanceof LaptopsModels) {
			this.validateComputerModelFields(modelEntity, params as Partial<LaptopModelsParams>, changes, validations)
			this.validateLaptopsModelFields(modelEntity, params as Partial<LaptopModelsParams>, changes)
		} else if (modelEntity instanceof ComputerModels) {
			this.validateComputerModelFields(modelEntity, params as Partial<ComputerModelsParams>, changes, validations)
		} else if (modelEntity instanceof MonitorModels) {
			this.validateMonitorModelFields(modelEntity, params as Partial<MonitorModelsParams>, changes)
		} else if (modelEntity instanceof ModelPrinters) {
			this.validatePrinterModelFields(modelEntity, params as Partial<PrinteModelsParams>, changes)
		} else if (modelEntity instanceof KeyboardModels) {
			this.validateKeyboardModelFields(modelEntity, params as Partial<KeyboardModelsParams>, changes, validations)
		} else if (modelEntity instanceof MouseModels) {
			this.validateMouseModelFields(modelEntity, params as Partial<MouseModelsParams>, changes, validations)
		}

		// 3. Ejecutar validaciones y obtener contexto en paralelo
		await Promise.all(validations)

		if (changes.length > 0) {
			modelEntity.registerUpdateEvent(changes)
			await this.modelSeriesRepository.save(modelEntity.toPrimitives())
			await this.eventBus.publish(modelEntity.pullDomainEvents())
		}
	}

	private validateBaseFields(
		modelSeriesEntity: ModelSeries,
		params: Partial<ModelSeriesParams>,
		changes: Changes,
		validations: Promise<void>[]
	): void {
		if (params.name !== undefined && modelSeriesEntity.nameValue !== params.name) {
			validations.push(
				this.modelSeriesNameUniquenessChecker.ensureIsUnique(
					params.name,
					modelSeriesEntity.brandValue,
					modelSeriesEntity.idValue
				)
			)
			changes.push({
				field: 'name',
				oldValue: modelSeriesEntity.nameValue,
				newValue: params.name
			})
			modelSeriesEntity.updateName(params.name)
		}
		if (params.generic !== undefined && modelSeriesEntity.genericValue !== params.generic) {
			changes.push({
				field: 'generic',
				oldValue: modelSeriesEntity.genericValue,
				newValue: params.generic
			})
			modelSeriesEntity.updateGeneric(params.generic)
		}
	}

	private validateComputerModelFields(
		modelSeriesEntity: ComputerModels,
		params: Partial<ComputerModelsParams>,
		changes: Changes,
		validations: Promise<void>[]
	) {
		if (params.memoryRamTypeId && params.memoryRamTypeId !== modelSeriesEntity.memoryRamTypeValue) {
			validations.push(this.memoryRamTypeExistenceChecker.ensureExist(params.memoryRamTypeId))
			changes.push({
				field: 'memoryRamTypeId',
				oldValue: modelSeriesEntity.memoryRamTypeValue,
				newValue: params.memoryRamTypeId
			})
			modelSeriesEntity.updateMemoryRamTypeId(params.memoryRamTypeId)
		}

		if (
			params.memoryRamSlotQuantity &&
			params.memoryRamSlotQuantity !== modelSeriesEntity.memoryRamSlotQuantityValue
		) {
			changes.push({
				field: 'memoryRamSlotQuantity',
				oldValue: modelSeriesEntity.memoryRamSlotQuantityValue,
				newValue: params.memoryRamSlotQuantity
			})
			modelSeriesEntity.updateMemoryRamSlotQuantity(params.memoryRamSlotQuantity)
		}
		if (params.hasBluetooth !== undefined && params.hasBluetooth !== modelSeriesEntity.hasBluetoothValue) {
			changes.push({
				field: 'hasBluetooth',
				oldValue: modelSeriesEntity.hasBluetoothValue,
				newValue: params.hasBluetooth
			})
			modelSeriesEntity.updateHasBluetooth(params.hasBluetooth)
		}
		if (params.hasWifiAdapter !== undefined && params.hasWifiAdapter !== modelSeriesEntity.hasWifiAdapterValue) {
			changes.push({
				field: 'hasWifiAdapter',
				oldValue: modelSeriesEntity.hasWifiAdapterValue,
				newValue: params.hasWifiAdapter
			})
			modelSeriesEntity.updateHasWifiAdapter(params.hasWifiAdapter)
		}
		if (params.hasDVI !== undefined && params.hasDVI !== modelSeriesEntity.hasDVIValue) {
			changes.push({
				field: 'hasDVI',
				oldValue: modelSeriesEntity.hasDVIValue,
				newValue: params.hasDVI
			})
			modelSeriesEntity.updateHasDVI(params.hasDVI)
		}
		if (params.hasHDMI !== undefined && params.hasHDMI !== modelSeriesEntity.hasHDMIValue) {
			changes.push({
				field: 'hasHDMI',
				oldValue: modelSeriesEntity.hasHDMIValue,
				newValue: params.hasHDMI
			})
			modelSeriesEntity.updateHasHDMI(params.hasHDMI)
		}
		if (params.hasVGA !== undefined && params.hasVGA !== modelSeriesEntity.hasVGAValue) {
			changes.push({
				field: 'hasVGA',
				oldValue: modelSeriesEntity.hasVGAValue,
				newValue: params.hasVGA
			})
			modelSeriesEntity.updateHasVGA(params.hasVGA)
		}

		// Actualizar procesadores si vienen en los params
		if (params.processors) {
			const currentProcessorIds = modelSeriesEntity.processorsValue
			const newProcessorIds = params.processors
			const uniqueProcessorsIds = Array.from(new Set(newProcessorIds))

			// 1 Validar existencia de todos los procesadores entrantes
			if (uniqueProcessorsIds.length > 0) {
				validations.push(this.processorExistenceChecker.ensureExist(uniqueProcessorsIds))
			}

			const newIdSet = new Set(uniqueProcessorsIds)
			const currentIdSet = new Set(currentProcessorIds)
			let processorsChanged = false

			// Añadir procesadores nuevos
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					modelSeriesEntity.addProcessor(new ProcessorId(id))
					processorsChanged = true
				}
			}

			// Eliminar procesadores que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					modelSeriesEntity.removeProcessor(new ProcessorId(id))
					processorsChanged = true
				}
			}

			if (processorsChanged) {
				changes.push({
					field: 'processors',
					oldValue: currentProcessorIds,
					newValue: params.processors
				})
			}
		}
	}

	private validateLaptopsModelFields(
		modelSeriesEntity: LaptopsModels,
		params: Partial<LaptopModelsParams>,
		changes: Changes
	) {
		if (params.batteryModel !== undefined && modelSeriesEntity.batteryModelValue !== params.batteryModel) {
			changes.push({
				field: 'batteryModel',
				oldValue: modelSeriesEntity.batteryModelValue,
				newValue: params.batteryModel
			})
			modelSeriesEntity.updateBatteryModel(params.batteryModel)
		}
	}

	private validateMonitorModelFields(
		modelSeriesEntity: MonitorModels,
		params: Partial<MonitorModelsParams>,
		changes: Changes
	) {
		if (params.screenSize !== undefined && modelSeriesEntity.screenSizeValue !== params.screenSize) {
			changes.push({
				field: 'screenSize',
				oldValue: modelSeriesEntity.screenSizeValue,
				newValue: params.screenSize
			})
			modelSeriesEntity.updateScreenSize(params.screenSize)
		}

		if (params.hasDVI !== undefined && modelSeriesEntity.hasDVIValue !== params.hasDVI) {
			changes.push({
				field: 'hasDVI',
				oldValue: modelSeriesEntity.hasDVIValue,
				newValue: params.hasDVI
			})
			modelSeriesEntity.updateHasDVI(params.hasDVI)
		}

		if (params.hasHDMI !== undefined && modelSeriesEntity.hasHDMIValue !== params.hasHDMI) {
			changes.push({
				field: 'hasHDMI',
				oldValue: modelSeriesEntity.hasHDMIValue,
				newValue: params.hasHDMI
			})
			modelSeriesEntity.updateHasHDMI(params.hasHDMI)
		}

		if (params.hasVGA !== undefined && modelSeriesEntity.hasVGAValue !== params.hasVGA) {
			changes.push({
				field: 'hasVGA',
				oldValue: modelSeriesEntity.hasVGAValue,
				newValue: params.hasVGA
			})
			modelSeriesEntity.updateHasVGA(params.hasVGA)
		}
	}
	private validatePrinterModelFields(
		modelSeriesEntity: ModelPrinters,
		params: Partial<PrinteModelsParams>,
		changes: Changes
	) {
		if (params.cartridgeModel !== undefined && modelSeriesEntity.cartridgeModelValue !== params.cartridgeModel) {
			changes.push({
				field: 'cartridgeModel',
				oldValue: modelSeriesEntity.cartridgeModelValue,
				newValue: params.cartridgeModel
			})
			modelSeriesEntity.updateCartridgeModel(params.cartridgeModel)
		}
	}
	private validateMouseModelFields(
		modelSeriesEntity: MouseModels,
		params: Partial<MouseModelsParams>,
		changes: Changes,
		validations: Promise<void>[]
	) {
		if (params.inputTypeId !== undefined && modelSeriesEntity.inputTypeValue !== params.inputTypeId) {
			validations.push(this.inputTypeExistenceChecker.ensureExist(params.inputTypeId))
			changes.push({
				field: 'inputTypeId',
				oldValue: modelSeriesEntity.inputTypeValue,
				newValue: params.inputTypeId
			})
			modelSeriesEntity.updateInputType(params.inputTypeId)
		}
	}
	private validateKeyboardModelFields(
		modelSeriesEntity: KeyboardModels,
		params: Partial<KeyboardModelsParams>,
		changes: Changes,
		validations: Promise<void>[]
	) {
		if (params.inputTypeId !== undefined && modelSeriesEntity.inputTypeValue !== params.inputTypeId) {
			validations.push(this.inputTypeExistenceChecker.ensureExist(params.inputTypeId))
			changes.push({
				field: 'inputTypeId',
				oldValue: modelSeriesEntity.inputTypeValue,
				newValue: params.inputTypeId
			})
			modelSeriesEntity.updateInputType(params.inputTypeId)
		}

		if (
			params.hasFingerPrintReader !== undefined &&
			modelSeriesEntity.hasFingerPrintReaderValue !== params.hasFingerPrintReader
		) {
			modelSeriesEntity.updateHasFingerPrintReader(params.hasFingerPrintReader)
			changes.push({
				field: 'hasFingerPrintReader',
				oldValue: modelSeriesEntity.hasFingerPrintReaderValue,
				newValue: params.hasFingerPrintReader
			})
		}
	}
}
