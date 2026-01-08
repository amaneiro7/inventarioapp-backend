import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { ModelSeriesId } from '../valueObject/ModelSeriesId'
import { ModelSeriesName } from '../valueObject/ModelSeriesName'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { Generic } from '../valueObject/Generic'
import { ModelSeriesCreatedDomainEvent } from '../event/ModelSeriesCreatedDomainEvent'
import { ModelSeriesRenamedDomainEvent } from '../event/ModelSeriesRenamedDomainEvent'
import { ModelSeriesUpdatedDomainEvent } from '../event/ModelSeriesUpdatedDomainEvent'
import { ModelSeriesNameUniquenessChecker } from '../service/ModelSeriesNameUniquenessChecker'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesDto, type ModelSeriesParams, type ModelSeriesPrimitives } from '../dto/ModelSeries.dto'
import { type ModelDependencies } from './ModelDependencies'

/**
 * @description Represents the ModelSeries domain entity.
 */
export class ModelSeries extends AggregateRoot {
	constructor(
		private readonly id: ModelSeriesId,
		private name: ModelSeriesName,
		private readonly categoryId: CategoryId,
		private readonly brandId: BrandId,
		private generic: Generic
	) {
		super()
	}

	static create(params: ModelSeriesParams): ModelSeries {
		const id = ModelSeriesId.random()
		const model = new ModelSeries(
			id,
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic)
		)

		model.record(
			new ModelSeriesCreatedDomainEvent({
				aggregateId: model.idValue,
				name: model.nameValue,
				categoryId: model.categoryValue,
				brandId: model.brandValue
			})
		)
		return model
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
			categoryId: this.categoryValue,
			brandId: this.brandValue,
			generic: this.genericValue,
			processors: [] // Base models do not have processors
		}
	}

	async update(
		params: Partial<ModelSeriesParams>,
		dependencies: ModelDependencies
	): Promise<Array<{ field: string; oldValue: unknown; newValue: unknown }>> {
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.name !== undefined && this.nameValue !== params.name) {
			const uniquenessChecker = new ModelSeriesNameUniquenessChecker({
				modelSeriesRepository: dependencies.modelSeriesRepository
			})
			await uniquenessChecker.ensureIsUnique(params.name, this.brandValue, this.idValue)
			changes.push({
				field: 'name',
				oldValue: this.nameValue,
				newValue: params.name
			})
			this.updateName(params.name)
		}
		if (params.generic !== undefined && this.genericValue !== params.generic) {
			changes.push({
				field: 'generic',
				oldValue: this.genericValue,
				newValue: params.generic
			})
			this.updateGeneric(params.generic)
		}

		return changes
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new ModelSeriesUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	updateName(newName: Primitives<ModelSeriesName>): void {
		const oldName = this.name.value
		this.name = new ModelSeriesName(newName)
		this.record(
			new ModelSeriesRenamedDomainEvent({
				aggregateId: this.idValue,
				oldName,
				newName: this.name.value
			})
		)
	}

	updateGeneric(generic: Primitives<Generic>): void {
		this.generic = new Generic(generic)
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

	get brandValue(): Primitives<BrandId> {
		return this.brandId.value
	}

	get genericValue(): Primitives<Generic> {
		return this.generic.value
	}
}
