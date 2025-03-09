import { BrandId } from '../../../../Brand/domain/BrandId'
import { CategoryDefaultData, type CategoryValues } from '../../../../Category/Category/domain/CategoryDefaultData'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../ModelSeries/domain/Generic'
import { ModelSeries } from '../../../ModelSeries/domain/ModelSeries'
import { type ModelSeriesDto } from '../../../ModelSeries/domain/ModelSeries.dto'
import { ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/ModelSeriesName'
import { ModelMouseInputType } from './ModelMouseInputType'
import { type MouseModelsPrimitives, type MouseModelsParams } from './MouseModels.dto'

export class MouseModels extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		private InputTypeId: ModelMouseInputType
	) {
		super(id, name, categoryId, brandId, generic)
	}

	static create(params: MouseModelsParams): MouseModels {
		const id = String(ModelSeriesId.random())
		return new MouseModels(
			new ModelSeriesId(id),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new ModelMouseInputType(params.inputTypeId)
		)
	}

	public static isMouseCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		const AcceptedMouseCategories: CategoryValues[] = ['Mouses']
		return AcceptedMouseCategories.includes(CategoryDefaultData[categoryId])
	}

	static fromPrimitives(primitives: ModelSeriesDto): MouseModels {
		if (!primitives.modelMouse) {
			throw new Error('Error al cargar la información de mouses')
		}
		return new MouseModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			new ModelMouseInputType(primitives.modelMouse.inputTypeId)
		)
	}

	toPrimitives(): MouseModelsPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			categoryId: this.categoryIdValue,
			brandId: this.brandIdValue,
			generic: this.genericValue,
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
