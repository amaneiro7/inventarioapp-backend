import { ModelSeries } from './ModelSeries'
import { ModelSeriesId } from '../valueObject/ModelSeriesId'
import { ModelSeriesName } from '../valueObject/ModelSeriesName'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { Generic } from '../valueObject/Generic'
import { ProcessorId } from '../../../../Features/Processor/domain/valueObject/ProcessorId'
import { MemoryRamTypeId } from '../../../../Features/MemoryRam/MemoryRamType/domain/valueObject/MemoryRamTypeId'
import { MemoryRamSlotQuantity } from '../valueObject/MemoryRamSlotQuantity'
import { HasBluetooth } from '../valueObject/HasBluetooth'
import { HasWifiAdapter } from '../valueObject/HasWifiAdapter'
import { HasDVI } from '../valueObject/HasDVI'
import { HasHDMI } from '../valueObject/HasHDMI'
import { HasVGA } from '../valueObject/HasVGA'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { ModelSeriesProcessorRemovedDomainEvent } from '../event/ModelSeriesProcessorRemovedDomainEvent'
import { ModelSeriesProcessorAddedDomainEvent } from '../event/ModelSeriesProcessorAddedDomainEvent'
import { ModelSeriesCreatedDomainEvent } from '../event/ModelSeriesCreatedDomainEvent'
import { type ModelSeriesDto } from '../dto/ModelSeries.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ComputerModelsParams, type ComputerModelsPrimitives } from '../dto/ComputerModels.dto'
/**
 * @description Represents a computer model, extending the base ModelSeries class.
 */
export class ComputerModels extends ModelSeries {
	private processors = new Set<ProcessorId>()
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		processors: Set<ProcessorId>,
		private memoryRamTypeId: MemoryRamTypeId,
		private memoryRamSlotQuantity: MemoryRamSlotQuantity,
		private hasBluetooth: HasBluetooth,
		private hasWifiAdapter: HasWifiAdapter,
		private hasDVI: HasDVI,
		private hasHDMI: HasHDMI,
		private hasVGA: HasVGA
	) {
		super(id, name, categoryId, brandId, generic)
		this.processors = processors
	}

	static create(params: ComputerModelsParams): ComputerModels {
		const processors = new Set<ProcessorId>(params.processors.map(processorId => new ProcessorId(processorId)))
		const model = new ComputerModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			processors,
			new MemoryRamTypeId(params.memoryRamTypeId),
			new MemoryRamSlotQuantity(params.memoryRamSlotQuantity),
			new HasBluetooth(params.hasBluetooth),
			new HasWifiAdapter(params.hasWifiAdapter),
			new HasDVI(params.hasDVI),
			new HasHDMI(params.hasHDMI),
			new HasVGA(params.hasVGA)
		)
		model.record(
			new ModelSeriesCreatedDomainEvent({
				aggregateId: model.idValue,
				name: model.nameValue,
				categoryId: model.categoryValue,
				brandId: model.brandValue
			})
		)
		return model
	}

	static isComputerCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		const acceptedCategories: string[] = [
			CategoryValues.COMPUTADORAS,
			CategoryValues.ALLINONE,
			CategoryValues.SERVIDORES
		]
		return acceptedCategories.includes(categoryId)
	}

	static fromPrimitives(primitives: ModelSeriesDto): ComputerModels {
		if (!primitives.modelComputer) {
			throw new Error('Computer model data is missing')
		}
		const uniqueProcessors = new Set<ProcessorId>(
			primitives.processors.map(processor => new ProcessorId(processor.id))
		)
		return new ComputerModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			uniqueProcessors,
			new MemoryRamTypeId(primitives.modelComputer.memoryRamTypeId),
			new MemoryRamSlotQuantity(primitives.modelComputer.memoryRamSlotQuantity),
			new HasBluetooth(primitives.modelComputer.hasBluetooth),
			new HasWifiAdapter(primitives.modelComputer.hasWifiAdapter),
			new HasDVI(primitives.modelComputer.hasDVI),
			new HasHDMI(primitives.modelComputer.hasHDMI),
			new HasVGA(primitives.modelComputer.hasVGA)
		)
	}

	toPrimitives(): ComputerModelsPrimitives {
		return {
			...super.toPrimitives(),
			processors: this.processorsValue,
			memoryRamTypeId: this.memoryRamTypeValue,
			memoryRamSlotQuantity: this.memoryRamSlotQuantityValue,
			hasBluetooth: this.hasBluetoothValue,
			hasWifiAdapter: this.hasWifiAdapterValue,
			hasDVI: this.hasDVIValue,
			hasHDMI: this.hasHDMIValue,
			hasVGA: this.hasVGAValue
		}
	}

	get memoryRamTypeValue(): Primitives<MemoryRamTypeId> {
		return this.memoryRamTypeId.value
	}

	get memoryRamSlotQuantityValue(): Primitives<MemoryRamSlotQuantity> {
		return this.memoryRamSlotQuantity.value
	}

	get hasBluetoothValue(): Primitives<HasBluetooth> {
		return this.hasBluetooth.value
	}

	get hasWifiAdapterValue(): Primitives<HasWifiAdapter> {
		return this.hasWifiAdapter.value
	}

	get hasDVIValue(): Primitives<HasDVI> {
		return this.hasDVI.value
	}

	get hasHDMIValue(): Primitives<HasHDMI> {
		return this.hasHDMI.value
	}

	get hasVGAValue(): Primitives<HasVGA> {
		return this.hasVGA.value
	}

	get processorsValue(): Primitives<ProcessorId>[] {
		return Array.from(this.processors).map(processor => processor.value)
	}

	updateMemoryRamTypeId(memoryRamTypeId: Primitives<MemoryRamTypeId>): void {
		this.memoryRamTypeId = new MemoryRamTypeId(memoryRamTypeId)
	}

	updateMemoryRamSlotQuantity(memoryRamSlotQuantity: Primitives<MemoryRamSlotQuantity>): void {
		this.memoryRamSlotQuantity = new MemoryRamSlotQuantity(memoryRamSlotQuantity)
	}

	updateHasBluetooth(hasBluetooth: Primitives<HasBluetooth>): void {
		this.hasBluetooth = new HasBluetooth(hasBluetooth)
	}

	updateHasWifiAdapter(hasWifiAdapter: Primitives<HasWifiAdapter>): void {
		this.hasWifiAdapter = new HasWifiAdapter(hasWifiAdapter)
	}

	updateHasDVI(hasDVI: Primitives<HasDVI>): void {
		this.hasDVI = new HasDVI(hasDVI)
	}

	updateHasHDMI(hasHDMI: Primitives<HasHDMI>): void {
		this.hasHDMI = new HasHDMI(hasHDMI)
	}

	updateHasVGA(hasVGA: Primitives<HasVGA>): void {
		this.hasVGA = new HasVGA(hasVGA)
	}

	private hasProcessor(processorId: ProcessorId): boolean {
		return [...this.processors].some(c => c.equals(processorId))
	}
	/**
	 * @description Associates a new processor with the computer model.
	 * @param {ProcessorId} processorId The processor to add.
	 */
	addProcessor(processorId: ProcessorId): void {
		if (this.hasProcessor(processorId)) {
			return
		}
		this.processors.add(processorId)
		this.record(
			new ModelSeriesProcessorAddedDomainEvent({
				aggregateId: this.idValue,
				processorId: processorId.value
			})
		)
	}

	/**
	 * @description Removes a processor association from the computer model.
	 * @param {ProcessorId} processorId The processor to remove.
	 */
	removeProcessor(processorId: ProcessorId): void {
		const processorToRemove = [...this.processors].find(c => c.equals(processorId))
		if (processorToRemove) {
			this.processors.delete(processorToRemove)
			this.record(
				new ModelSeriesProcessorRemovedDomainEvent({
					aggregateId: this.idValue,
					processorId: processorId.value
				})
			)
		}
	}
}
