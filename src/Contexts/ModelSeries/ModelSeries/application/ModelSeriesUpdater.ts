import { ModelSeries } from '../domain/entity/ModelSeries'
import { ModelSeriesId } from '../domain/valueObject/ModelSeriesId'
import { ComputerModels } from '../domain/entity/ComputerModels'
import { ModelFactory } from '../domain/entity/ModelFactory'
import { KeyboardModels } from '../domain/entity/KeyboardModels'
import { MouseModels } from '../domain/entity/MouseModels'
import { ModelSeriesNameUniquenessChecker } from '../domain/service/ModelSeriesNameUniquenessChecker'
import { MemoryRamTypeExistenceChecker } from '../../../Features/MemoryRam/MemoryRamType/domain/service/MemoryRamTypeExistanceChecker'
import { ProcessorExistenceChecker } from '../../../Features/Processor/domain/service/ProcessorExistanceChecker'
import { InputTypeExistenceChecker } from '../../InputType/domain/service/InputTypeExistanceChecker'
import { ModelSeriesDoesNotExistError } from '../domain/errors/ModelSeriesDoesNotExistError'
import { type ModelSeriesParams } from '../domain/dto/ModelSeries.dto'
import { type ComputerModelsParams } from '../domain/dto/ComputerModels.dto'
import { type KeyboardModelsParams } from '../domain/dto/KeyboardModels.dto'
import { type MouseModelsParams } from '../domain/dto/MouseModels.dto'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'
import { type InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { type MemoryRamTypeRepository } from '../../../Features/MemoryRam/MemoryRamType/domain/repository/MemoryRamTypeRepository'
import { type ProcessorRepository } from '../../../Features/Processor/domain/repository/ProcessorRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @description Use case for updating an existing ModelSeries entity.
 */

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

		// 1. FASE DE VALIDACIÓN: Solo comprobaciones asíncronas (Existencia/Unicidad)
		this.validateFields(modelEntity, params, validations)

		// 2. Ejecutar todas las validaciones en paralelo
		await Promise.all(validations)

		// 3. FASE DE ACTUALIZACIÓN: Aplicar cambios (Síncrono)
		const changes = modelEntity.update(params)

		if (changes.length > 0) {
			modelEntity.registerUpdateEvent(changes)
			await this.modelSeriesRepository.save(modelEntity.toPrimitives())
			await this.eventBus.publish(modelEntity.pullDomainEvents())
		}
	}

	private validateFields(
		modelEntity: ModelSeries,
		params: Partial<ModelSeriesParams>,
		validations: Promise<void>[]
	): void {
		this.validateBaseFields(modelEntity, params, validations)

		// Validar campos específicos (Laptops hereda de Computer, así que este bloque cubre ambos para validaciones de CPU/RAM)
		if (modelEntity instanceof ComputerModels) {
			this.validateComputerModelFields(modelEntity, params as Partial<ComputerModelsParams>, validations)
		} else if (modelEntity instanceof KeyboardModels) {
			this.validateKeyboardModelFields(modelEntity, params as Partial<KeyboardModelsParams>, validations)
		} else if (modelEntity instanceof MouseModels) {
			this.validateMouseModelFields(modelEntity, params as Partial<MouseModelsParams>, validations)
		}
	}

	private validateBaseFields(
		modelSeriesEntity: ModelSeries,
		params: Partial<ModelSeriesParams>,
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
		}
	}

	private validateComputerModelFields(
		modelSeriesEntity: ComputerModels,
		params: Partial<ComputerModelsParams>,
		validations: Promise<void>[]
	) {
		if (params.memoryRamTypeId && params.memoryRamTypeId !== modelSeriesEntity.memoryRamTypeValue) {
			validations.push(this.memoryRamTypeExistenceChecker.ensureExist(params.memoryRamTypeId))
		}

		if (params.processors) {
			const uniqueProcessorsIds = [...new Set(params.processors)]
			if (uniqueProcessorsIds.length > 0) {
				validations.push(this.processorExistenceChecker.ensureExist(uniqueProcessorsIds))
			}
		}
	}

	private validateMouseModelFields(
		modelSeriesEntity: MouseModels,
		params: Partial<MouseModelsParams>,
		validations: Promise<void>[]
	) {
		if (params.inputTypeId !== undefined && modelSeriesEntity.inputTypeValue !== params.inputTypeId) {
			validations.push(this.inputTypeExistenceChecker.ensureExist(params.inputTypeId))
		}
	}

	private validateKeyboardModelFields(
		modelSeriesEntity: KeyboardModels,
		params: Partial<KeyboardModelsParams>,
		validations: Promise<void>[]
	) {
		if (params.inputTypeId !== undefined && modelSeriesEntity.inputTypeValue !== params.inputTypeId) {
			validations.push(this.inputTypeExistenceChecker.ensureExist(params.inputTypeId))
		}
	}
}
