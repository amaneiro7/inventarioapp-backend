import { ModelSeries } from './ModelSeries'
import { ModelSeriesId } from '../valueObject/ModelSeriesId'
import { ModelSeriesName } from '../valueObject/ModelSeriesName'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { Generic } from '../valueObject/Generic'
import { MonitorScreenSize } from '../valueObject/MonitorScreenSize'
import { HasDVI } from '../valueObject/HasDVI'
import { HasHDMI } from '../valueObject/HasHDMI'
import { HasVGA } from '../valueObject/HasVGA'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesDto } from '../dto/ModelSeries.dto'
import { type MonitorModelsParams, type MonitorModelsPrimitives } from '../dto/MonitoModels.dto'
import { type ModelDependencies } from './ModelDependencies'

/**
 * @description Represents a monitor model, extending the base ModelSeries class.
 */
export class MonitorModels extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		private screenSize: MonitorScreenSize,
		private hasDVI: HasDVI,
		private hasHDMI: HasHDMI,
		private hasVGA: HasVGA
	) {
		super(id, name, categoryId, brandId, generic)
	}

	static create(params: MonitorModelsParams): MonitorModels {
		if (!this.isMonitorCategory({ categoryId: params.categoryId })) {
			throw new Error('Invalid category for monitor model')
		}
		return new MonitorModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new MonitorScreenSize(params.screenSize),
			new HasDVI(params.hasDVI),
			new HasHDMI(params.hasHDMI),
			new HasVGA(params.hasVGA)
		)
	}

	static isMonitorCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		return categoryId === CategoryValues.MONITORES
	}

	static fromPrimitives(primitives: ModelSeriesDto): MonitorModels {
		if (!primitives.modelMonitor) {
			throw new Error('Monitor model data is missing')
		}
		return new MonitorModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			new MonitorScreenSize(primitives.modelMonitor.screenSize),
			new HasDVI(primitives.modelMonitor.hasDVI),
			new HasHDMI(primitives.modelMonitor.hasHDMI),
			new HasVGA(primitives.modelMonitor.hasVGA)
		)
	}

	toPrimitives(): MonitorModelsPrimitives {
		return {
			...super.toPrimitives(),
			screenSize: this.screenSizeValue,
			hasDVI: this.hasDVIValue,
			hasHDMI: this.hasHDMIValue,
			hasVGA: this.hasVGAValue
		}
	}

	async update(
		params: Partial<MonitorModelsParams>,
		dependencies: ModelDependencies
	): Promise<Array<{ field: string; oldValue: unknown; newValue: unknown }>> {
		const changes = await super.update(params, dependencies)

		if (params.screenSize !== undefined && this.screenSizeValue !== params.screenSize) {
			changes.push({
				field: 'screenSize',
				oldValue: this.screenSizeValue,
				newValue: params.screenSize
			})
			this.updateScreenSize(params.screenSize)
		}

		if (params.hasDVI !== undefined && this.hasDVIValue !== params.hasDVI) {
			changes.push({
				field: 'hasDVI',
				oldValue: this.hasDVIValue,
				newValue: params.hasDVI
			})
			this.updateHasDVI(params.hasDVI)
		}

		if (params.hasHDMI !== undefined && this.hasHDMIValue !== params.hasHDMI) {
			changes.push({
				field: 'hasHDMI',
				oldValue: this.hasHDMIValue,
				newValue: params.hasHDMI
			})
			this.updateHasHDMI(params.hasHDMI)
		}

		if (params.hasVGA !== undefined && this.hasVGAValue !== params.hasVGA) {
			changes.push({
				field: 'hasVGA',
				oldValue: this.hasVGAValue,
				newValue: params.hasVGA
			})
			this.updateHasVGA(params.hasVGA)
		}

		return changes
	}

	get screenSizeValue(): Primitives<MonitorScreenSize> {
		return this.screenSize.value
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

	updateScreenSize(newValue: Primitives<MonitorScreenSize>): void {
		this.screenSize = new MonitorScreenSize(newValue)
	}

	updateHasDVI(newValue: Primitives<HasDVI>): void {
		this.hasDVI = new HasDVI(newValue)
	}

	updateHasHDMI(newValue: Primitives<HasHDMI>): void {
		this.hasHDMI = new HasHDMI(newValue)
	}

	updateHasVGA(newValue: Primitives<HasVGA>): void {
		this.hasVGA = new HasVGA(newValue)
	}
}
