import { BrandId } from '../../../../../Brand/domain/valueObject/BrandId'
import { CategoryId } from '../../../../../Category/Category/domain/CategoryId'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { MemoryRamTypeId } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeId'
import { ProcessorId } from '../../../../../Features/Processor/Processor/domain/ProcessorId'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../../ModelSeries/domain/Generic'
import { type ModelSeriesDto } from '../../../../ModelSeries/domain/entity/ModelSeries.dto'
import { ModelSeriesId } from '../../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../../ModelSeries/domain/ModelSeriesName'
import { ComputerModels } from '../../Computer/domain/ComputerModels'
import { HasBluetooth } from '../../Computer/domain/HasBluetooth'
import { HasDVI } from '../../Computer/domain/HasDVI'
import { HasHDMI } from '../../Computer/domain/HasHDMI'
import { HasVGA } from '../../Computer/domain/HasVGA'
import { HasWifiAdapter } from '../../Computer/domain/HasWifiAdapter'
import { MemoryRamSlotQuantity } from '../../Computer/domain/MemoryRamSlotQuantity'
import { BatteryModelName } from './BatteryModelName'
import { type LaptopModelsParams, type LaptopModelsPrimitives } from './LaptopsModels.dto'

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
		processors: ProcessorId[],
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
		return new LaptopsModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			this.addProcessorIds({ categoryId: params.categoryId, processorIds: params.processors }),
			new MemoryRamTypeId(params.memoryRamTypeId),
			new MemoryRamSlotQuantity(params.memoryRamSlotQuantity),
			new HasBluetooth(params.hasBluetooth),
			new HasWifiAdapter(params.hasWifiAdapter),
			new HasDVI(params.hasDVI),
			new HasHDMI(params.hasHDMI),
			new HasVGA(params.hasVGA),
			new BatteryModelName(params.batteryModel)
		)
	}

	static isLaptopCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		return categoryId === CategoryValues.LAPTOPS
	}

	static fromPrimitives(primitives: ModelSeriesDto): LaptopsModels {
		if (!primitives.modelLaptop) {
			throw new Error('Laptop model data is missing')
		}
		return new LaptopsModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			primitives.processors.map(processor => new ProcessorId(processor.id)),
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

	get batteryModelValue(): Primitives<BatteryModelName> {
		return this.batteryModel.value
	}

	updateBatterModel(newValue: Primitives<BatteryModelName>): void {
		this.batteryModel = new BatteryModelName(newValue)
	}
}
