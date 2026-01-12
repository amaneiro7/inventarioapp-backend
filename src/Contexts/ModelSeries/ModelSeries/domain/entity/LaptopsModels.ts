import { ComputerModels } from './ComputerModels'
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
import { BatteryModelName } from '../valueObject/BatteryModelName'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { ModelSeriesCreatedDomainEvent } from '../event/ModelSeriesCreatedDomainEvent'
import { ModelSeriesCategoryMismatchError } from '../errors/ModelSeriesCategoryMismatchError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LaptopModelsParams, type LaptopModelsPrimitives } from '../dto/LaptopsModels.dto'
import { type ModelSeriesDto } from '../dto/ModelSeries.dto'
import { type ModelsFields } from '../dto/ModelsFields'

/**
 * @description Represents a laptop model, extending the ComputerModels class.
 */
export class LaptopsModels extends ComputerModels {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		processors: Set<ProcessorId>,
		memoryRamTypeId: MemoryRamTypeId,
		memoryRamSlotQuantity: MemoryRamSlotQuantity,
		hasBluetooth: HasBluetooth,
		hasWifiAdapter: HasWifiAdapter,
		hasDVI: HasDVI,
		hasHDMI: HasHDMI,
		hasVGA: HasVGA,
		private batteryModel: BatteryModelName
	) {
		super(
			id,
			name,
			categoryId,
			brandId,
			generic,
			processors,
			memoryRamTypeId,
			memoryRamSlotQuantity,
			hasBluetooth,
			hasWifiAdapter,
			hasDVI,
			hasHDMI,
			hasVGA
		)
	}

	static create(params: LaptopModelsParams): LaptopsModels {
		if (!this.isLaptopCategory({ categoryId: params.categoryId })) {
			throw new ModelSeriesCategoryMismatchError('Laptop')
		}
		const processors = new Set<ProcessorId>(params.processors.map(processorId => new ProcessorId(processorId)))
		const model = new LaptopsModels(
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
			new HasVGA(params.hasVGA),
			new BatteryModelName(params.batteryModel)
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

	static isLaptopCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		return categoryId === CategoryValues.LAPTOPS
	}

	static fromPrimitives(primitives: ModelSeriesDto): LaptopsModels {
		if (!primitives.modelLaptop) {
			throw new Error('Laptop model data is missing')
		}
		const uniqueProcessors = new Set<ProcessorId>(
			primitives.processors.map(processor => new ProcessorId(processor.id))
		)
		return new LaptopsModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			uniqueProcessors,
			new MemoryRamTypeId(primitives.modelLaptop.memoryRamTypeId),
			new MemoryRamSlotQuantity(primitives.modelLaptop.memoryRamSlotQuantity),
			new HasBluetooth(primitives.modelLaptop.hasBluetooth),
			new HasWifiAdapter(primitives.modelLaptop.hasWifiAdapter),
			new HasDVI(primitives.modelLaptop.hasDVI),
			new HasHDMI(primitives.modelLaptop.hasHDMI),
			new HasVGA(primitives.modelLaptop.hasVGA),
			new BatteryModelName(primitives.modelLaptop.batteryModel)
		)
	}

	toPrimitives(): LaptopModelsPrimitives {
		return {
			...super.toPrimitives(),
			batteryModel: this.batteryModelValue
		}
	}

	update(params: Partial<LaptopModelsParams>): ModelsFields {
		const changes: ModelsFields = []
		super.update(params)

		if (params.batteryModel !== undefined && this.batteryModelValue !== params.batteryModel) {
			changes.push({
				field: 'batteryModel',
				oldValue: this.batteryModelValue,
				newValue: params.batteryModel
			})
			this.updateBatteryModel(params.batteryModel)
		}

		return changes
	}

	get batteryModelValue(): Primitives<BatteryModelName> {
		return this.batteryModel.value
	}

	updateBatteryModel(newValue: Primitives<BatteryModelName>): void {
		this.batteryModel = new BatteryModelName(newValue)
	}
}
