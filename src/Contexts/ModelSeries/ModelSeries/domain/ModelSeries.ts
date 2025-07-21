import { BrandId } from '../../../Brand/domain/BrandId'
import { CategoryId } from '../../../Category/Category/domain/CategoryId'
import { Generic } from './Generic'
import { ModelSeriesId } from './ModelSeriesId'
import { ModelSeriesName } from './ModelSeriesName'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesDto, type ModelSeriesParams, type ModelSeriesPrimitives } from './ModelSeries.dto'
export class ModelSeries {
	constructor(
		private readonly id: ModelSeriesId,
		private name: ModelSeriesName,
		private categoryId: CategoryId,
		private brandId: BrandId,
		private generic: Generic
	) {}

	static create(params: ModelSeriesParams): ModelSeries {
		const id = ModelSeriesId.random().value
		return new ModelSeries(
			new ModelSeriesId(id),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic)
		)
	}

	updateName(newName: Primitives<ModelSeriesName>): void {
		this.name = new ModelSeriesName(newName)
	}

	updateCategoryId(newCategoryId: Primitives<CategoryId>): void {
		this.categoryId = new CategoryId(newCategoryId)
	}

	updateBrandId(newBrandId: Primitives<BrandId>): void {
		this.brandId = new BrandId(newBrandId)
	}

	updateGeneric(generic: Primitives<Generic>): void {
		this.generic = new Generic(generic)
	}

	static fromPrimitives(primitives: ModelSeriesDto): ModelSeries {
		return new ModelSeries(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic)
		)
	}

	toPrimitives(): ModelSeriesPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			categoryId: this.categoryIdValue,
			brandId: this.brandIdValue,
			generic: this.genericValue
		}
	}

	get idValue(): Primitives<ModelSeriesId> {
		return this.id.value
	}

	get nameValue(): Primitives<ModelSeriesName> {
		return this.name.value
	}

	get categoryIdValue(): Primitives<CategoryId> {
		return this.categoryId.value
	}

	get brandIdValue(): Primitives<BrandId> {
		return this.brandId.value
	}
	get genericValue(): Primitives<Generic> {
		return this.generic.value
	}
}
