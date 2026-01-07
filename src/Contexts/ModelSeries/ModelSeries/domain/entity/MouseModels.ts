import { ModelSeries } from '../../../ModelSeries/domain/entity/ModelSeries'
import { ModelSeriesId } from '../../../ModelSeries/domain/valueObject/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/valueObject/ModelSeriesName'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { Generic } from '../../../ModelSeries/domain/valueObject/Generic'
import { InputTypeId } from '../../../InputType/domain/valueObject/InputTypeId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { InputTypeExistenceChecker } from '../../../InputType/domain/service/InputTypeExistanceChecker'
import { type ModelSeriesDto } from '../dto/ModelSeries.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MouseModelsPrimitives, type MouseModelsParams } from '../dto/MouseModels.dto'
import { type ModelDependencies } from './ModelDependencies'

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
		private InputTypeId: InputTypeId
	) {
		super(id, name, categoryId, brandId, generic)
	}

	static create(params: MouseModelsParams): MouseModels {
		return new MouseModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new InputTypeId(params.inputTypeId)
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
			new InputTypeId(primitives.modelMouse.inputTypeId)
		)
	}

	toPrimitives(): MouseModelsPrimitives {
		return {
			...super.toPrimitives(),
			inputTypeId: this.inputTypeValue
		}
	}

	async update(
		params: Partial<MouseModelsParams>,
		dependencies: ModelDependencies
	): Promise<Array<{ field: string; oldValue: unknown; newValue: unknown }>> {
		const changes = await super.update(params, dependencies)

		if (params.inputTypeId !== undefined && this.inputTypeValue !== params.inputTypeId) {
			const inputTypeExistenceChecker = new InputTypeExistenceChecker(dependencies.inputTypeRepository)
			await inputTypeExistenceChecker.ensureExist(params.inputTypeId)
			changes.push({
				field: 'inputTypeId',
				oldValue: this.inputTypeValue,
				newValue: params.inputTypeId
			})
			this.updateInputType(params.inputTypeId)
		}
		return changes
	}

	get inputTypeValue(): Primitives<InputTypeId> {
		return this.InputTypeId.value
	}

	updateInputType(newValue: Primitives<InputTypeId>): void {
		this.InputTypeId = new InputTypeId(newValue)
	}
}
