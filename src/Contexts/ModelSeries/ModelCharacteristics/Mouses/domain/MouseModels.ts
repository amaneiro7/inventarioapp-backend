import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { ProcessorId } from '../../../../Features/Processor/Processor/domain/ProcessorId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../ModelSeries/domain/valueObject/Generic'
import { ModelSeries } from '../../../ModelSeries/domain/entity/ModelSeries'
import { type ModelSeriesDto } from '../../../ModelSeries/domain/entity/ModelSeries.dto'
import { ModelSeriesId } from '../../../ModelSeries/domain/valueObject/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/valueObject/ModelSeriesName'
import { ModelMouseInputType } from './ModelMouseInputType'
import { type MouseModelsPrimitives, type MouseModelsParams } from './MouseModels.dto'

/**
 * @description Represents a mouse model, extending the base ModelSeries class.
 */
export class MouseModels extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		processors: ProcessorId[],
		private InputTypeId: ModelMouseInputType
	) {
		super(id, name, categoryId, brandId, generic, processors)
	}

	static create(params: MouseModelsParams): MouseModels {
		return new MouseModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			this.addProcessorIds({ categoryId: params.categoryId, processorIds: params.processors }),
			new ModelMouseInputType(params.inputTypeId)
		)
	}

	static isMouseCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		return categoryId === CategoryValues.MOUSE
	}

	static fromPrimitives(primitives: ModelSeriesDto): MouseModels {
		if (!primitives.modelMouse) {
			throw new Error('Mouse model data is missing')
		}
		return new MouseModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			primitives.processors.map(processor => new ProcessorId(processor.id)),
			new ModelMouseInputType(primitives.modelMouse.inputTypeId)
		)
	}

	toPrimitives(): MouseModelsPrimitives {
		return {
			...super.toPrimitives(),
			inputTypeId: this.inputTypeValue
		}
	}

	get inputTypeValue(): Primitives<ModelMouseInputType> {
		return this.InputTypeId.value
	}

	updateInputType(newValue: Primitives<ModelMouseInputType>): void {
		this.InputTypeId = new ModelMouseInputType(newValue)
	}
}
