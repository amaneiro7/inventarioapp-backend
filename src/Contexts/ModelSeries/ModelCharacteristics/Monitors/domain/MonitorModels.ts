import { BrandId } from '../../../../Brand/domain/BrandId'
import { CategoryDefaultData, type CategoryValues } from '../../../../Category/Category/domain/CategoryDefaultData'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../ModelSeries/domain/Generic'
import { ModelSeries } from '../../../ModelSeries/domain/ModelSeries'
import { type ModelSeriesDto } from '../../../ModelSeries/domain/ModelSeries.dto'
import { ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/ModelSeriesName'
import { type MonitorModelsParams, type MonitorModelsPrimitives } from './MonitoModels.dto'
import { MonitorHasDVI } from './MonitorHasDVI'
import { MonitorHasHDMI } from './MonitorHasHDMI'
import { MonitorHasVGA } from './MonitorHasVGA'
import { MonitorScreenSize } from './MonitorScreenSize'

export class MonitorModels extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		private screenSize: MonitorScreenSize,
		private hasDVI: MonitorHasDVI,
		private hasHDMI: MonitorHasHDMI,
		private hasVGA: MonitorHasVGA
	) {
		super(id, name, categoryId, brandId, generic)
	}

	static create(params: MonitorModelsParams): MonitorModels {
		if (!this.isMonitorCategory({ categoryId: params.categoryId })) {
			throw new Error('Invalid category')
		}

		const id = ModelSeriesId.random().value
		return new MonitorModels(
			new ModelSeriesId(id),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new MonitorScreenSize(params.screenSize),
			new MonitorHasDVI(params.hasDVI),
			new MonitorHasHDMI(params.hasHDMI),
			new MonitorHasVGA(params.hasVGA)
		)
	}

	public static isMonitorCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		const AcceptedMonitorCategories: CategoryValues[] = ['Monitores']
		return AcceptedMonitorCategories.includes(CategoryDefaultData[categoryId])
	}

	static fromPrimitives(primitives: ModelSeriesDto): MonitorModels {
		if (!primitives.modelMonitor) {
			throw new Error('Error al cargar la información de Monitores')
		}
		return new MonitorModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			new MonitorScreenSize(primitives.modelMonitor.screenSize),
			new MonitorHasDVI(primitives.modelMonitor.hasDVI),
			new MonitorHasHDMI(primitives.modelMonitor.hasHDMI),
			new MonitorHasVGA(primitives.modelMonitor.hasVGA)
		)
	}

	toPrimitives(): MonitorModelsPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			categoryId: this.categoryIdValue,
			brandId: this.brandIdValue,
			generic: this.genericValue,
			screenSize: this.screenSizeValue,
			hasDVI: this.hasDVIValue,
			hasHDMI: this.hasHDMIValue,
			hasVGA: this.hasVGAValue
		}
	}

	get screenSizeValue(): Primitives<MonitorScreenSize> {
		return this.screenSize.value
	}

	get hasDVIValue(): Primitives<MonitorHasDVI> {
		return this.hasDVI.value
	}

	get hasHDMIValue(): Primitives<MonitorHasHDMI> {
		return this.hasHDMI.value
	}

	get hasVGAValue(): Primitives<MonitorHasVGA> {
		return this.hasVGA.value
	}

	updateScreenSize(newValue: Primitives<MonitorScreenSize>): void {
		this.screenSize = new MonitorScreenSize(newValue)
	}
	updateHasDVI(newValue: Primitives<MonitorHasDVI>): void {
		this.hasDVI = new MonitorHasDVI(newValue)
	}
	updateHasHDMI(newValue: Primitives<MonitorHasHDMI>): void {
		this.hasHDMI = new MonitorHasHDMI(newValue)
	}
	updateHasVGA(newValue: Primitives<MonitorHasVGA>): void {
		this.hasVGA = new MonitorHasVGA(newValue)
	}
}
