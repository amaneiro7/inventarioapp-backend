import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { Generic } from '../Generic'
import { ModelSeriesId } from '../ModelSeriesId'
import { ModelSeriesName } from '../ModelSeriesName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesDto, type ModelSeriesParams, type ModelSeriesPrimitives } from './ModelSeries.dto'
import { ProcessorId } from '../../../../Features/Processor/Processor/domain/ProcessorId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'

/**
 * @description Represents the ModelSeries domain entity.
 */
export class ModelSeries {
	constructor(
		private readonly id: ModelSeriesId,
		private name: ModelSeriesName,
		private categoryId: CategoryId,
		private brandId: BrandId,
		private generic: Generic,
		private processors: ProcessorId[]
	) {}

	static create(params: ModelSeriesParams): ModelSeries {
		return new ModelSeries(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			this.addProcessorIds({ categoryId: params.categoryId, processorIds: params.processors })
		)
	}

	static fromPrimitives(primitives: ModelSeriesDto): ModelSeries {
		return new ModelSeries(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			primitives.processors.map(processor => new ProcessorId(processor.id))
		)
	}

	toPrimitives(): ModelSeriesPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			categoryId: this.categoryValue,
			brandId: this.brandIdValue,
			generic: this.genericValue,
			processors: this.pocessorsValue
		}
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

	updateProcessors({
		processorIds,
		categoryId
	}: {
		processorIds: Primitives<ProcessorId>[]
		categoryId: Primitives<CategoryId>
	}): void {
		this.processors = ModelSeries.addProcessorIds({ processorIds, categoryId })
	}
	static addProcessorIds({
		processorIds,
		categoryId
	}: {
		processorIds: Primitives<ProcessorId>[]
		categoryId: Primitives<CategoryId>
	}): ProcessorId[] {
		const acceptedCategories =
			categoryId === CategoryValues.ALLINONE ||
			categoryId === CategoryValues.COMPUTADORAS ||
			categoryId === CategoryValues.LAPTOPS ||
			categoryId === CategoryValues.SERVIDORES
		if (acceptedCategories) {
			return processorIds.map(processorId => new ProcessorId(processorId))
		}
		return []
	}

	get idValue(): Primitives<ModelSeriesId> {
		return this.id.value
	}

	get nameValue(): Primitives<ModelSeriesName> {
		return this.name.value
	}

	get categoryValue(): Primitives<CategoryId> {
		return this.categoryId.value
	}

	get brandIdValue(): Primitives<BrandId> {
		return this.brandId.value
	}

	get genericValue(): Primitives<Generic> {
		return this.generic.value
	}

	get pocessorsValue(): Primitives<ProcessorId>[] {
		return this.processors.map(processorId => processorId.value)
	}
}
