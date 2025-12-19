import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { ProcessorId } from '../../../../Features/Processor/Processor/domain/ProcessorId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../ModelSeries/domain/Generic'
import { ModelSeries } from '../../../ModelSeries/domain/entity/ModelSeries'
import { type ModelSeriesDto } from '../../../ModelSeries/domain/entity/ModelSeries.dto'
import { ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/ModelSeriesName'
import { type MonitorModelsParams, type MonitorModelsPrimitives } from './MonitoModels.dto'
import { MonitorHasDVI } from './MonitorHasDVI'
import { MonitorHasHDMI } from './MonitorHasHDMI'
import { MonitorHasVGA } from './MonitorHasVGA'
import { MonitorScreenSize } from './MonitorScreenSize'

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
		processors: ProcessorId[],
		private screenSize: MonitorScreenSize,
		private hasDVI: MonitorHasDVI,
		private hasHDMI: MonitorHasHDMI,
		private hasVGA: MonitorHasVGA
	) {
		super(id, name, categoryId, brandId, generic, processors)
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
			this.addProcessorIds({ categoryId: params.categoryId, processorIds: params.processors }),
			new MonitorScreenSize(params.screenSize),
			new MonitorHasDVI(params.hasDVI),
			new MonitorHasHDMI(params.hasHDMI),
			new MonitorHasVGA(params.hasVGA)
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
			primitives.processors.map(processor => new ProcessorId(processor.id)),
			new MonitorScreenSize(primitives.modelMonitor.screenSize),
			new MonitorHasDVI(primitives.modelMonitor.hasDVI),
			new MonitorHasHDMI(primitives.modelMonitor.hasHDMI),
			new MonitorHasVGA(primitives.modelMonitor.hasVGA)
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
