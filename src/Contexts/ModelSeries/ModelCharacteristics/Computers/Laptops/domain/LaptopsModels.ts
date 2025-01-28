import { BrandId } from '../../../../../Brand/domain/BrandId'
import {
	type CategoryValues,
	CategoryDefaultData
} from '../../../../../Category/Category/domain/CategoryDefaultData'
import { CategoryId } from '../../../../../Category/Category/domain/CategoryId'
import { MemoryRamTypeId } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeId'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../../ModelSeries/domain/Generic'
import { ModelSeriesDto } from '../../../../ModelSeries/domain/ModelSeries.dto'
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
import {
	type LaptopModelsParams,
	type LaptopModelsPrimitives
} from './LaptopsModels.dto'

export class LaptopsModels extends ComputerModels {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
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
		const id = String(ModelSeriesId.random())
		return new LaptopsModels(
			new ModelSeriesId(id),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
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

	public static isLaptopCategory({
		categoryId
	}: {
		categoryId: Primitives<CategoryId>
	}): boolean {
		const AcceptedComputerCategories: CategoryValues[] = ['Laptops']
		return AcceptedComputerCategories.includes(
			CategoryDefaultData[categoryId]
		)
	}

	static fromPrimitives(primitives: ModelSeriesDto): LaptopsModels {
		if (!primitives.modelLaptop) {
			throw new Error(
				'Error al cargar la información de modelos de Laptos'
			)
		}
		return new LaptopsModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			new MemoryRamTypeId(primitives.modelLaptop.memoryRamTypeId),
			new MemoryRamSlotQuantity(
				primitives.modelLaptop.memoryRamSlotQuantity
			),
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
			id: this.idValue,
			name: this.nameValue,
			categoryId: this.categoryIdValue,
			brandId: this.brandIdValue,
			generic: this.genericValue,
			memoryRamTypeId: this.memoryRamTypeValue,
			memoryRamSlotQuantity: this.memoryRamSlotQuantityValue,
			hasBluetooth: this.hasBluetoothValue,
			hasWifiAdapter: this.hasWifiAdapterValue,
			hasDVI: this.hasDVIValue,
			hasHDMI: this.hasHDMIValue,
			hasVGA: this.hasVGAValue,
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
