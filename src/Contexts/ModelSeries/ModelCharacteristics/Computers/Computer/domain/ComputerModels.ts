import { BrandId } from '../../../../../Brand/domain/valueObject/BrandId'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../../ModelSeries/domain/Generic'
import { ModelSeries } from '../../../../ModelSeries/domain/ModelSeries'
import { ModelSeriesId } from '../../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../../ModelSeries/domain/ModelSeriesName'
import { ComputerMemoryRamType } from './ComputerMemoryRamType'
import { HasBluetooth } from './HasBluetooth'
import { HasDVI } from './HasDVI'
import { HasHDMI } from './HasHDMI'
import { HasVGA } from './HasVGA'
import { HasWifiAdapter } from './HasWifiAdapter'
import { MemoryRamSlotQuantity } from './MemoryRamSlotQuantity'
import { CategoryId } from '../../../../../Category/Category/domain/CategoryId'
import { type ComputerModelsParams, type ComputerModelsPrimitives } from './ComputerModels.dto'
import { type ModelSeriesDto } from '../../../../ModelSeries/domain/ModelSeries.dto'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { ProcessorId } from '../../../../../Features/Processor/Processor/domain/ProcessorId'

/**
 * @description Represents a computer model, extending the base ModelSeries class.
 */
export class ComputerModels extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		processors: ProcessorId[],
		private memoryRamTypeId: ComputerMemoryRamType,
		private memoryRamSlotQuantity: MemoryRamSlotQuantity,
		private hasBluetooth: HasBluetooth,
		private hasWifiAdapter: HasWifiAdapter,
		private hasDVI: HasDVI,
		private hasHDMI: HasHDMI,
		private hasVGA: HasVGA
	) {
		super(id, name, categoryId, brandId, generic, processors)
	}

	static create(params: ComputerModelsParams): ComputerModels {
		return new ComputerModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			this.addProcessorIds({ categoryId: params.categoryId, processorIds: params.processors }),
			new ComputerMemoryRamType(params.memoryRamTypeId),
			new MemoryRamSlotQuantity(params.memoryRamSlotQuantity),
			new HasBluetooth(params.hasBluetooth),
			new HasWifiAdapter(params.hasWifiAdapter),
			new HasDVI(params.hasDVI),
			new HasHDMI(params.hasHDMI),
			new HasVGA(params.hasVGA)
		)
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
		return new ComputerModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			primitives.processors.map(processor => new ProcessorId(processor.id)),
			new ComputerMemoryRamType(primitives.modelComputer.memoryRamTypeId),
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
			memoryRamTypeId: this.memoryRamTypeValue,
			memoryRamSlotQuantity: this.memoryRamSlotQuantityValue,
			hasBluetooth: this.hasBluetoothValue,
			hasWifiAdapter: this.hasWifiAdapterValue,
			hasDVI: this.hasDVIValue,
			hasHDMI: this.hasHDMIValue,
			hasVGA: this.hasVGAValue
		}
	}

	get memoryRamTypeValue(): Primitives<ComputerMemoryRamType> {
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

	updateMemoryRamTypeId(memoryRamTypeId: Primitives<ComputerMemoryRamType>): void {
		this.memoryRamTypeId = new ComputerMemoryRamType(memoryRamTypeId)
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
}
