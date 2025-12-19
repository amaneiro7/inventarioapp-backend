import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { Generic } from '../valueObject/Generic'
import { ModelSeriesId } from '../valueObject/ModelSeriesId'
import { ModelSeriesName } from '../valueObject/ModelSeriesName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesDto, type ModelSeriesParams, type ModelSeriesPrimitives } from './ModelSeries.dto'
import { ProcessorId } from '../../../../Features/Processor/Processor/domain/ProcessorId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { ModelSeriesRepository } from '../repository/ModelSeriesRepository'
import { InputTypeRepository } from '../../InputType/domain/repository/InputTypeRepository'
import { MemoryRamTypeRepository } from '../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { CategoryRepository } from '../../../../Category/Category/domain/CategoryRepository'
import { BrandRepository } from '../../../../Brand/domain/repository/BrandRepository'
import { ProcessorRepository } from '../../../../Features/Processor/Processor/domain/ProcessorRepository'
import { ModelSeriesBrand } from '../valueObject/ModelSeriesBrand'
import { ModelSeriesCategory } from '../valueObject/ModelSeriesCategory'
import { ProcessorDoesNotExistError } from '../../../../Features/Processor/Processor/domain/ProcessorDoesNotExistError'

export interface ModelDependencies {
	modelSeriesRepository: ModelSeriesRepository
	inputTypeRepository: InputTypeRepository
	memoryRamTypeRepository: MemoryRamTypeRepository
	categoryRepository: CategoryRepository
	brandRepository: BrandRepository
	processorRepository: ProcessorRepository
}

/**
 * @description Represents the ModelSeries domain entity.
 */
export class ModelSeries extends AggregateRoot {
	constructor(
		private readonly id: ModelSeriesId,
		private name: ModelSeriesName,
		private categoryId: CategoryId,
		private brandId: BrandId,
		private generic: Generic,
		private processors: ProcessorId[]
	) {
		super()
	}

	/**
	 * @description Updates the model series fields. Subclasses should override this method
	 * to update their specific fields, calling super.update() first.
	 */
	async update(params: Partial<ModelSeriesParams>, dependencies: ModelDependencies): Promise<void> {
		await Promise.all([
			ModelSeriesCategory.updateCategoryField({
				repository: dependencies.categoryRepository,
				categoryId: params.categoryId,
				entity: this
			}),
			ModelSeriesBrand.updateBrandField({
				repository: dependencies.brandRepository,
				brandId: params.brandId,
				entity: this
			}),
			ModelSeriesName.updateNameField({
				repository: dependencies.modelSeriesRepository,
				name: params.name,
				entity: this
			}),
			Generic.updateGenericField({ generic: params.generic, entity: this }),
			this.ensureProcessorsExistAndUpdate({
				entity: this,
				processors: params.processors,
				repository: dependencies.processorRepository
			})
		])
	}

	private async ensureProcessorsExistAndUpdate({
		entity,
		processors,
		repository
	}: {
		processors?: Primitives<ProcessorId>[]
		entity: ModelSeries
		repository: ProcessorRepository
	}): Promise<void> {
		if (processors === undefined) return

		const uniqueProcessors = [...new Set(processors)]
		const newProcessors = uniqueProcessors.filter(processorId => !entity.pocessorsValue.includes(processorId))

		if (newProcessors.length > 0) {
			await Promise.all(
				newProcessors.map(async processorId => {
					const processor = await repository.findById(processorId)
					if (processor === null) throw new ProcessorDoesNotExistError(processorId)
				})
			)
		}
		entity.updateProcessors({ processorIds: uniqueProcessors, categoryId: entity.categoryValue })
	}

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
