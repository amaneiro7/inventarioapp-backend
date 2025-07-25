import { BrandId } from '../../../../../Brand/domain/BrandId'
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

export class ComputerModels extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		private memoryRamTypeId: ComputerMemoryRamType,
		private memoryRamSlotQuantity: MemoryRamSlotQuantity,
		private hasBluetooth: HasBluetooth,
		private hasWifiAdapter: HasWifiAdapter,
		private hasDVI: HasDVI,
		private hasHDMI: HasHDMI,
		private hasVGA: HasVGA
	) {
		super(id, name, categoryId, brandId, generic)
	}

	static create(params: ComputerModelsParams): ComputerModels {
		const id = ModelSeriesId.random().value
		return new ComputerModels(
			new ModelSeriesId(id),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new ComputerMemoryRamType(params.memoryRamTypeId),
			new MemoryRamSlotQuantity(params.memoryRamSlotQuantity),
			new HasBluetooth(params.hasBluetooth),
			new HasWifiAdapter(params.hasWifiAdapter),
			new HasDVI(params.hasDVI),
			new HasHDMI(params.hasHDMI),
			new HasVGA(params.hasVGA)
		)
	}

	public static isComputerCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		const AcceptedComputerCategories: CategoryValues[] = [
			CategoryValues.COMPUTADORAS,
			CategoryValues.ALLINONE,
			CategoryValues.SERVIDORES
		]
		return AcceptedComputerCategories.some(category => category === categoryId)
	}

	static fromPrimitives(primitives: ModelSeriesDto): ComputerModels {
		if (!primitives.modelComputer) {
			throw new Error('Error al extraer los datos de modelos de computadora')
		}
		return new ComputerModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
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
